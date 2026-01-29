"use client";

import { motion } from 'framer-motion';
import { XCircle, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FFFDF9] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-elegant border border-[#E8E0D5]/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
          
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 text-red-500 mb-8">
            <XCircle className="w-12 h-12" />
          </div>
          
          <h1 className="font-serif text-4xl text-[#2D2926] mb-4">Payment Cancelled</h1>
          <p className="text-[#6B6462] mb-10 leading-relaxed font-light text-lg">
            Your payment process was cancelled. No worries, your items are still in your shopping bag.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/cart"
              className="w-full py-4 bg-[#2D2926] text-white rounded-full font-medium hover:bg-[#C4A87C] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Bag
            </Link>
            <Link 
              href="/contact"
              className="block text-sm text-[#C4A87C] font-semibold hover:underline"
            >
              Need help? Contact Support
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
