'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, Search, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'CARDÁPIO', href: '#menu' },
    { name: 'PROMOÇÕES', href: '#promos' },
    { name: 'COMBOS', href: '#combos' },
    { name: 'DELIVERY', href: '#delivery' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        isScrolled ? "py-3 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center animate-pulse-slow">
            <span className="text-white font-display text-2xl">O</span>
          </div>
          <span className="font-display text-xl tracking-tighter hidden sm:block">
            OAK <span className="text-brand-yellow">STUDIO</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold hover:text-brand-yellow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search size={20} />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-bold bg-brand-dark/50 px-3 py-1.5 rounded-full border border-white/10">
            <Clock size={14} className="text-brand-yellow" />
            <span className="hidden lg:inline">ABERTO AGORA</span>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 group"
          >
            <ShoppingCart size={22} />
            <span className="text-xs font-bold hidden lg:block group-hover:text-brand-yellow transition-colors uppercase">CARRINHO</span>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1C1C1E]"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="btn-primary py-2 px-6 text-sm hidden sm:flex"
          >
            PEDIR AGORA
          </button>

          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display text-2xl">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-display hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="btn-primary w-full py-6 text-xl"
              >
                PEDIR AGORA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
