'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import PhoneMockup, { ScreenType } from './PhoneMockup';

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const screenshotsData: Array<{
    screen: ScreenType;
    label: string;
    badge: string;
    description: string;
  }> = [
    {
      screen: 'home',
      label: 'Vega Home Page',
      badge: 'Screen 1 • Hub',
      description: 'Featuring Hollywood Arts Season 1, Movies & Web Series with rapid-access streaming categories and dynamic daily updates.'
    },
    {
      screen: 'drama',
      label: 'Short Dramas (Drama S)',
      badge: 'Screen 2 • Micro-Series',
      description: 'Vertical reel short stories and micro-dramas like Ishq Ek Gunaah with episodic rapid viewing and character search.'
    },
    {
      screen: 'max-ai',
      label: 'MAX v1 AI Companion',
      badge: 'Screen 3 • Personal AI',
      description: 'Vega\'s built-in personal AI companion with instant chat, creative ideas, prompt-to-artwork image generation, and image editing.'
    },
    {
      screen: 'otts',
      label: '9 OTTs Streaming Hub',
      badge: 'Screen 4 • Aggregator',
      description: 'Direct multi-server access to Netflix, JioHotstar, Aha, and live Top 10 rankings including Bigg Boss Season 13 and trending blockbusters.'
    },
    {
      screen: 'live-channels',
      label: 'Vega Live TV',
      badge: 'Screen 5 • 595+ Streams',
      description: 'Real-time broadcast of 595+ TV channels, 24/7 news channels (4 SIDES TV, 4TV News), radio feeds, and webcams from India & Worldwide.'
    },
    {
      screen: 'live-map',
      label: 'Interactive Globe Map',
      badge: 'Screen 6 • 3D Discovery',
      description: 'Interactive planetary 3D Earth globe that lets you tap any country to instantly browse and stream regional live TV stations.'
    }
  ];

  const scrollToIndex = (index: number) => {
    setActiveTab(index);
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const newIndex = direction === 'left' 
        ? Math.max(0, activeTab - 1) 
        : Math.min(screenshotsData.length - 1, activeTab + 1);
      scrollToIndex(newIndex);
    }
  };

  return (
    <section id="screenshots" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#030303] via-[#07070d] to-[#030303]">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] aspect-square rounded-full bg-purple-600/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold font-mono uppercase tracking-widest text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30 inline-flex items-center gap-1.5"
            >
              <Sparkles size={12} className="text-purple-400" />
              <span>Real Android App Screenshots</span>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight italic"
            >
              Experience the New{' '}
              <span className="bg-gradient-to-r from-[#F59E0B] via-pink-500 to-purple-500 bg-clip-text text-transparent tracking-tighter">
                Vega UI.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed"
            >
              Explore our redesigned interface: from movies & short dramas to the MAX v1 personal AI (image generation & editing), 9 OTT streaming portals, 595+ live channels, and the 3D interactive channel-finder globe!
            </motion.p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="p-3 rounded-full border border-white/10 hover:border-purple-500/50 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="p-3 rounded-full border border-white/10 hover:border-purple-500/50 bg-zinc-950/80 text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Quick Screen Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {screenshotsData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-102'
                  : 'bg-zinc-900/60 border border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === idx ? 'bg-white' : 'bg-zinc-500'}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Scrollable Phone Mockups Showcase */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-10 pt-4 px-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshotsData.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 w-[270px] sm:w-[300px] snap-center flex flex-col items-center text-center space-y-5 transition-all duration-300 ${
                activeTab === idx ? 'scale-100 opacity-100' : 'scale-95 opacity-80 hover:opacity-100'
              }`}
            >
              {/* Glow frame wrapper */}
              <div className="relative p-1.5 rounded-[46px] bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-950/20">
                <PhoneMockup screen={item.screen} animated={true} />
              </div>

              {/* Label & Description */}
              <div className="space-y-2 max-w-[260px]">
                <span className="text-[10px] font-mono font-bold tracking-wider text-purple-400 bg-purple-950/40 border border-purple-900/50 px-2.5 py-0.5 rounded-full uppercase">
                  {item.badge}
                </span>
                <h4 className="font-display font-black text-lg text-white tracking-wide italic">
                  {item.label}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
