'use client';

import React from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Play, 
  ChevronRight, 
  ChevronDown,
  ChevronLeft,
  Sparkles, 
  Tv, 
  Radio, 
  Video, 
  Home, 
  Bookmark, 
  Download, 
  Settings, 
  Paperclip,
  Flame,
  Globe2,
  Trophy,
  Crown,
  MessageSquare,
  Lightbulb,
  Wand2,
  Palette
} from 'lucide-react';

export type ScreenType = 'home' | 'drama' | 'short-drama' | 'max-ai' | 'otts' | 'live-channels' | 'live-map';

interface PhoneMockupProps {
  screen: ScreenType;
  animated?: boolean;
}

export default function PhoneMockup({ screen, animated = true }: PhoneMockupProps) {
  // Normalize screen
  const currentScreen = screen === 'short-drama' ? 'drama' : screen;

  return (
    <div 
      className={`relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/19] rounded-[42px] border-[7px] border-zinc-800 bg-[#050508] overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.18)] flex flex-col transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] ${
        animated ? 'hover:-translate-y-2 hover:rotate-1' : ''
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Top Speaker & Camera Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-900 rounded-full z-50 flex items-center justify-center">
        <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
        <div className="w-2 h-2 bg-zinc-950 rounded-full ml-2 border border-zinc-800"></div>
      </div>

      {/* Screen Content Wrapper */}
      <div className="relative w-full h-full flex flex-col text-white font-sans text-xs select-none overflow-hidden bg-[#030305]">
        
        {/* Status Bar */}
        <div className="h-7 pt-1 px-5 flex items-center justify-between text-[10px] text-zinc-400 font-medium z-40 bg-gradient-to-b from-black/60 to-transparent">
          <span className="font-semibold text-zinc-300">
            {currentScreen === 'live-channels' ? '3:11' : currentScreen === 'live-map' ? '3:12' : '10:38'}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-end gap-0.5 h-2">
              <div className="w-0.5 h-1 bg-zinc-400 rounded-2xs"></div>
              <div className="w-0.5 h-1.5 bg-zinc-400 rounded-2xs"></div>
              <div className="w-0.5 h-2 bg-zinc-100 rounded-2xs"></div>
            </div>
            <span className="text-[8px] font-bold tracking-tighter text-zinc-300">5G</span>
            <div className="w-4 h-2 border border-zinc-500 rounded-2xs p-0.5 flex items-center">
              <div className="w-full h-full bg-zinc-100 rounded-3xs"></div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SCREEN 1: VEGA HOME PAGE (Hollywood Arts Season 1 & Movies/Series)
            ========================================================================= */}
        {currentScreen === 'home' && (
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 bg-[#09090e]/80 backdrop-blur-md border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-500 flex items-center justify-center text-[9px] font-black italic shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    V
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-white">VEGA</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                  <Play size={9} fill="white" className="text-white ml-0.5" />
                </div>
                <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                  <Bell size={11} className="text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-14 space-y-3" style={{ scrollbarWidth: 'none' }}>
              
              {/* Featured Banner Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#40134f] via-[#21092e] to-[#0e0316] border border-purple-500/30 flex flex-col justify-between p-3 shadow-lg shadow-purple-950/40">
                {/* Hollywood Arts Poster Background Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-400/40 via-purple-600/30 to-transparent" />
                
                {/* Simulated cast art backdrop */}
                <div className="absolute top-0 right-0 left-0 bottom-6 flex items-center justify-center pointer-events-none opacity-85">
                  <div className="text-center">
                    <span className="text-[7px] font-bold tracking-widest text-amber-300 uppercase block mb-1">The Next Chapter</span>
                    <h2 className="font-display font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 drop-shadow-[0_2px_10px_rgba(168,85,247,0.8)]">
                      HOLLYWOOD<br/>ARTS
                    </h2>
                  </div>
                </div>

                {/* Badge top-left */}
                <div className="relative z-20">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[8px] font-bold text-amber-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    FEATURED TONIGHT
                  </span>
                </div>

                {/* Bottom Card Meta */}
                <div className="relative z-20 space-y-1">
                  <h3 className="font-display font-black text-sm text-white leading-tight drop-shadow">
                    Hollywood Arts Season 1
                  </h3>
                  <p className="text-[9px] text-zinc-300 font-medium">A story worth watching</p>
                </div>
              </div>

              {/* Sub-bar with Watch Now Button & Dots */}
              <div className="flex items-center justify-between pt-0.5">
                <div>
                  <span className="text-[7px] font-bold uppercase tracking-wider text-zinc-400 block">Featured Tonight</span>
                  <span className="font-bold text-[10px] text-white">Hollywood Arts Season 1</span>
                </div>
                <button className="px-3.5 py-1.5 rounded-full bg-white text-black font-extrabold text-[9px] flex items-center gap-1 shadow-md hover:bg-zinc-200 transition">
                  <Play size={9} fill="black" />
                  <span>Watch now</span>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center items-center gap-1 py-1">
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="w-3.5 h-1 rounded-full bg-[#F59E0B]" />
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
              </div>

              {/* Movies & Web Series Row */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-3 rounded-full bg-orange-500" />
                    <span className="font-display font-black text-[11px] text-white tracking-tight">Movies & Web Series</span>
                  </div>
                  <span className="text-[8px] text-zinc-500 font-medium">29 titles • updated daily</span>
                </div>

                {/* Posters Carousel */}
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  <div className="flex-shrink-0 w-20 aspect-[2/3] rounded-lg bg-gradient-to-t from-[#150a24] to-purple-900/40 border border-purple-500/20 p-1 flex flex-col justify-end relative overflow-hidden shadow">
                    <div className="absolute top-1 right-1 px-1 rounded bg-black/60 text-[6px] font-bold text-amber-300">EP 12</div>
                    <span className="text-[7px] font-bold text-white leading-tight">Khatron Ke Khiladi</span>
                  </div>
                  <div className="flex-shrink-0 w-20 aspect-[2/3] rounded-lg bg-gradient-to-t from-[#0e162a] to-blue-900/40 border border-blue-500/20 p-1 flex flex-col justify-end relative overflow-hidden shadow">
                    <div className="absolute top-1 right-1 px-1 rounded bg-blue-600/70 text-[6px] font-bold text-white">S03</div>
                    <span className="text-[7px] font-bold text-white leading-tight">Hustle Rap</span>
                  </div>
                  <div className="flex-shrink-0 w-20 aspect-[2/3] rounded-lg bg-gradient-to-t from-[#260f15] to-rose-900/40 border border-rose-500/20 p-1 flex flex-col justify-end relative overflow-hidden shadow">
                    <span className="text-[7px] font-bold text-white leading-tight">Raat Baki Hai</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Floating Navigation Dock */}
            <div className="absolute bottom-2 left-3 right-3 h-10 rounded-2xl bg-zinc-950/90 backdrop-blur-lg border border-white/10 flex items-center justify-around px-2 z-30 shadow-2xl">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-600/80 text-white font-bold text-[8px]">
                <Home size={10} />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center text-zinc-400 text-[7px]">
                <Search size={10} />
              </div>
              <div className="flex flex-col items-center text-zinc-400 text-[7px]">
                <Bookmark size={10} />
              </div>
              <div className="flex flex-col items-center text-zinc-400 text-[7px]">
                <Download size={10} />
              </div>
              <div className="flex flex-col items-center text-zinc-400 text-[7px]">
                <Settings size={10} />
              </div>
            </div>

            {/* Floating MAX v1 FAB */}
            <div className="absolute bottom-13 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#050510] flex flex-col items-center justify-center">
                <span className="text-[6px] font-black text-cyan-300">MAX</span>
                <span className="text-[4px] text-purple-300 font-mono">v1</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 2: DRAMA S / SHORT DRAMAS (Ishq Ek Gunaah)
            ========================================================================= */}
        {currentScreen === 'drama' && (
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 bg-[#09090e]/80 backdrop-blur-md border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[9px] font-black italic">
                    V
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-white">VEGA</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                  <Search size={11} className="text-zinc-300" />
                </div>
                <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                  <Bell size={11} className="text-zinc-300" />
                </div>
              </div>
            </div>

            {/* Scroll Area */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-14 space-y-3" style={{ scrollbarWidth: 'none' }}>
              
              {/* Featured Story Hero */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#2d1217] via-[#1a080d] to-[#0a0305] border border-rose-500/30 flex flex-col justify-end p-3 shadow-xl shadow-rose-950/40">
                {/* Fire effect & Split photo art */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-2 right-2 w-28 h-36 bg-amber-500/20 rounded-full blur-2xl" />
                
                {/* Burning split-frame artwork graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                  <div className="w-24 h-32 border-2 border-amber-500/40 rotate-[-4deg] relative bg-gradient-to-b from-rose-900/40 to-zinc-950/90 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/30 to-rose-600/30 animate-pulse" />
                    <div className="absolute bottom-1 left-1 text-[6px] font-black tracking-widest text-amber-200">ISHQ EK GUNAAH</div>
                  </div>
                </div>

                {/* Badge */}
                <div className="relative z-20 mb-auto pt-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-rose-500/40 text-[8px] font-bold text-rose-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                    FEATURED STORY
                  </span>
                </div>

                {/* Title & CTA */}
                <div className="relative z-20 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-black text-base text-white leading-tight">
                      Ishq Ek Gunaah
                    </h3>
                    <span className="px-1.5 py-0.5 rounded bg-purple-900/80 text-[6px] font-black uppercase text-purple-200 tracking-wider">
                      Original
                    </span>
                  </div>
                  <p className="text-[9px] text-zinc-300">One story can change everything.</p>

                  <button className="w-full py-2 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-extrabold text-[10px] flex items-center justify-center gap-1.5 shadow-lg shadow-rose-600/30">
                    <Play size={10} fill="white" />
                    <span>Watch Story</span>
                  </button>
                </div>

                {/* Segmented Line Pagination */}
                <div className="relative z-20 flex gap-1 pt-2 justify-center">
                  <span className="w-6 h-0.5 rounded-full bg-white" />
                  <span className="w-2 h-0.5 rounded-full bg-white/40" />
                  <span className="w-2 h-0.5 rounded-full bg-white/40" />
                  <span className="w-2 h-0.5 rounded-full bg-white/40" />
                  <span className="w-2 h-0.5 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Search Bar */}
              <div className="h-8 rounded-xl bg-zinc-900/90 border border-white/5 flex items-center px-2.5 gap-2 text-zinc-400">
                <Search size={11} className="text-zinc-400" />
                <span className="text-[8px] text-zinc-500">Search dramas, characters, emotions...</span>
              </div>

              {/* Short Stories Row */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[9px] font-bold">
                  <span className="text-zinc-400 uppercase tracking-wider text-[8px]">Short Stories</span>
                  <span className="text-amber-400 text-[8px]">50 S...</span>
                </div>
                <div className="text-[10px] font-bold text-white">Continue the emotion</div>

                {/* Cards */}
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  <div className="flex-shrink-0 w-20 aspect-[3/4] rounded-xl bg-gradient-to-b from-rose-950 to-zinc-950 border border-rose-500/20 p-1 flex flex-col justify-end relative shadow">
                    <div className="w-5 h-5 rounded-full bg-pink-500/80 flex items-center justify-center self-center mb-auto mt-auto">
                      <Play size={8} fill="white" className="text-white ml-0.5" />
                    </div>
                    <span className="text-[7px] font-bold text-white">Junoon Ep 4</span>
                  </div>
                  <div className="flex-shrink-0 w-20 aspect-[3/4] rounded-xl bg-gradient-to-b from-purple-950 to-zinc-950 border border-purple-500/20 p-1 flex flex-col justify-end relative shadow">
                    <div className="w-5 h-5 rounded-full bg-pink-500/80 flex items-center justify-center self-center mb-auto mt-auto">
                      <Play size={8} fill="white" className="text-white ml-0.5" />
                    </div>
                    <span className="text-[7px] font-bold text-white">Roohani</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-2 left-6 right-6 h-9 rounded-2xl bg-zinc-950/90 border border-white/10 flex items-center justify-around px-3 z-30">
              <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-rose-600/70 text-white font-bold text-[8px]">
                <Home size={10} />
                <span>Home</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400 text-[8px]">
                <Search size={10} />
                <span>Search</span>
              </div>
            </div>

            {/* MAX v1 FAB */}
            <div className="absolute bottom-12 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#050510] flex flex-col items-center justify-center">
                <span className="text-[6px] font-black text-cyan-300">MAX</span>
                <span className="text-[4px] text-purple-300 font-mono">v1</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 3: MAX v1 - YOUR AI COMPANION (Image Gen, Image Edit, Personal AI)
            ========================================================================= */}
        {currentScreen === 'max-ai' && (
          <div className="flex-1 flex flex-col overflow-hidden relative bg-gradient-to-b from-[#0c0818] via-[#07040f] to-[#04020a]">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <span className="font-display font-black text-xs tracking-wider text-white">VEGA</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-[9px] font-bold text-purple-300">
                <Crown size={9} className="text-amber-400" />
                <span>MAX</span>
                <span className="bg-purple-600 text-white text-[7px] px-1 rounded-sm">v1</span>
              </div>
            </div>

            {/* Sub-header Back button */}
            <div className="px-3 py-1 flex items-center gap-1 text-[9px] font-bold text-zinc-400">
              <ChevronLeft size={12} />
              <span>Back</span>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-3.5 pb-14 flex flex-col items-center text-center space-y-3" style={{ scrollbarWidth: 'none' }}>
              
              {/* Glowing Cyber Robot Avatar */}
              <div className="relative mt-2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-500 p-[3px] shadow-[0_0_35px_rgba(168,85,247,0.5)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#080517] flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Robot Head Graphic */}
                    <div className="relative">
                      {/* Headphones */}
                      <div className="absolute -left-2 top-2 w-2 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]" />
                      <div className="absolute -right-2 top-2 w-2 h-4 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]" />
                      <div className="w-10 h-8 rounded-2xl bg-gradient-to-b from-zinc-200 to-zinc-400 border border-cyan-400/80 flex items-center justify-center relative shadow-inner">
                        {/* Visor eyes */}
                        <div className="w-7 h-3 rounded-full bg-black flex items-center justify-around px-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_cyan] animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_cyan] animate-pulse" />
                        </div>
                      </div>
                    </div>
                    {/* Badge text */}
                    <span className="font-display font-black text-[9px] text-cyan-300 tracking-wider mt-1 drop-shadow">
                      MAX <span className="text-[7px] text-purple-300">v1</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-0.5">
                <h2 className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 tracking-tight">
                  MAX <span className="text-sm font-bold text-purple-400">v1</span>
                </h2>
                <h3 className="font-display font-bold text-xs text-white">Your AI Companion</h3>
                <p className="text-[8px] font-mono text-zinc-400 tracking-wider">Talk • Ask • Explore</p>
              </div>

              {/* 4 Feature Action Cards Grid */}
              <div className="w-full grid grid-cols-2 gap-2 text-left">
                {/* Card 1: Text Chat */}
                <div className="p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-purple-600/60 flex items-center justify-center">
                      <MessageSquare size={10} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-white">Text Chat</div>
                      <div className="text-[6px] text-zinc-400">Get instant answers</div>
                    </div>
                  </div>
                  <ChevronRight size={10} className="text-zinc-500" />
                </div>

                {/* Card 2: Creative Ideas */}
                <div className="p-2 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-blue-600/60 flex items-center justify-center">
                      <Lightbulb size={10} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-white">Get Ideas</div>
                      <div className="text-[6px] text-zinc-400">Be more creative</div>
                    </div>
                  </div>
                  <ChevronRight size={10} className="text-zinc-500" />
                </div>

                {/* Card 3: Image Generation */}
                <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-600/60 flex items-center justify-center">
                      <Palette size={10} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-white">Image Gen</div>
                      <div className="text-[6px] text-zinc-400">Prompt to artwork</div>
                    </div>
                  </div>
                  <ChevronRight size={10} className="text-zinc-500" />
                </div>

                {/* Card 4: Image Editing */}
                <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-amber-600/60 flex items-center justify-center">
                      <Wand2 size={10} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[8px] font-bold text-white">Image Edit</div>
                      <div className="text-[6px] text-zinc-400">AI remix & filters</div>
                    </div>
                  </div>
                  <ChevronRight size={10} className="text-zinc-500" />
                </div>
              </div>

            </div>

            {/* Message Input Box at bottom */}
            <div className="absolute bottom-2 left-3 right-3 h-10 rounded-2xl bg-zinc-900/90 border border-purple-500/30 flex items-center px-3 gap-2 z-30 shadow-2xl">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                <Paperclip size={11} className="text-zinc-300" />
              </div>
              <span className="text-[9px] text-zinc-500 flex-1">Message MAX...</span>
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                <Sparkles size={10} className="text-white" />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 4: 9 OTTS STREAMING HUB (Netflix, JioHotstar, Aha, Top 10)
            ========================================================================= */}
        {currentScreen === 'otts' && (
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 bg-[#09090e]/80 backdrop-blur-md border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[9px] font-black italic">
                    V
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-white">VEGA</span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                <Bell size={11} className="text-zinc-300" />
              </div>
            </div>

            {/* Scroll Area */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-14 space-y-3" style={{ scrollbarWidth: 'none' }}>
              
              {/* Sardar 2 Dual Dragon Banner */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gradient-to-r from-red-950 via-zinc-950 to-blue-950 border border-white/10 p-2.5 flex flex-col justify-end shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                {/* Fire & Ice visual hint */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-red-600/15 blur-lg" />
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-cyan-600/15 blur-lg" />
                
                <div className="relative z-20 flex items-end justify-between">
                  <div>
                    <h3 className="font-display font-black text-sm text-white drop-shadow">Sardar 2</h3>
                    <div className="flex gap-0.5 mt-1">
                      <span className="w-3.5 h-1 rounded-full bg-cyan-400" />
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      <span className="w-1 h-1 rounded-full bg-zinc-600" />
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Play size={10} fill="white" className="ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Streaming Section with 9 OTTs */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-[11px] text-white">Streaming</span>
                  <span className="text-[8px] font-bold text-zinc-500">9 OTTs</span>
                </div>

                {/* 3 Large OTT Brand Cards */}
                <div className="grid grid-cols-3 gap-2">
                  {/* Netflix */}
                  <div className="rounded-xl bg-black border border-red-900/40 p-2 flex flex-col items-center justify-center aspect-[4/3] shadow-md shadow-red-950/30">
                    <span className="font-display font-black text-xs tracking-tighter text-red-600">NETFLIX</span>
                    <span className="text-[6px] text-zinc-400 mt-1 font-semibold">Netflix</span>
                  </div>

                  {/* JioHotstar */}
                  <div className="rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-pink-600 p-2 flex flex-col items-center justify-center aspect-[4/3] shadow-md shadow-cyan-950/40 text-center">
                    <div className="flex items-center gap-0.5">
                      <Sparkles size={8} className="text-white fill-white" />
                      <span className="font-display font-black text-[8px] text-white">JioHotstar</span>
                    </div>
                    <span className="text-[6px] text-zinc-200 mt-1 font-semibold">JioHotstar</span>
                  </div>

                  {/* Aha */}
                  <div className="rounded-xl bg-[#F97316] p-2 flex flex-col items-center justify-center aspect-[4/3] shadow-md shadow-orange-950/40">
                    <span className="font-display font-black text-xs tracking-tight text-white italic">aha</span>
                    <span className="text-[6px] text-zinc-100 mt-1 font-semibold">Aha</span>
                  </div>
                </div>
              </div>

              {/* Top 10 Ranked Row */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-[11px] text-white">Top 10</span>
                  <span className="text-[8px] font-bold text-cyan-400">View all</span>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  {/* #1 Bigg Boss */}
                  <div className="flex-shrink-0 flex items-center">
                    <span className="font-display font-black text-3xl text-cyan-400 mr-1 drop-shadow">1</span>
                    <div className="w-16 aspect-[2/3] rounded-lg bg-gradient-to-b from-amber-950 to-zinc-950 border border-amber-500/20 p-1 flex flex-col justify-between shadow">
                      <span className="text-[5px] font-bold uppercase text-amber-300">SEASON 13</span>
                      <span className="text-[7px] font-bold text-white">Bigg Boss</span>
                    </div>
                  </div>

                  {/* #2 Ghamasaan */}
                  <div className="flex-shrink-0 flex items-center">
                    <span className="font-display font-black text-3xl text-cyan-400 mr-1 drop-shadow">2</span>
                    <div className="w-16 aspect-[2/3] rounded-lg bg-gradient-to-b from-emerald-950 to-zinc-950 border border-emerald-500/20 p-1 flex flex-col justify-end shadow">
                      <span className="text-[7px] font-bold text-white">Ghamasaan</span>
                    </div>
                  </div>

                  {/* #3 */}
                  <div className="flex-shrink-0 flex items-center">
                    <span className="font-display font-black text-3xl text-cyan-400 mr-1 drop-shadow">3</span>
                    <div className="w-16 aspect-[2/3] rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/30 p-1 flex flex-col justify-end shadow">
                      <span className="text-[7px] font-bold text-white">Waiting Hai</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-2 left-4 right-4 h-9 rounded-2xl bg-zinc-950/90 border border-white/10 flex items-center justify-around px-2 z-30">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-600/80 text-white font-bold text-[8px]">
                <Home size={10} />
                <span>Home</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400 text-[8px]">
                <Trophy size={10} />
                <span>Top 10</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400 text-[8px]">
                <Search size={10} />
                <span>Search</span>
              </div>
            </div>

            {/* MAX v1 FAB */}
            <div className="absolute bottom-12 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#050510] flex flex-col items-center justify-center">
                <span className="text-[6px] font-black text-cyan-300">MAX</span>
                <span className="text-[4px] text-purple-300 font-mono">v1</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 5: VEGA LIVE CHANNELS (595 TV Channels, Radio, Webcams)
            ========================================================================= */}
        {currentScreen === 'live-channels' && (
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 bg-[#09090e]/80 backdrop-blur-md border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[9px] font-black italic">
                    V
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-white">
                    VEGA <span className="text-cyan-400">LIVE</span>
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                <Bell size={11} className="text-zinc-300" />
              </div>
            </div>

            {/* Scroll Area */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-14 space-y-2.5" style={{ scrollbarWidth: 'none' }}>
              
              {/* Search Bar */}
              <div className="h-8 rounded-xl bg-zinc-900/90 border border-white/5 flex items-center px-2.5 gap-2 text-zinc-400">
                <Search size={11} className="text-zinc-400" />
                <span className="text-[8px] text-zinc-500">Search channels, stations...</span>
              </div>

              {/* Geographic Dropdown Chips */}
              <div className="grid grid-cols-2 gap-2">
                <div className="h-7 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between px-2.5 text-[8px] font-bold text-white">
                  <div className="flex items-center gap-1.5">
                    <span>🇮🇳</span>
                    <span>India</span>
                  </div>
                  <ChevronDown size={10} className="text-zinc-400" />
                </div>

                <div className="h-7 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center gap-1.5 px-2.5 text-[8px] font-bold text-zinc-300">
                  <Globe2 size={10} className="text-cyan-400" />
                  <span>Worldwide</span>
                </div>
              </div>

              {/* Media Type Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-7 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center gap-1 text-[8px] font-bold shadow-md shadow-blue-500/25">
                  <Tv size={10} />
                  <span>TV</span>
                </div>
                <div className="h-7 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 flex items-center justify-center gap-1 text-[8px] font-bold">
                  <Radio size={10} />
                  <span>Radio</span>
                </div>
                <div className="h-7 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 flex items-center justify-center gap-1 text-[8px] font-bold">
                  <Video size={10} />
                  <span>Webcams</span>
                </div>
              </div>

              {/* Popular Now Row */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5">
                  <Flame size={11} className="text-amber-500 fill-amber-500" />
                  <span className="font-display font-black text-[10px] text-white">Popular Now</span>
                  <span className="text-[8px] text-zinc-500 font-mono">595</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-[#141226] border border-purple-500/20 p-2 space-y-2">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-rose-950/70 text-rose-400 text-[6px] font-extrabold uppercase">
                      <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" /> LIVE
                    </span>
                    <div className="text-[9px] font-bold text-white flex items-center gap-1">
                      <span>🇮🇳</span>
                      <span>4 SIDES TV</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#141226] border border-purple-500/20 p-2 space-y-2">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-rose-950/70 text-rose-400 text-[6px] font-extrabold uppercase">
                      <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" /> LIVE
                    </span>
                    <div className="text-[9px] font-bold text-white flex items-center gap-1">
                      <span>🇮🇳</span>
                      <span>4TV News</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entertainment Section */}
              <div className="space-y-1.5">
                <span className="font-display font-black text-[10px] text-white">Entertainment</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-zinc-900/60 border border-white/5 p-2 space-y-1">
                    <span className="text-[6px] font-bold text-rose-400 uppercase">• LIVE</span>
                    <div className="text-[8px] font-bold text-zinc-200">🇮🇳 Aakaash Aath</div>
                  </div>
                  <div className="rounded-xl bg-zinc-900/60 border border-white/5 p-2 space-y-1">
                    <span className="text-[6px] font-bold text-rose-400 uppercase">• LIVE</span>
                    <div className="text-[8px] font-bold text-zinc-200">🇮🇳 Amrita TV</div>
                  </div>
                </div>
              </div>

            </div>

            {/* MAX v1 FAB */}
            <div className="absolute bottom-4 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#050510] flex flex-col items-center justify-center">
                <span className="text-[6px] font-black text-cyan-300">MAX</span>
                <span className="text-[4px] text-purple-300 font-mono">v1</span>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SCREEN 6: LIVE CHANNELS GLOBE MAP (Interactive 3D Planet Earth Pinpoint)
            ========================================================================= */}
        {currentScreen === 'live-map' && (
          <div className="flex-1 flex flex-col overflow-hidden relative bg-[#04020a]">
            {/* Header */}
            <div className="px-3.5 py-1.5 flex items-center justify-between z-20 bg-[#09090e]/80 backdrop-blur-md border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                  <Menu size={14} className="text-zinc-200" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[9px] font-black italic">
                    V
                  </div>
                  <span className="font-display font-black text-xs tracking-wider text-white">
                    VEGA <span className="text-cyan-400">LIVE</span>
                  </span>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center">
                <Bell size={11} className="text-zinc-300" />
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto px-3 pt-2 pb-14 space-y-2.5" style={{ scrollbarWidth: 'none' }}>
              
              {/* Search Bar */}
              <div className="h-8 rounded-xl bg-zinc-900/90 border border-white/5 flex items-center px-2.5 gap-2 text-zinc-400">
                <Search size={11} className="text-zinc-400" />
                <span className="text-[8px] text-zinc-500">Search channels, stations...</span>
              </div>

              {/* Geographic Dropdowns */}
              <div className="grid grid-cols-2 gap-2">
                <div className="h-7 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between px-2 text-[8px] font-bold text-zinc-300">
                  <div className="flex items-center gap-1">
                    <Globe2 size={9} className="text-cyan-400" />
                    <span>Pick a cou...</span>
                  </div>
                  <ChevronDown size={10} className="text-zinc-500" />
                </div>

                <div className="h-7 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center gap-1 px-2 text-[8px] font-bold text-white">
                  <Globe2 size={9} className="text-purple-400" />
                  <span>Worldwide</span>
                </div>
              </div>

              {/* Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-7 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white flex items-center justify-center gap-1 text-[8px] font-bold shadow-md shadow-blue-500/25">
                  <Tv size={10} />
                  <span>TV</span>
                </div>
                <div className="h-7 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 flex items-center justify-center gap-1 text-[8px] font-bold">
                  <Radio size={10} />
                  <span>Radio</span>
                </div>
                <div className="h-7 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 flex items-center justify-center gap-1 text-[8px] font-bold">
                  <Video size={10} />
                  <span>Webcams</span>
                </div>
              </div>

              {/* Sub-instruction label */}
              <div className="text-[8px] text-purple-300 flex items-center gap-1 font-medium px-1 pt-1">
                <span>🪐</span>
                <span>Tap a country on the globe to browse TV channels</span>
              </div>

              {/* 3D Planet Earth Globe Canvas Container */}
              <div className="relative rounded-2xl aspect-square bg-[#020208] border border-cyan-500/20 p-2 flex items-center justify-center overflow-hidden shadow-inner shadow-black">
                {/* Starry space field */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                
                {/* Atmosphere outer glow */}
                <div className="absolute w-44 h-44 rounded-full bg-cyan-500/15 blur-xl pointer-events-none" />

                {/* Planet Earth Sphere */}
                <div className="relative w-40 h-40 rounded-full bg-[#08152b] border border-cyan-400/40 shadow-[inset_-15px_-15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.3)] overflow-hidden flex items-center justify-center">
                  
                  {/* Stylized colorful continents pattern SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-[-10deg]">
                    {/* Oceans base */}
                    <circle cx="50" cy="50" r="49" fill="#030814" />
                    
                    {/* Eurasia / India / Africa colorful landmasses */}
                    <path d="M 30,20 Q 45,15 65,22 Q 80,30 75,50 Q 70,60 55,55 Q 45,50 35,40 Z" fill="#22C55E" opacity="0.8" />
                    <path d="M 40,40 Q 55,42 58,58 Q 50,68 45,65 Q 42,55 38,48 Z" fill="#EAB308" opacity="0.9" />
                    {/* India peninsula */}
                    <polygon points="48,50 54,52 50,64" fill="#F59E0B" />
                    {/* Russia / North Asia */}
                    <path d="M 25,12 Q 50,8 78,14 Q 85,25 60,25 Z" fill="#06B6D4" opacity="0.8" />
                    {/* Africa */}
                    <path d="M 18,35 Q 32,32 35,48 Q 30,70 20,65 Q 12,50 18,35 Z" fill="#EC4899" opacity="0.85" />
                    {/* Southeast Asia Islands */}
                    <circle cx="68" cy="62" r="3" fill="#F97316" />
                    <circle cx="74" cy="65" r="2.5" fill="#3B82F6" />
                    <circle cx="63" cy="58" r="2" fill="#10B981" />
                    {/* Australia */}
                    <path d="M 68,72 Q 82,70 80,82 Q 70,85 68,72 Z" fill="#F97316" opacity="0.9" />

                    {/* Sphere shading */}
                    <radialGradient id="sphere-shade" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                      <stop offset="60%" stopColor="#000000" stopOpacity="0" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0.75" />
                    </radialGradient>
                    <circle cx="50" cy="50" r="49" fill="url(#sphere-shade)" />
                  </svg>

                  {/* Red Pinpoint on India */}
                  <div className="absolute top-[52%] left-[49%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-[0_0_8px_#ef4444] animate-ping absolute" />
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 border border-white shadow-[0_0_8px_#ef4444] relative z-10" />
                    <div className="mt-1 px-1.5 py-0.5 rounded bg-white text-black text-[7px] font-black shadow-lg">
                      India
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* MAX v1 FAB */}
            <div className="absolute bottom-4 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.6)] z-30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#050510] flex flex-col items-center justify-center">
                <span className="text-[6px] font-black text-cyan-300">MAX</span>
                <span className="text-[4px] text-purple-300 font-mono">v1</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
