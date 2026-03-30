'use client';

import React from 'react';
import { motion } from 'motion/react';
import AIImage from '@/components/AIImage';

const galleryImages = [
  { flavor: 'Artisanal pizza being sliced with extreme cheese pull, professional lighting', span: 'col-span-2 row-span-2' },
  { flavor: 'Fresh basil leaves and cherry tomatoes on a wood-fired pizza crust, macro shot', span: 'col-span-1 row-span-1' },
  { flavor: 'Gourmet pizza with truffles and mushrooms on a dark slate background', span: 'col-span-1 row-span-1' },
  { flavor: 'Pizza dough being tossed by a chef in a traditional Italian kitchen', span: 'col-span-2 row-span-1' },
  { flavor: 'Close up of a bubbling hot pizza coming out of a wood-fired oven', span: 'col-span-1 row-span-2' },
  { flavor: 'A variety of fresh pizza ingredients: flour, tomatoes, basil, and mozzarella', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">NOSSA <span className="text-brand-yellow">ARTE 📸</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-black">Capturando a essência de cada fatia</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[800px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 group ${img.span}`}
            >
              <AIImage 
                flavor={img.flavor}
                fallback={`https://picsum.photos/seed/gal-${i}/800/800`}
                alt={`Galeria Oak Studio - ${img.flavor}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-brand-black/80 to-transparent">
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">{img.flavor.split(',')[0]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
