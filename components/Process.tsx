'use client';

import React from 'react';
import { motion } from 'motion/react';
import AIImage from '@/components/AIImage';
import { Leaf, Flame, Truck } from 'lucide-react';

const steps = [
  {
    title: 'MASSA ARTESANAL',
    description: 'Longa fermentação de 48h para uma leveza incomparável e sabor autêntico.',
    icon: Leaf,
    flavor: 'Chef hands kneading fresh pizza dough with flour dusting, professional lighting, rustic kitchen',
  },
  {
    title: 'FORNO A LENHA',
    description: 'Assada a 450°C em forno de pedra, garantindo a borda perfeita e crocante.',
    icon: Flame,
    flavor: 'Pizza inside a traditional wood-fired stone oven with glowing embers and flames, cinematic lighting',
  },
  {
    title: 'ENTREGA RÁPIDA',
    description: 'Sua pizza chega em até 30 min, quentinha e pronta para explodir de sabor.',
    icon: Truck,
    flavor: 'Pizza delivery box being carried, steam coming out, motion blur, city background at night',
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-4">NOSSO <span className="text-brand-red">PROCESSO 🛠️</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-black">Da nossa cozinha para a sua mesa</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                <AIImage 
                  flavor={step.flavor}
                  fallback={`https://picsum.photos/seed/proc-${i}/600/800`}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-black to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-brand-red/20">
                    <step.icon size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-brand-yellow transition-colors">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
