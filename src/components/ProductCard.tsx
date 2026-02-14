"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/lib/products'; // Ensure we import Product type if it's not global

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#f2efe6] mb-4 shadow-sm group-hover:shadow-soft-lift transition-all duration-500">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-[#32612d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 Mix-blend-overlay" />

          {product.bestseller && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#32612d] text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3 fill-current" />
              Bestseller
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/90 backdrop-blur-sm border-t border-[#dcd8cc]">
            <p className="text-[#32612d] font-medium text-sm text-center">View Details</p>
          </div>
        </div>
      </Link>

      <Link href={`/products/${product.id}`} className="block">
        <h3 className="font-serif text-lg text-[#000000] group-hover:text-[#32612d] transition-colors mb-1 tracking-wide">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-[#717f65] font-semibold text-lg">₹{product.price}</span>
          <span className="text-xs text-[#6B6462] font-medium">/ piece</span>
        </div>
        {product.minQuantity && (
          <p className="text-[10px] text-[#6B6462]/80 mt-1 uppercase tracking-wider">Min. {product.minQuantity} pcs</p>
        )}
      </Link>
    </motion.div>
  );
}
