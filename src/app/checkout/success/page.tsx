"use client";

import { useEffect } from 'react';
import { useCart } from '@/components/CartProvider';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FFFDF9] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-elegant border border-[#E8E0D5]/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
          
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 text-green-500 mb-8">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          
          <h1 className="font-serif text-4xl text-[#2D2926] mb-4">Payment Successful!</h1>
          <p className="text-[#6B6462] mb-10 leading-relaxed font-light text-lg">
            Thank you for choosing Ink & Print Studio. Your order has been placed and is being processed. You will receive a confirmation email shortly.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/products"
              className="w-full py-4 bg-[#2D2926] text-white rounded-full font-medium hover:bg-[#C4A87C] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/"
              className="block text-sm text-[#C4A87C] font-semibold hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
