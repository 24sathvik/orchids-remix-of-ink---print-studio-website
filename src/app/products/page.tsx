"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, ChevronDown, Search, X } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products, categories } from '@/lib/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortPrice] = useState<'featured' | 'low-to-high' | 'high-to-low'>('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'low-to-high') return a.price - b.price;
      if (sortBy === 'high-to-low') return b.price - a.price;
      return 0;
    });

  const updateCategory = (id: string) => {
    setActiveCategory(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id === 'all') {
      params.delete('category');
    } else {
      params.set('category', id);
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C4A87C] mb-4">
                <button onClick={() => updateCategory('all')} className="hover:underline">Home</button>
                <span>/</span>
                <span className="font-semibold">Collections</span>
              </nav>
              <h1 className="font-serif text-4xl md:text-6xl text-[#2D2926]">Our Collections</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6462]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#E8E0D5] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all shadow-sm"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="w-4 h-4 text-[#6B6462]" />
                  </button>
                )}
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-5 py-3 bg-white border border-[#E8E0D5] rounded-full text-sm font-medium hover:bg-[#F8F4EF] transition-all shadow-sm lg:hidden"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center justify-between border-b border-[#E8E0D5] pb-6">
            <div className="flex items-center gap-8">
              <button
                onClick={() => updateCategory('all')}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeCategory === 'all' ? 'text-[#C4A87C]' : 'text-[#6B6462] hover:text-[#2D2926]'
                }`}
              >
                All Products
                {activeCategory === 'all' && (
                  <motion.div layoutId="categoryUnderline" className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-[#C4A87C]" />
                )}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => updateCategory(cat.id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors ${
                    activeCategory === cat.id ? 'text-[#C4A87C]' : 'text-[#6B6462] hover:text-[#2D2926]'
                  }`}
                >
                  {cat.name}
                  {activeCategory === cat.id && (
                    <motion.div layoutId="categoryUnderline" className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-[#C4A87C]" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs text-[#6B6462] uppercase tracking-widest font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortPrice(e.target.value as any)}
                className="bg-transparent text-sm font-medium text-[#2D2926] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] lg:hidden"
              />
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2rem] p-8 z-[70] lg:hidden shadow-2xl"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-2xl text-[#2D2926]">Filter & Sort</h3>
                  <button onClick={() => setIsFilterOpen(false)} className="p-2">
                    <X className="w-6 h-6 text-[#2D2926]" />
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#6B6462] mb-4 font-bold">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => updateCategory('all')}
                        className={`px-4 py-2 rounded-full border text-sm transition-all ${
                          activeCategory === 'all' 
                            ? 'bg-[#2D2926] text-white border-[#2D2926]' 
                            : 'bg-white text-[#2D2926] border-[#E8E0D5]'
                        }`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => updateCategory(cat.id)}
                          className={`px-4 py-2 rounded-full border text-sm transition-all ${
                            activeCategory === cat.id 
                              ? 'bg-[#2D2926] text-white border-[#2D2926]' 
                              : 'bg-white text-[#2D2926] border-[#E8E0D5]'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#6B6462] mb-4 font-bold">Sort By</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'featured', label: 'Featured' },
                        { id: 'low-to-high', label: 'Price: Low to High' },
                        { id: 'high-to-low', label: 'Price: High to Low' },
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSortPrice(option.id as any)}
                          className={`flex items-center justify-between p-4 rounded-xl border text-sm transition-all ${
                            sortBy === option.id 
                              ? 'bg-[#F8F4EF] border-[#C4A87C] text-[#C4A87C]' 
                              : 'bg-white border-[#E8E0D5] text-[#2D2926]'
                          }`}
                        >
                          {option.label}
                          {sortBy === option.id && <div className="w-2 h-2 rounded-full bg-[#C4A87C]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full py-4 bg-[#C4A87C] text-white rounded-full font-medium shadow-lg"
                  >
                    Apply Filters
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F8F4EF] text-[#C4A87C] mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#2D2926] mb-2">No products found</h3>
              <p className="text-[#6B6462]">Try adjusting your search or filter to find what you&apos;re looking for.</p>
              <button 
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-8 text-[#C4A87C] font-medium underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDF9]">
        <div className="w-8 h-8 border-2 border-[#C4A87C] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
