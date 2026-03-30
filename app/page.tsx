'use client';

import React from 'react';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import HitsCarousel from '@/components/HitsCarousel';
import CategoriesGrid from '@/components/CategoriesGrid';
import DigitalMenu from '@/components/DigitalMenu';
import PromoBanner from '@/components/PromoBanner';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Smartphone, Apple, Play } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <Process />
      <HitsCarousel />
      <CategoriesGrid />
      <DigitalMenu />
      <PromoBanner />
      <Gallery />
      
      {/* App Download Section */}
      <section className="py-24 bg-brand-yellow text-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-black text-white font-black px-4 py-1 rounded-full text-xs mb-6 inline-block">
                OFERTA EXCLUSIVA
              </span>
              <h2 className="text-5xl md:text-7xl mb-6">BAIXE NOSSO APP E GANHE <span className="text-brand-red">20% OFF</span></h2>
              <p className="text-xl mb-10 font-medium opacity-80">
                Peça sua pizza favorita mais rápido, acompanhe em tempo real e acumule pontos no nosso programa de fidelidade.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <Apple size={24} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold opacity-60 leading-none">Download on the</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <Play size={24} />
                  <div className="text-left">
                    <p className="text-[10px] font-bold opacity-60 leading-none">GET IT ON</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] flex justify-center"
            >
              <div className="relative w-72 h-full bg-black rounded-[3rem] border-8 border-black shadow-2xl overflow-hidden">
                <AIImage 
                  flavor="Gourmet pizza delivery app interface on a high-end smartphone screen, vibrant food photos, dark mode UI, professional lighting"
                  fallback="https://picsum.photos/seed/app/400/800"
                  alt="Interface do aplicativo de delivery de pizza no smartphone - Baixe agora"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold">Pedido Confirmado!</p>
                  <p className="text-[10px] opacity-60">Saindo para entrega</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />
      
      {/* Delivery Section */}
      <section id="delivery" className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 border border-white/5">
            <div className="lg:w-1/2">
              <h2 className="text-5xl mb-6">ENTREGA <span className="text-brand-red">RELÂMPAGO 🚀</span></h2>
              <ul className="space-y-6 mb-10">
                {[
                  'Pizzas entregues em até 30 minutos',
                  'Rastreamento em tempo real pelo App',
                  'Embalagem térmica que mantém a crocância',
                  'Taxa fixa de entrega para toda a cidade',
                  'Frete GRÁTIS em pedidos acima de R$ 60'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary px-12 py-6 text-xl">
                VER ÁREA DE ENTREGA
              </button>
            </div>
            <div className="lg:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10">
              <AIImage 
                flavor="Modern city map with glowing pizza delivery routes, GPS pins, dark mode aesthetics, high-tech interface"
                fallback="https://picsum.photos/seed/map/800/600"
                alt="Mapa de área de entrega da pizzaria com rotas rápidas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-brand-red p-6 rounded-full animate-pulse">
                    <MapPin size={48} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function MapPin({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
