'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promos" className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <AIImage 
          flavor="Gourmet Pepperoni Pizza with extreme cheese pull, professional food photography, dark background, warm lighting, vibrant colors"
          fallback="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1920"
          alt="Promoção Especial de Pizza com Pepperoni e queijo derretido - Oferta Limitada"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-red/90 via-brand-red/70 to-brand-orange/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white text-brand-red font-black px-6 py-2 rounded-full text-sm mb-8 animate-bounce"
          >
            🎉 PROMOÇÃO DA SEMANA
          </motion.span>
          
          <h2 className="text-6xl md:text-8xl mb-6">COMBO <span className="text-brand-yellow">GALERA</span></h2>
          <p className="text-2xl md:text-3xl font-medium mb-12">
            2 PIZZAS G + 1 BROTINHO DOCE + 2L REFRI <br />
            <span className="line-through opacity-50 text-xl">De R$ 149,90</span> por <span className="text-brand-yellow font-display text-5xl">R$ 99,90</span>
          </p>

          <button className="btn-primary bg-white text-brand-red shadow-none hover:bg-brand-yellow hover:text-black text-xl px-12 py-6 mb-12">
            APROVEITAR AGORA
          </button>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-8">
            {[
              { label: 'DIAS', value: timeLeft.days },
              { label: 'HORAS', value: timeLeft.hours },
              { label: 'MINUTOS', value: timeLeft.minutes },
              { label: 'SEGUNDOS', value: timeLeft.seconds },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-brand-black/40 backdrop-blur-md w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-display border border-white/20 mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <span className="text-[10px] font-black tracking-widest opacity-60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
