'use client';

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const screenshotsData: Array<{
    screen: 'home' | 'sidebar' | 'short-drama' | 'downloads' | 'player';
    label: string;
    description: string;
  }> = [
    {
      screen: 'home',
      label: 'Home Feed',
      description: 'Discover the latest movies and shows dynamically updated.'
    },
    {
      screen: 'sidebar',
      label: 'Sidebar Drawer',
      description: 'Quickly filter by category: Anime, OTT, Short Dramas, etc.'
    },
    {
      screen: 'short-drama',
      label: 'Short Dramas',
      description: 'Reel-style vertical micro-series for rapid viewing.'
    },
    {
      screen: 'downloads',
      label: 'Downloads Manager',
      description: 'Pause, track, and resume multiple high-speed file streams.'
    },
    {
      screen: 'player',
      label: 'Cinematic Player',
      description: 'Stream directly in FHD with dual-audio and server switches.'
    }
  ];

  return (
    <section id="screenshots" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#030303] via-[#08080c] to-[#030303]">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] aspect-square rounded-full bg-purple-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold font-mono uppercase tracking-widest text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30"
            >
              Application Interface
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight italic"
            >
              See the{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">
                Vega Experience.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed"
            >
              Take a tour of our high-speed, modern interface designed exclusively for high-end cinematic viewing on your Android device.
            </motion.p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/6 hover:border-purple-500/40 bg-zinc-950/60 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/6 hover:border-purple-500/40 bg-zinc-950/60 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Area */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-8 pt-4 px-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshotsData.map((item, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[240px] sm:w-[280px] snap-center flex flex-col items-center text-center space-y-5"
            >
              {/* Glow frame wrapper */}
              <div className="relative p-1 rounded-[42px] bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <PhoneMockup screen={item.screen} animated={true} />
              </div>

              {/* Label */}
              <div className="space-y-1 max-w-[220px]">
                <h4 className="font-display font-black text-base text-white tracking-wide italic">{item.label}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
