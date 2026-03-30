'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    const message = cart.map(item => `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`).join('%0A');
    const total = `%0A%0ATotal: R$ ${totalPrice.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/qr/SME5PTHV4R4AM1?text=Olá! Gostaria de fazer um pedido:%0A%0A${message}${total}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110]"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-dark z-[120] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-yellow" />
                <h2 className="text-xl font-display">SEU PEDIDO</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-lg">Seu carrinho está vazio</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 text-brand-yellow font-bold hover:underline"
                  >
                    Ver Cardápio
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="flex-1">
                      <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                      <p className="text-brand-yellow font-display">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 hover:text-brand-red transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 hover:text-brand-red transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button 
                      onClick={() => updateQuantity(item.id, -item.quantity)}
                      className="p-2 text-white/20 hover:text-brand-red transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-brand-black/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/60 font-bold">TOTAL</span>
                  <span className="text-3xl font-display text-brand-yellow">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                
                <div className="grid gap-3">
                  <button 
                    onClick={handleCheckout}
                    className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3"
                  >
                    FINALIZAR NO WHATSAPP
                  </button>
                  <button 
                    onClick={clearCart}
                    className="text-white/40 text-xs font-bold hover:text-brand-red transition-colors py-2"
                  >
                    LIMPAR CARRINHO
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
