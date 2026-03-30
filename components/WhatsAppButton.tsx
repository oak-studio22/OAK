'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/qr/SME5PTHV4R4AM1"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative"
      id="whatsapp-action-button"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Finalizar Pedido no WhatsApp
      </span>
    </motion.a>
  );
}
