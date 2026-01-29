"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Heart, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#FFFDF9]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-12 bg-[#C4A87C]" />
                <span className="text-[#C4A87C] tracking-[0.3em] uppercase text-xs font-medium">Our Story</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl text-[#2D2926] mb-6 leading-tight">
                Crafting Memories <br />
                <span className="text-gradient-gold italic">Since 2010</span>
              </h1>
              <p className="text-[#6B6462] text-lg leading-relaxed mb-8">
                At Ink & Print Studio, we believe every celebration deserves an invitation that speaks to its uniqueness. What started as a small printing press has grown into a premium wedding stationery studio, serving thousands of happy couples across India.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-serif text-4xl text-[#C4A87C]">14+</p>
                  <p className="text-sm text-[#6B6462]">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-[#C4A87C]">10K+</p>
                  <p className="text-sm text-[#6B6462]">Happy Clients</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-[#C4A87C]">500+</p>
                  <p className="text-sm text-[#6B6462]">Unique Designs</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
                <Image
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
                  alt="Our Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#C4A87C]/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#2D2926] mb-4">What We Stand For</h2>
            <p className="text-[#6B6462] max-w-2xl mx-auto">Our core values guide everything we create</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", desc: "Every design is crafted with love and dedication to perfection." },
              { icon: Award, title: "Quality", desc: "We use only premium materials and the finest printing techniques." },
              { icon: Users, title: "Service", desc: "Your satisfaction is our priority from start to finish." },
              { icon: Sparkles, title: "Innovation", desc: "Blending traditional artistry with modern design trends." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-[#F8F4EF]/50 hover:bg-[#F8F4EF] transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C4A87C]/10 text-[#C4A87C] mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#2D2926] mb-3">{item.title}</h3>
                <p className="text-[#6B6462] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8F4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#2D2926] mb-4">Meet the Artisans</h2>
            <p className="text-[#6B6462]">The talented team behind your beautiful invitations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Rajesh Kumar", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
              { name: "Priya Sharma", role: "Lead Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
              { name: "Amit Patel", role: "Production Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-elegant">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-xl text-[#2D2926]">{member.name}</h3>
                <p className="text-sm text-[#C4A87C]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-[#2D2926] mb-6">Ready to Create Your Perfect Invitation?</h2>
          <p className="text-[#6B6462] mb-10">Let&apos;s work together to make your special day even more memorable.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#2D2926] text-white rounded-full hover:bg-[#C4A87C] transition-all shadow-lg font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
