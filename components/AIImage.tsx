'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { generatePizzaImage } from '@/lib/gemini';
import { motion, AnimatePresence } from 'motion/react';

interface AIImageProps {
  flavor: string;
  fallback: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

export default function AIImage({ flavor, fallback, alt, fill, sizes, className }: AIImageProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      // Small optimization: if we have a global cache, we could check it here
      // but the generatePizzaImage function already handles it.
      // We still want to show loading for a brief moment if it's not cached.
      
      setLoading(true);
      try {
        const generated = await generatePizzaImage(flavor);
        if (generated) {
          setSrc(generated);
        } else {
          setSrc(fallback);
        }
      } catch (err) {
        console.error("AIImage fetch error:", err);
        setSrc(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [flavor, fallback]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-brand-dark/50 backdrop-blur-sm z-10"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Gerando IA...</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full"
          >
            <Image
              src={src || fallback}
              alt={alt}
              fill={fill}
              sizes={sizes}
              className={className}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
