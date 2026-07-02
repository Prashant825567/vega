'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/[0.05] bg-zinc-950/20 py-16 px-6 overflow-hidden">
      {/* Background glow orb bottom right */}
      <div className="absolute bottom-0 right-0 w-[250px] aspect-square rounded-full bg-purple-900/10 blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-10">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 max-w-sm">
          <Link href="/" className="flex items-center gap-1.5 cursor-pointer">
            <span className="font-display font-extrabold text-2xl tracking-wider bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-transparent">
              ⚡ VEGA
            </span>
          </Link>
          <p className="text-sm text-zinc-500 leading-relaxed font-medium">
            Stream movies, anime, live OTT, web series, and vertical short dramas automatically aggregated in Full HD. Always 100% free.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#screenshots" className="hover:text-white transition-colors">Screenshots</Link>
          <Link href="/download" className="hover:text-white transition-colors">Download App</Link>
          <Link href="/admin" className="hover:text-white transition-colors text-xs font-mono border border-zinc-800 rounded px-2.5 py-1 bg-zinc-950/80">Admin</Link>
        </div>

      </div>

      {/* Credits section */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-600 font-mono">
        <p>© 2026 Vega. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Made with ❤️ in</span>
          <span className="inline-flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-400 font-bold font-sans">
            🇮🇳 India
          </span>
        </p>
      </div>
    </footer>
  );
}
