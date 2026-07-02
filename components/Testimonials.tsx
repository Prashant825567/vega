'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "“Best free streaming app ever! I can literally watch everything from Bollywood to anime with clean Sub & Dub. Unbelievable stuff.”",
      author: "Rahul K.",
      role: "Movie Enthusiast",
      avatar: "R"
    },
    {
      text: "“Downloaded 50+ movies directly to my SD card. Smooth speed, resume feature actually works, and no broken links. Highly recommended!”",
      author: "Priya S.",
      role: "Daily Commuter",
      avatar: "P"
    },
    {
      text: "“All my anime in one place, love it! The servers are extremely fast, 1080p is fully supported, and the short dramas are super fun.”",
      author: "Arjun M.",
      role: "Otaku & Gamer",
      avatar: "A"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] aspect-square rounded-full bg-purple-900/10 blur-[130px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] aspect-square rounded-full bg-pink-900/10 blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30"
          >
            User Endorsements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight italic"
          >
            Loved by{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">
              Thousands of Streamers.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Read reviews from our global Android community who have replaced their paid subscriptions with the fast, aggregated speed of Vega.
          </motion.p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(124,58,237,0.3)' }}
              className="glass-panel rounded-2xl p-8 bg-zinc-950/30 border border-white/6 flex flex-col justify-between hover:shadow-[0_0_20px_rgba(124,58,237,0.1)] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Gold Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#F59E0B]" fill="#F59E0B" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  {item.text}
                </p>
              </div>

              {/* Author profile */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/[0.04]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 font-display font-black text-white text-sm flex items-center justify-center shadow-lg">
                  {item.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-display font-black text-sm text-white italic">{item.author}</h4>
                  <p className="text-[11px] text-zinc-500 font-semibold font-mono uppercase tracking-wider mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
