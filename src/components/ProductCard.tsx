"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from './CartProvider';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F0E8] mb-4">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {product.bestseller && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#C4A87C] text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Bestseller
            </div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, product.minQuantity);
            }}
            className="absolute bottom-3 right-3 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#C4A87C] hover:text-white"
          >
            <ShoppingBag className="w-5 h-5" />
          </motion.button>
        </div>
      </Link>

      <Link href={`/products/${product.id}`}>
        <h3 className="font-serif text-lg text-[#2D2926] group-hover:text-[#C4A87C] transition-colors mb-1">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-[#C4A87C] font-semibold">₹{product.price}</span>
          <span className="text-xs text-[#6B6462]">/ piece</span>
        </div>
        <p className="text-xs text-[#6B6462] mt-1">Min. {product.minQuantity} pcs</p>
      </Link>
    </motion.div>
  );
}
