import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Clock, Award } from 'lucide-react';
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600"
            alt="Wedding Background"
            fill
            className="object-cover opacity-20 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/80 via-transparent to-[#FFFDF9]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-12 bg-[#C4A87C] self-center" />
            <span className="mx-4 text-[#C4A87C] tracking-[0.3em] uppercase text-xs font-medium">Est. 2010</span>
            <div className="h-px w-12 bg-[#C4A87C] self-center" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2D2926] mb-8 leading-[1.1] tracking-tight">
            Crafting Your <br />
            <span className="text-gradient-gold italic">Perfect Invitation</span>
          </h1>
          
          <p className="text-[#6B6462] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Premium wedding cards and artistic printing services designed to make your most precious moments unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/products?category=wedding-cards"
              className="px-8 py-4 bg-[#2D2926] text-white rounded-full hover:bg-[#C4A87C] transition-all duration-300 flex items-center gap-2 group shadow-elegant w-full sm:w-auto justify-center"
            >
              Explore Wedding Cards
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/products"
              className="px-8 py-4 border border-[#2D2926]/10 text-[#2D2926] rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Collections
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-[#C4A87C] to-transparent" />
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl text-[#2D2926] mb-4 tracking-tight">
                Featured Collections
              </h2>
              <p className="text-[#6B6462] text-lg">
                Discover our hand-picked selection of premium wedding invitation suites and printing essentials.
              </p>
            </div>
            <Link 
              href="/products" 
              className="text-[#C4A87C] font-medium flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2926] mb-6 tracking-tight">
              Why Choose Ink & Print Studio
            </h2>
            <p className="text-[#6B6462] text-lg">
              We combine traditional craftsmanship with modern technology to deliver exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Premium Quality",
                desc: "We use the finest cardstock and materials for a luxury feel."
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                desc: "Quick turnaround times to meet your event deadlines."
              },
              {
                icon: Award,
                title: "Exquisite Craft",
                desc: "Every design is crafted with artistic precision and care."
              },
              {
                icon: Star,
                title: "Personalized",
                desc: "Custom designs tailored to your unique vision and style."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white/50 hover:bg-white transition-all duration-500 shadow-card hover:shadow-elegant group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C4A87C]/10 text-[#C4A87C] mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#2D2926] mb-3">{item.title}</h3>
                <p className="text-[#6B6462] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-[#2D2926] mb-8 tracking-tight leading-tight">
                What Our Happy <br />
                <span className="text-gradient-gold italic">Clients Say</span>
              </h2>
              <div className="relative">
                <div className="text-6xl font-serif text-[#C4A87C]/20 absolute -top-10 -left-4">"</div>
                <p className="text-xl text-[#2D2926] leading-relaxed mb-8 relative z-10">
                  The wedding cards we received were beyond our expectations. The gold foil work was stunning and the card quality was truly premium. Everyone loved them!
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5D6D0]" />
                  <div>
                    <p className="font-semibold text-[#2D2926]">Priya & Rahul</p>
                    <p className="text-xs text-[#6B6462] uppercase tracking-wider">Happy Couple</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant">
                <Image
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800"
                  alt="Wedding Couple"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C4A87C]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#2D2926] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-5" />
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 relative z-10">
              Ready to create something <br />
              <span className="text-[#C4A87C] italic">truly beautiful?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">
              Visit our studio or explore our digital collection to find the perfect invitations for your special occasion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link 
                href="/contact"
                className="px-10 py-4 bg-[#C4A87C] text-white rounded-full hover:bg-[#D4BC94] transition-all duration-300 font-medium shadow-lg w-full sm:w-auto"
              >
                Contact Us Now
              </Link>
              <Link 
                href="/products"
                className="px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
