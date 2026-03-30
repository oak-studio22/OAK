'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

const categories = [
  { name: 'CLÁSSICAS', icon: '🍕', items: '12 opções', image: 'https://picsum.photos/seed/pizcat1/400/400' },
  { name: 'ESPECIAIS', icon: '✨', items: '08 opções', image: 'https://picsum.photos/seed/pizcat2/400/400' },
  { name: 'DOCES', icon: '🍫', items: '05 opções', image: 'https://picsum.photos/seed/pizcat3/400/400' },
  { name: 'BEBIDAS', icon: '🥤', items: '15 opções', image: 'https://picsum.photos/seed/pizcat4/400/400' },
  { name: 'ENTRADAS', icon: '🥖', items: '06 opções', image: 'https://picsum.photos/seed/pizcat5/400/400' },
  { name: 'COMBOS', icon: '🎁', items: '04 opções', image: 'https://picsum.photos/seed/pizcat6/400/400' },
];

export default function CategoriesGrid() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">EXPLORE NOSSO <span className="text-brand-red">CARDÁPIO 🍽️</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Navegue pelas nossas categorias e encontre a explosão de sabor perfeita para o seu momento.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer"
            >
              <AIImage 
                flavor={
                  cat.name === 'CLÁSSICAS' ? 'Top-down view of a traditional Italian Pizza, centered' : 
                  cat.name === 'DOCES' ? 'Top-down view of a dessert chocolate pizza with strawberries, centered' : 
                  cat.name === 'BEBIDAS' ? 'Gourmet soda and cocktails with ice, professional lighting' :
                  cat.name === 'ENTRADAS' ? 'Artisanal breadsticks and appetizers, professional lighting' :
                  cat.name === 'COMBOS' ? 'Pizza combo with drinks and sides, professional lighting' :
                  `Top-down view of ${cat.name} pizza, centered`
                }
                fallback={cat.image}
                alt={`Categoria ${cat.name} - Explore as melhores opções de pizzas e acompanhamentos`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-red/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
                <h3 className="text-xl font-display mb-1">{cat.name}</h3>
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.items}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
