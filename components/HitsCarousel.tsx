'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Plus, Star } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

const hits = [
  {
    id: 1,
    name: 'PIZZA DE CALABRESA',
    flavorPrompt: 'Top-down view of a gourmet Calabresa pizza, centered composition, thin slices of pepperoni, red onions, black olives, melted cheese, professional food photography, studio lighting',
    price: '48,90',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
    tag: 'MAIS VENDIDA',
  },
  {
    id: 2,
    name: 'FRANGO COM CATUPIRY',
    flavorPrompt: 'Top-down view of a creamy Chicken and Catupiry pizza, centered composition, shredded chicken, dollops of Catupiry cheese, corn, professional food photography, warm lighting',
    price: '58,90',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    tag: 'QUERIDINHA',
  },
  {
    id: 3,
    name: 'QUATRO QUEIJOS',
    flavorPrompt: 'Top-down view of a Four Cheese pizza, centered composition, bubbling melted Mozzarella, Parmesan, Provolone, Gorgonzola, professional food photography, rustic background',
    price: '62,90',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?auto=format&fit=crop&q=80&w=800',
    tag: 'PREMIUM',
  },
];

export default function HitsCarousel() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-red font-bold tracking-widest mb-2"
            >
              SELEÇÃO DO CHEF
            </motion.p>
            <h2 className="text-5xl md:text-6xl">AS MAIS <span className="text-brand-yellow">PEDIDAS 🍕</span></h2>
          </div>
          <button className="text-brand-yellow font-bold border-b-2 border-brand-yellow pb-1 hover:text-white hover:border-white transition-all">
            VER TODAS AS PIZZAS
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-brand-dark rounded-[2.5rem] p-8 border border-white/5 hover:border-brand-red/30 transition-all duration-500"
            >
              {/* Tag */}
              <div className="absolute top-6 right-6 z-10">
                <span className="bg-brand-red text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                  {item.tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative aspect-square mb-8 transform group-hover:scale-110 transition-transform duration-500">
                <AIImage 
                  flavor={item.flavorPrompt || item.name}
                  fallback={item.image}
                  alt={`Pizza ${item.name} em destaque - A mais pedida da casa com ingredientes premium`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <div className="relative">
                <div className="flex items-center gap-1 text-brand-yellow mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-bold">{item.rating}</span>
                </div>
                <h3 className="text-2xl mb-4">{item.name}</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-white/40 font-bold uppercase block">Preço</span>
                    <span className="text-2xl font-display text-brand-yellow">R$ {item.price}</span>
                  </div>
                  <button className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-red/20 hover:scale-110 active:scale-90 transition-all">
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
