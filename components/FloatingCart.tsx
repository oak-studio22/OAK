'use client';

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/lib/CartContext';

export default function FloatingCart() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {cartCount > 0 && (
        <motion.button
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(true)}
          className="bg-brand-red text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative"
          id="floating-cart-button"
        >
          <ShoppingCart size={32} />
          <span className="absolute -top-2 -right-2 bg-brand-yellow text-black text-xs font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-[#1C1C1E]">
            {cartCount}
          </span>
          <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
            Ver Carrinho
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
