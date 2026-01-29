"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#FFFDF9]">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 bg-[#C4A87C]" />
            <span className="text-[#C4A87C] tracking-[0.3em] uppercase text-xs font-medium">Get In Touch</span>
            <div className="h-px w-12 bg-[#C4A87C]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2D2926] mb-6">
            We&apos;d Love to <span className="text-gradient-gold italic">Hear From You</span>
          </h1>
          <p className="text-[#6B6462] text-lg max-w-2xl mx-auto">
            Have a question about our products or want to discuss a custom order? Reach out to us and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-card border border-[#E8E0D5]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C4A87C]/10 flex items-center justify-center text-[#C4A87C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D2926] mb-2">Visit Our Studio</h3>
                    <p className="text-[#6B6462] text-sm leading-relaxed">
                      123 Wedding Lane, Print District<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-card border border-[#E8E0D5]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C4A87C]/10 flex items-center justify-center text-[#C4A87C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D2926] mb-2">Call Us</h3>
                    <p className="text-[#6B6462] text-sm">
                      <a href="tel:+919876543210" className="hover:text-[#C4A87C] transition-colors">+91 98765 43210</a><br />
                      <a href="tel:+912212345678" className="hover:text-[#C4A87C] transition-colors">+91 22 1234 5678</a>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-card border border-[#E8E0D5]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C4A87C]/10 flex items-center justify-center text-[#C4A87C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D2926] mb-2">Email Us</h3>
                    <p className="text-[#6B6462] text-sm">
                      <a href="mailto:hello@inkprintstudio.com" className="hover:text-[#C4A87C] transition-colors">hello@inkprintstudio.com</a><br />
                      <a href="mailto:orders@inkprintstudio.com" className="hover:text-[#C4A87C] transition-colors">orders@inkprintstudio.com</a>
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-3xl shadow-card border border-[#E8E0D5]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C4A87C]/10 flex items-center justify-center text-[#C4A87C] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#2D2926] mb-2">Business Hours</h3>
                    <p className="text-[#6B6462] text-sm">
                      Mon - Sat: 10:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-elegant border border-[#E8E0D5]/50"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-500 mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#2D2926] mb-4">Message Sent!</h3>
                    <p className="text-[#6B6462] mb-8">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="text-[#C4A87C] font-medium hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl text-[#2D2926] mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">Your Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-4 bg-[#F8F4EF]/50 border border-[#E8E0D5] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-4 bg-[#F8F4EF]/50 border border-[#E8E0D5] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-4 bg-[#F8F4EF]/50 border border-[#E8E0D5] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">Subject</label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-4 bg-[#F8F4EF]/50 border border-[#E8E0D5] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all"
                          >
                            <option value="">Select a subject</option>
                            <option value="wedding-cards">Wedding Cards Inquiry</option>
                            <option value="visiting-cards">Visiting Cards Inquiry</option>
                            <option value="custom-order">Custom Order Request</option>
                            <option value="bulk-order">Bulk Order Inquiry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-[#2D2926]">Your Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          className="w-full px-4 py-4 bg-[#F8F4EF]/50 border border-[#E8E0D5] rounded-2xl text-sm focus:outline-none focus:ring-1 focus:ring-[#C4A87C] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#2D2926] text-white rounded-full font-medium hover:bg-[#C4A87C] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group disabled:opacity-70"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] overflow-hidden shadow-elegant h-[400px] bg-[#E8DDD4]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755678!2d72.8200!3d19.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzE4LjAiTiA3MsKwNDknMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
