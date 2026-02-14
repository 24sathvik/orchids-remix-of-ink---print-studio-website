"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

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
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F0E8] mb-4">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {product.bestseller && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#C4A87C] text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Bestseller
            </div>
          )}


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
