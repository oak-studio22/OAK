import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Simple in-memory cache to avoid redundant API calls within the same session
const imageCache: Record<string, string> = {};

// Track ongoing requests to avoid duplicate concurrent calls for the same flavor
const pendingRequests: Record<string, Promise<string | null> | undefined> = {};

// Flag to temporarily disable AI generation if quota is hit
let isQuotaExceeded = false;
let quotaResetTime = 0;

/**
 * Generates a pizza image using Gemini AI.
 * Includes caching and rate-limit handling.
 */
export const generatePizzaImage = async (flavor: string): Promise<string | null> => {
  // 1. Check in-memory cache first
  if (imageCache[flavor]) {
    return imageCache[flavor];
  }

  // 2. Check sessionStorage (persists across refreshes but not tabs)
  if (typeof window !== 'undefined') {
    const cached = sessionStorage.getItem(`pizza_img_${flavor}`);
    if (cached) {
      imageCache[flavor] = cached;
      return cached;
    }
  }

  // 3. Check if we've recently hit a quota limit
  if (isQuotaExceeded && Date.now() < quotaResetTime) {
    return null;
  }

  // 4. Check if there's already a request in progress for this flavor
  if (pendingRequests[flavor]) {
    return pendingRequests[flavor];
  }

  if (!apiKey) {
    console.warn("Gemini API key not found. Falling back to placeholder.");
    return null;
  }

  // 5. Create a new request promise
  const requestPromise = (async () => {
    try {
      // Small random delay to stagger requests on page load
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));

      const ai = new GoogleGenAI({ apiKey });
      
      // If flavor already contains "pizza", don't append it again
      const subject = flavor.toLowerCase().includes('pizza') ? flavor : `${flavor} pizza`;
      
      const prompt = `Professional food photography of ${subject}. 
      Highly realistic, ultra HD, crispy crust, melted cheese, fresh ingredients. 
      Studio lighting, warm restaurant atmosphere, 45-degree angle, slightly blurred background on a wooden table. 
      Vibrant and natural colors.`;

      let response;
      let retries = 2;
      
      while (retries >= 0) {
        try {
          response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [{ text: prompt }],
            },
            config: {
              imageConfig: {
                aspectRatio: "4:3",
              }
            }
          });
          break; // Success
        } catch (err: any) {
          const isInternalError = err?.code === 500 || JSON.stringify(err).includes('500');
          if (isInternalError && retries > 0) {
            retries--;
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before retry
            continue;
          }
          throw err; // Re-throw if not 500 or no retries left
        }
      }

      if (!response) return null;

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64 = `data:image/png;base64,${part.inlineData.data}`;
          
          // Store in caches
          imageCache[flavor] = base64;
          if (typeof window !== 'undefined') {
            try {
              sessionStorage.setItem(`pizza_img_${flavor}`, base64);
            } catch (e) {
              // Session storage might be full
              console.warn("SessionStorage full, skipping persistent cache.");
            }
          }
          
          return base64;
        }
      }
      return null;
    } catch (error: any) {
      const errorStr = JSON.stringify(error);
      if (error?.status === 'RESOURCE_EXHAUSTED' || error?.code === 429 || errorStr.includes('429')) {
        console.warn("Gemini API Quota Exceeded (429). Using fallback images.");
        isQuotaExceeded = true;
        quotaResetTime = Date.now() + 5 * 60 * 1000; // Disable for 5 minutes
      } else {
        console.error("Error generating image:", error);
      }
      return null;
    } finally {
      // Clean up pending request
      delete pendingRequests[flavor];
    }
  })();

  pendingRequests[flavor] = requestPromise;
  return requestPromise;
};
