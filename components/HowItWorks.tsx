'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Download, Search, PlayCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Download className="w-6 h-6 text-purple-400" />,
      title: "Get the App",
      description: "Tap the Download button to securely download the premium Vega APK file straight to your Android phone."
    },
    {
      number: "02",
      icon: <Search className="w-6 h-6 text-pink-400" />,
      title: "Explore & Search",
      description: "Open the app and search for any movie, series, or anime, or browse curated vertical stories instantly."
    },
    {
      number: "03",
      icon: <PlayCircle className="w-6 h-6 text-amber-400" />,
      title: "Stream & Enjoy",
      description: "Pick a source server, choose your quality mirror, and start streaming in Full HD or download for offline viewing."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-pink-300 bg-pink-500/10 px-3.5 py-1.5 rounded-full border border-pink-500/30"
          >
            Simple Onboarding
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight italic"
          >
            Start Streaming in{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">
              3 Easy Steps.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            There are no signups, subscription loops, or email confirmations. Download, search, and watch.
          </motion.p>
        </div>

        {/* Steps flow */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-amber-500/30 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center space-y-4 relative group"
            >
              {/* Step circle */}
              <div className="relative flex items-center justify-center">
                {/* Number floating tag */}
                <span className="absolute -top-3 -right-3 font-mono font-black text-sm text-zinc-600 group-hover:text-purple-400 transition-colors">
                  {step.number}
                </span>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-20 h-20 rounded-2xl glass-panel bg-zinc-950/80 border border-white/8 group-hover:border-purple-500/30 flex items-center justify-center shadow-xl group-hover:shadow-[0_0_25px_rgba(124,58,237,0.2)] transition-all duration-300"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Title & description */}
              <div className="space-y-2 max-w-xs">
                <h3 className="font-display font-black text-lg text-white group-hover:text-purple-300 italic transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
