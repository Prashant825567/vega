'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Film, 
  Tv, 
  Download, 
  Sliders, 
  Sparkles, 
  Video 
} from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <Film className="w-6 h-6 text-purple-400" />,
      title: "🎬 Movies & Shows",
      description: "Bollywood, Hollywood, South Indian cinema, and multi-language Dual Audio streams fully synced.",
      badge: "Full HD"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      title: "🎌 Anime Hub",
      description: "Subbed & Dubbed streams covering retro favorites and the latest trending seasonal releases.",
      badge: "Sub & Dub"
    },
    {
      icon: <Tv className="w-6 h-6 text-blue-400" />,
      title: "📺 Live OTT Mirrors",
      description: "Live mirror feeds of global streaming networks, sports, and popular serial broadcasts for free.",
      badge: "Zero Buffering"
    },
    {
      icon: <Video className="w-6 h-6 text-amber-400" />,
      title: "🎭 Short Dramas",
      description: "Bite-sized Korean, Chinese, and Hindi micro-series optimized for mobile-first scrolling layouts.",
      badge: "Trending"
    },
    {
      icon: <Download className="w-6 h-6 text-emerald-400" />,
      title: "⬇ Smart Downloads",
      description: "Pause, resume, and track download speeds in real-time. Automatically saves straight to SD card storage.",
      badge: "High Speed"
    },
    {
      icon: <Sliders className="w-6 h-6 text-purple-400" />,
      title: "🔍 Multi-Source Scraper",
      description: "Our proprietary algorithm aggregates 50+ backend sources to guarantee maximum speed and 1080p mirrors.",
      badge: "Smart Sync"
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[30%] right-[5%] w-[400px] aspect-square rounded-full bg-purple-900/10 blur-[130px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] aspect-square rounded-full bg-purple-900/10 blur-[130px] -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30"
          >
            Features & Capabilities
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight italic"
          >
            A Premium Ecosystem.{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">
              Zero Premium Cost.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Discover the features that make Vega outperform paid subscriptions. Multi-source scraping, instant offline downloading, and cross-platform syncing built natively inside a fast Android wrapper.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ rotateX: -4, rotateY: 6, scale: 1.025, y: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-panel group relative rounded-2xl p-6 bg-zinc-950/30 hover:bg-[#0c0c14]/50 border border-white/6 hover:border-purple-500/20 shadow-xl transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Card light sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-purple-900/20 group-hover:border-purple-500/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <span className="text-[10px] font-bold font-mono text-zinc-500 group-hover:text-purple-400 uppercase tracking-widest bg-white/[0.02] border border-white/[0.05] group-hover:border-purple-500/20 px-2.5 py-1 rounded-full transition-all duration-300">
                  {feature.badge}
                </span>
              </div>

              {/* Text contents */}
              <h3 className="font-display font-black text-lg text-white mb-2 tracking-wide group-hover:text-purple-300 italic transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
