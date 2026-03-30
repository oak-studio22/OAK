'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Heart, Flame, Leaf, Star } from 'lucide-react';
import Image from 'next/image';
import AIImage from '@/components/AIImage';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/CartContext';

const menuItems = [
  {
    id: 1,
    category: 'CLÁSSICAS',
    name: 'PIZZA DE CALABRESA',
    flavorPrompt: 'Centered top-down view of a gourmet Calabresa pizza, thin slices of pepperoni, caramelized red onions, premium black olives, melted mozzarella, golden crispy crust, professional food photography',
    description: 'Fatias de calabresa artesanal premium, cebolas roxas crocantes, azeitonas pretas e mussarela derretida sobre molho de tomate natural.',
    price: 48.90,
    calories: 1250,
    image: 'https://picsum.photos/seed/pizza-calabresa/600/450',
    tags: ['MAIS VENDIDA', 'TRADICIONAL'],
  },
  {
    id: 2,
    category: 'CLÁSSICAS',
    name: 'PIZZA MARGHERITA',
    flavorPrompt: 'Centered top-down view of an authentic Italian Margherita pizza, fresh basil leaves, buffalo mozzarella pearls, cherry tomatoes, wood-fired oven crust, professional food photography',
    description: 'Mussarela de búfala, rodelas de tomate cereja, manjericão fresco colhido na hora e um fio de azeite extra virgem.',
    price: 52.90,
    calories: 1100,
    image: 'https://picsum.photos/seed/pizza-margherita/600/450',
    tags: ['LEVE', 'VEGETARIANA'],
  },
  {
    id: 3,
    category: 'ESPECIAIS',
    name: 'PIZZA PORTUGUESA',
    flavorPrompt: 'Centered top-down view of a traditional Portuguese pizza, sliced eggs, ham, peas, onions, olives, melted mozzarella, professional food photography, rustic table',
    description: 'Presunto cozido, ovos selecionados, ervilhas frescas, cebola, azeitonas e uma generosa camada de mussarela.',
    price: 56.90,
    calories: 1350,
    image: 'https://picsum.photos/seed/pizza-portuguesa-pro/600/450',
    tags: ['COMPLETA'],
  },
  {
    id: 4,
    category: 'ESPECIAIS',
    name: 'FRANGO COM CATUPIRY',
    flavorPrompt: 'Centered top-down view of a creamy Chicken and Catupiry pizza, shredded chicken, Catupiry cheese dollops, corn, golden crust, professional food photography',
    description: 'Peito de frango desfiado e temperado, coberto com o legítimo Catupiry original e milho verde crocante.',
    price: 58.90,
    calories: 1400,
    image: 'https://picsum.photos/seed/pizza-frango-catupiry-pro/600/450',
    tags: ['QUERIDINHA'],
  },
  {
    id: 5,
    category: 'ESPECIAIS',
    name: 'QUATRO QUEIJOS',
    flavorPrompt: 'Centered top-down view of a Four Cheese pizza, bubbling melted Mozzarella, Parmesan, Provolone, and Gorgonzola, golden brown crust, professional food photography',
    description: 'Uma explosão de cremosidade com a combinação perfeita de Mussarela, Parmesão, Provolone e Gorgonzola premium.',
    price: 62.90,
    calories: 1500,
    image: 'https://picsum.photos/seed/pizza-quatro-queijos-pro/600/450',
    tags: ['EXTRA QUEIJO'],
  },
  {
    id: 6,
    category: 'ESPECIAIS',
    name: 'PIZZA DE PEPPERONI',
    flavorPrompt: 'Centered top-down view of a spicy Pepperoni pizza, crispy pepperoni slices, melted mozzarella, fresh oregano, thin crust, professional food photography',
    description: 'Pepperoni americano levemente picante, mussarela especial e orégano fresco sobre massa de longa fermentação.',
    price: 59.90,
    calories: 1300,
    image: 'https://picsum.photos/seed/pizza-pepperoni/600/450',
    tags: ['PICANTE', 'PREMIUM'],
  },
  {
    id: 7,
    category: 'DOCES',
    name: 'PIZZA DE CHOCOLATE',
    flavorPrompt: 'Centered top-down view of a decadent Chocolate dessert pizza, Belgian chocolate, strawberry slices, chocolate shavings, professional food photography',
    description: 'Cobertura cremosa de chocolate ao leite belga, finalizada com raspas de chocolate e morangos frescos (opcional).',
    price: 45.90,
    calories: 900,
    image: 'https://picsum.photos/seed/pizza-chocolate-pro/600/450',
    tags: ['SOBREMESA', 'IRRESISTÍVEL'],
  },
];

const categories = ['TODOS', 'CLÁSSICAS', 'ESPECIAIS', 'DOCES', 'ENTRADAS'];

export default function DigitalMenu() {
  const [activeCategory, setActiveCategory] = useState('TODOS');
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart } = useCart();

  const filteredItems = activeCategory === 'TODOS' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <section id="menu" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-5xl mb-8">NOSSO <span className="text-brand-yellow">CARDÁPIO 🎨</span></h2>
          
          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto pb-4 w-full justify-start md:justify-center no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold text-sm transition-all whitespace-nowrap border",
                  activeCategory === cat 
                    ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20" 
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-brand-dark rounded-3xl overflow-hidden border border-white/5 group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <AIImage 
                    flavor={item.flavorPrompt || item.name}
                    fallback={item.image}
                    alt={`Pizza ${item.name} artesanal com ingredientes frescos e queijo derretido - Fotografia profissional de gastronomia`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1",
                        tag === 'VEGANO' ? "bg-green-500 text-white" : "bg-brand-red text-white"
                      )}>
                        {tag === 'VEGANO' && <Leaf size={10} />}
                        {tag === 'PICANTE' && <Flame size={10} />}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-brand-red transition-colors"
                  >
                    <Heart size={20} fill={favorites.includes(item.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display">{item.name}</h3>
                    <div className="flex items-center gap-1 text-brand-yellow">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <p className="text-white/50 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] font-bold text-white/30 uppercase mb-8">
                    <span className="flex items-center gap-1"><Flame size={12} /> {item.calories} kcal</span>
                    <span>•</span>
                    <span>Artesanal</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-display text-brand-yellow">R$ {item.price.toFixed(2).replace('.', ',')}</span>
                    
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => addToCart(item)}
                        className="bg-brand-red px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-red/20 flex items-center gap-2 font-bold text-sm"
                      >
                        <Plus size={18} />
                        ADICIONAR
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
