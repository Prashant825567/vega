'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Download } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030303]/85 backdrop-blur-md border-b border-white/6 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer select-none">
          <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-lg flex items-center justify-center font-black italic text-white text-base shadow-[0_4px_12px_rgba(124,58,237,0.3)]">V</div>
          <span className="font-display font-black text-xl sm:text-2xl tracking-tighter bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent italic underline decoration-[#7C3AED]/50 underline-offset-4">
            VEGA
          </span>
        </Link>

        {/* Links & CTA Button */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/#how-it-works" className="hover:text-white transition-colors">How it works</Link>
            <Link href="/#screenshots" className="hover:text-white transition-colors">Screenshots</Link>
            <Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="/admin" className="hover:text-white transition-colors text-[10px] font-mono opacity-80 border border-zinc-800 rounded px-2 py-0.5 hover:border-purple-500/50 bg-zinc-950/40">Admin</Link>
          </div>

          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(124,58,237,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#7C3AED] p-[1px] shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            <Link 
              href="/download" 
              className="flex items-center gap-2 px-5 py-2.5 bg-[#7C3AED] hover:bg-[#7C3AED]/90 rounded-full text-xs font-bold text-white transition-colors duration-200"
            >
              <Download size={14} className="text-white" />
              <span>Download Now</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
