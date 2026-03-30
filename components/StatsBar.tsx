'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, ShoppingCart, Zap } from 'lucide-react';
import AIImage from '@/components/AIImage';

const stats = [
  { icon: Star, value: '4.9/5.0', label: 'Avaliação' },
  { icon: ShoppingCart, value: '+50.000', label: 'Pizzas' },
  { icon: Users, value: '+15.000', label: 'Clientes' },
  { icon: Zap, value: '30min', label: 'Entrega' },
];

export default function StatsBar() {
  return (
    <section className="relative bg-brand-dark py-12 border-y border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
        <AIImage 
          flavor="Close up of raw pizza ingredients on a dark stone table, flour, basil, tomatoes"
          fallback="https://picsum.photos/seed/stats-bg/1920/400"
          alt="Textura de ingredientes de pizza"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-3 p-3 bg-white/5 rounded-2xl text-brand-yellow">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display text-brand-yellow mb-1">
                {stat.value}
              </h3>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Marquee Effect */}
      <div className="mt-12 flex whitespace-nowrap overflow-hidden border-t border-white/5 pt-8">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white/20 font-display text-2xl italic">
              <span>PIZZA EXPLOSIVA</span>
              <span className="text-brand-red">•</span>
              <span>FORNO A LENHA</span>
              <span className="text-brand-red">•</span>
              <span>MASSA ARTESANAL</span>
              <span className="text-brand-red">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
