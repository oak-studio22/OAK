'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ShoppingBag, Truck, Star } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/pizza-hero-cheese/1920/1080?blur=1"
          alt="Hero Background"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-black/80 via-transparent to-brand-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red px-4 py-1 rounded-full text-xs font-bold mb-6 border border-brand-red/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            NOVIDADE: MARGHERITA SUPREMA
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6">
            OAK <br />
            <span className="text-gradient">STUDIO 🎨</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-lg mb-10 font-medium">
            Design, inovação e criação digital premium para marcas que buscam o extraordinário.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#menu"
              className="btn-primary text-lg px-10 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              VER CARDÁPIO
            </a>
            <a 
              href="#delivery"
              className="btn-secondary text-lg px-10 flex items-center justify-center gap-2"
            >
              <Truck size={20} />
              DELIVERY GRÁTIS
            </a>
          </div>
        </motion.div>

        {/* Floating Burger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square animate-float group">
            <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-3xl group-hover:bg-brand-red/40 transition-colors duration-700" />
            <AIImage 
              flavor="Artisanal pizza slice with massive cheese pull, fresh basil leaves, and sliced red chili peppers, professional food photography, warm lighting, wooden table background"
              fallback="https://picsum.photos/seed/pizza-hero-slice/1200/1200"
              alt="Fatia de pizza artesanal com queijo derretido, manjericão fresco e pimenta - Pizzaria Premium"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover drop-shadow-[0_35px_35px_rgba(255,59,48,0.3)] rounded-full border-4 border-white/10"
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 right-10 glass p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="bg-brand-yellow text-black font-bold p-2 rounded-lg text-sm">
                -20%
              </div>
              <div>
                <p className="text-[10px] text-white/60 font-bold uppercase">Primeiro Pedido</p>
                <p className="font-bold">CUPOM: BEMVINDO</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute bottom-10 -left-10 glass p-4 rounded-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] text-white/60 font-bold uppercase">Avaliação</p>
                <p className="font-bold">4.9/5.0 ESTRELAS</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Deslize</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
