'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Instagram Gallery */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-display text-2xl">SIGA NO <span className="text-brand-red">INSTAGRAM 📸</span></h4>
            <a href="https://www.instagram.com/oakstudio.lab/" target="_blank" rel="noopener noreferrer" className="text-brand-yellow font-bold text-sm border-b border-brand-yellow pb-1">@OAKSTUDIO.LAB</a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square relative rounded-2xl overflow-hidden group border border-white/5">
                <AIImage 
                  flavor={`Instagram style photo of a delicious pizza, lifestyle photography, warm lighting, ${i}`}
                  fallback={`https://picsum.photos/seed/inst-${i}/300/300`}
                  alt={`Instagram Oak Studio - ${i}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-red/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center">
                <span className="text-white font-display text-xl">O</span>
              </div>
              <span className="font-display text-lg tracking-tighter">
                OAK <span className="text-brand-yellow">STUDIO</span>
              </span>
            </div>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              Criando experiências digitais inesquecíveis. O estúdio de design e criação mais premiado da região.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/oakstudio.lab/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              {[Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-red transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-8">ATENDIMENTO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista <br /> São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>contato@saborexplosivo.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-8">LINKS RÁPIDOS</h4>
            <ul className="space-y-4">
              {['Cardápio', 'Promoções', 'Combos', 'Delivery', 'Sobre Nós', 'Trabalhe Conosco'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-brand-yellow transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg mb-8">NEWSLETTER</h4>
            <p className="text-white/40 text-sm mb-6">Receba promoções exclusivas e novidades direto no seu e-mail.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <button className="btn-primary py-3">INSCREVER</button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © 2026 OAK STUDIO. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-4 grayscale opacity-30">
            {/* Payment Icons Placeholder */}
            <div className="w-8 h-5 bg-white rounded-sm" />
            <div className="w-8 h-5 bg-white rounded-sm" />
            <div className="w-8 h-5 bg-white rounded-sm" />
            <div className="w-8 h-5 bg-white rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
