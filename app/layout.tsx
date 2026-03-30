import type {Metadata} from 'next';
import {Poppins, Montserrat} from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/lib/CartContext';
import FloatingCart from '@/components/FloatingCart';
import CartModal from '@/components/CartModal';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Oak Studio | Design & Criação Digital',
  description: 'Estúdio de design e criação digital premium.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-[#1C1C1E] text-white antialiased selection:bg-[#FF3B30] selection:text-white" suppressHydrationWarning>
        <CartProvider>
          {children}
          <CartModal />
          <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
            <FloatingCart />
            <WhatsAppButton />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
