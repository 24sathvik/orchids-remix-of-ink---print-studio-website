"use client";

import { useCart } from '@/components/CartProvider';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Minus, Plus, Trash2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-20 bg-[#FFFDF9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F8F4EF] text-[#C4A87C] mb-8">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl text-[#2D2926] mb-4">Your bag is empty</h1>
          <p className="text-[#6B6462] text-lg mb-10 leading-relaxed">
            Looks like you haven&apos;t added any beautiful invitations to your bag yet.
          </p>
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#2D2926] text-white rounded-full hover:bg-[#C4A87C] transition-all shadow-lg font-medium"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          successUrl: `${window.location.origin}/checkout/success`,
          cancelUrl: `${window.location.origin}/checkout/cancel`,
        }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert('Checkout failed: ' + error.message);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2D2926]">Your Shopping Bag</h1>
          <p className="text-[#6B6462] mt-2">Review your selected items and proceed to checkout.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-3xl shadow-sm border border-[#E8E0D5]/50 group"
              >
                <div className="relative w-full sm:w-40 aspect-square rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl text-[#2D2926]">{item.product.title}</h3>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#6B6462] hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-[#6B6462] mb-4 line-clamp-2 font-light">
                      {item.product.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#C4A87C] font-medium uppercase tracking-widest">
                      <span className="px-2 py-1 bg-[#C4A87C]/10 rounded">Category: {item.product.category.replace('-', ' ')}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 mt-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest text-[#2D2926] font-bold">Quantity</span>
                      <div className="flex items-center border border-[#E8E0D5] rounded-full p-1 bg-[#F8F4EF]/50 w-fit">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= item.product.minQuantity}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white disabled:opacity-30 transition-colors shadow-sm"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors shadow-sm"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="block text-xs text-[#6B6462] mb-1">Total Price</span>
                      <span className="text-2xl font-semibold text-[#C4A87C]">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-elegant border border-[#E8E0D5]/50 sticky top-32">
              <h2 className="font-serif text-2xl text-[#2D2926] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[#6B6462]">
                  <span>Subtotal</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#6B6462]">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-[#6B6462]">
                  <span>Estimated Tax</span>
                  <span>₹0.00</span>
                </div>
                <div className="pt-4 border-t border-[#E8E0D5] flex justify-between items-end">
                  <span className="font-medium text-[#2D2926]">Total Amount</span>
                  <span className="text-3xl font-bold text-[#C4A87C]">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full py-5 bg-[#2D2926] text-white rounded-full font-medium hover:bg-[#C4A87C] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#6B6462]">
                  <ShieldCheck className="w-5 h-5 text-[#C4A87C]" />
                  Secure checkout with top-tier encryption
                </div>
                <div className="flex items-center gap-3 text-sm text-[#6B6462]">
                  <Truck className="w-5 h-5 text-[#C4A87C]" />
                  Estimated delivery: 7-10 business days
                </div>
              </div>
            </div>

            <div className="bg-[#F8F4EF] p-6 rounded-3xl border border-[#E8E0D5]/50">
              <h4 className="font-serif text-lg text-[#2D2926] mb-3">Need Help?</h4>
              <p className="text-sm text-[#6B6462] leading-relaxed">
                Our customer service team is available Mon-Sat, 9am-6pm. <br />
                <a href="tel:+919876543210" className="text-[#C4A87C] font-semibold hover:underline">+91 98765 43210</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
