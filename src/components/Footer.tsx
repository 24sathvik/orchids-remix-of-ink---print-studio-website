"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'Wedding Cards', href: '/products?category=wedding-cards' },
    { label: 'Visiting Cards', href: '/products?category=visiting-cards' },
    { label: 'Photo Frames', href: '/products?category=photo-frames' },
    { label: 'Albums', href: '/products?category=albums' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-white tracking-wide">
                Ink & Print
              </span>
              <span className="block text-xs tracking-[0.3em] text-[#C4A87C] uppercase font-medium">
                Studio
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Crafting premium wedding invitations and printing services with elegance and precision since 2010.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4A87C] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C4A87C] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#C4A87C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#C4A87C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C4A87C] shrink-0" />
                <span>123 Wedding Lane, Print District, Mumbai 400001</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C4A87C] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C4A87C]" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@inkprintstudio.com"
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C4A87C] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C4A87C]" />
                  hello@inkprintstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © 2024 Ink & Print Studio. All rights reserved.
            </p>
            <p className="text-sm text-white/40">
              Designed by <span className="text-[#C4A87C]">ZYXEN</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
