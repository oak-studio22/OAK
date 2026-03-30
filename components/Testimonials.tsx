'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Food Blogger',
    content: 'Melhor pizza que já comi! Chegou quentinha e a massa é super leve. O azeite trufado é de outro mundo.',
    rating: 5,
    image: 'https://picsum.photos/seed/u1/100/100',
    location: 'São Paulo, SP'
  },
  {
    name: 'Ricardo Lima',
    role: 'Cliente Fiel',
    content: 'A experiência do cardápio digital é incrível, mas o sabor supera tudo. A Trufa Negra é minha favorita!',
    rating: 5,
    image: 'https://picsum.photos/seed/u2/100/100',
    location: 'Rio de Janeiro, RJ'
  },
  {
    name: 'Juliana Costa',
    role: 'Designer',
    content: 'A embalagem realmente mantém a pizza crocante. Chegou perfeita, como se tivesse acabado de sair do forno.',
    rating: 5,
    image: 'https://picsum.photos/seed/u3/100/100',
    location: 'Curitiba, PR'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-5 grayscale pointer-events-none">
        <AIImage 
          flavor="Close up of artisanal pizza dough being prepared, flour on black table"
          fallback="https://picsum.photos/seed/test-bg/1920/600"
          alt="Textura de massa de pizza"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">O QUE DIZEM NOSSOS <span className="text-brand-yellow">CLIENTES 💬</span></h2>
          <p className="text-white/40">Mais de 15.000 clientes satisfeitos em todo o Brasil.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-brand-black p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-brand-red/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-8 text-brand-red/10 w-16 h-16" />
              
              <div className="flex gap-1 text-brand-yellow mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-white/70 italic mb-8 leading-relaxed">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-red/30">
                  <Image src={t.image} alt={t.name} fill sizes="56px" className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{t.role} • {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
