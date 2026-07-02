'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticlesBg from '@/components/ParticlesBg';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Screenshots from '@/components/Screenshots';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      {/* Dynamic Floating Particles Canvas Background */}
      <ParticlesBg />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Stage Section */}
      <Hero />

      {/* Animated Counter Stats Row */}
      <Stats />

      {/* Features Showcase Grid with 3D tilts */}
      <Features />

      {/* Connecting Onboarding Guide Flow */}
      <HowItWorks />

      {/* Interface Mockups Carousel */}
      <Screenshots />

      {/* Testimonial Glass Cards Row */}
      <Testimonials />

      {/* Immersive Download Call To Action (CTA) Box */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Glow backdrop light orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] aspect-square rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#0c051a] via-[#0D0D14] to-zinc-950 border border-purple-500/20 shadow-[0_0_50px_rgba(124,58,237,0.15)] flex flex-col items-center justify-center text-center px-6 py-16 sm:px-12"
          >
            {/* Ambient purple background glow sweep */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            {/* Little floating element */}
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-400 bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded-full uppercase mb-4">
              Get Started Instantly
            </span>

            {/* Title */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4 leading-tight">
              Get Vega Free — <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                Android APK Portal
              </span>
            </h2>

            {/* Subtext */}
            <p className="max-w-lg text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
              Experience the Netflix-style free streaming platform with zero trackers, no monthly subscription loops, and high-speed multi-source direct mirrors.
            </p>

            {/* Glowing CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(124,58,237,0.7)" }}
              whileTap={{ scale: 0.96 }}
              className="rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 p-[1px] mb-6 shadow-xl"
            >
              <Link
                href="/download"
                className="flex items-center gap-2.5 px-8 py-4 bg-[#030303] hover:bg-transparent rounded-xl text-base sm:text-lg font-bold text-white transition-all"
              >
                <ArrowDown size={18} className="text-purple-300 animate-bounce" />
                <span>Go to Download Page</span>
              </Link>
            </motion.div>

            {/* Bullet assurances list */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs font-semibold text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-purple-400" /> No account required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-purple-400" /> No subscription. Ever.
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-purple-400" /> Ad-Lite Experience
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
