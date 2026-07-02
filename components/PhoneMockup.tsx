'use client';

import React from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Play, 
  Plus, 
  Download, 
  Home, 
  Film, 
  Tv, 
  Check,
  Pause,
  Clock,
  ChevronRight,
  Sparkles,
  Volume2,
  Maximize2
} from 'lucide-react';

interface PhoneMockupProps {
  screen: 'home' | 'sidebar' | 'short-drama' | 'downloads' | 'player';
  animated?: boolean;
}

export default function PhoneMockup({ screen, animated = true }: PhoneMockupProps) {
  return (
    <div 
      className={`relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/19] rounded-[40px] border-[6px] border-zinc-800 bg-black overflow-hidden shadow-[0_0_40px_rgba(124,58,237,0.15)] flex flex-col transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] ${
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
      <div className="relative w-full h-full flex flex-col text-white font-sans text-xs select-none">
        
        {/* Status Bar */}
        <div className="h-7 pt-1 px-5 flex items-center justify-between text-[10px] text-zinc-400 font-medium z-40 bg-gradient-to-b from-black/40 to-transparent">
          <span>10:38</span>
          <div className="flex items-center gap-1.5">
            {/* Signal */}
            <div className="flex items-end gap-0.5 h-2">
              <div className="w-0.5 h-0.5 bg-zinc-400 rounded-2xs"></div>
              <div className="w-0.5 h-1 bg-zinc-400 rounded-2xs"></div>
              <div className="w-0.5 h-1.5 bg-zinc-400 rounded-2xs"></div>
              <div className="w-0.5 h-2 bg-zinc-100 rounded-2xs"></div>
            </div>
            {/* WiFi */}
            <span className="text-[9px]">LTE</span>
            {/* Battery */}
            <div className="w-4 h-2 border border-zinc-500 rounded-2xs p-0.5 flex items-center">
              <div className="w-full h-full bg-zinc-100 rounded-3xs"></div>
            </div>
          </div>
        </div>

        {/* 1. HOME SCREEN */}
        {screen === 'home' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative">
            {/* Header */}
            <div className="px-3.5 py-2 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <Menu size={16} className="text-zinc-200 cursor-pointer" />
                <div className="flex items-center">
                  <span className="font-display font-extrabold text-[13px] tracking-wider bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">VEG</span>
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 ml-0.5 flex items-center justify-center rounded-[2px]" />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Search size={14} className="text-zinc-300" />
                <Bell size={14} className="text-zinc-300" />
              </div>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto px-3 pb-12 space-y-4 pt-1" style={{ scrollbarWidth: 'none' }}>
              
              {/* Featured Banner Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-zinc-950 border border-zinc-800/50 flex flex-col justify-end p-3">
                {/* Background Art Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1033] via-[#0D0D14] to-[#040406] z-0" />
                <div className="absolute inset-0 bg-radial-gradient from-purple-500/20 to-transparent z-0 opacity-80" />
                
                {/* Simulated Content Image Overlay */}
                <div className="absolute top-3 left-3 w-14 aspect-[2/3] rounded-lg bg-gradient-to-b from-purple-900/60 to-purple-950/90 border border-purple-500/30 shadow-lg flex items-center justify-center p-1 text-center text-[7px] z-10">
                  <span className="font-bold text-zinc-100">HOUSE OF THE DRAGON</span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-bold text-[11px] leading-snug text-white">House of the Dragon (2026)</h3>
                  <p className="text-[8px] text-zinc-400 mt-0.5">Hindi Season 3 Complete J...</p>
                  <p className="text-[7px] text-zinc-500 flex items-center gap-1 mt-0.5">
                    <span>Action • Drama</span>
                    <span className="text-amber-500">★ 8.4</span>
                  </p>
                  
                  <div className="flex items-center gap-1.5 mt-2">
                    <button className="flex-1 h-6 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-[8px] flex items-center justify-center gap-1 shadow-md shadow-purple-900/20">
                      <Play size={8} fill="white" /> Watch
                    </button>
                    <button className="h-6 px-2 rounded-md bg-zinc-800 border border-zinc-700 text-white font-semibold text-[8px] flex items-center justify-center gap-1">
                      <Plus size={8} /> List
                    </button>
                  </div>
                </div>

                {/* Page dots indicator */}
                <div className="absolute bottom-2 right-3 flex gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                  <div className="w-2.5 h-1 rounded-full bg-purple-500"></div>
                  <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                  <div className="w-1 h-1 rounded-full bg-zinc-600"></div>
                </div>
              </div>

              {/* Latest Movies Section */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-xs">🔥</span>
                  <span className="font-bold text-[10px] tracking-wide text-zinc-200">Latest Movies</span>
                </div>
                
                {/* Horizontal list */}
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/50 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-2xs bg-purple-600/80 text-[5px] text-white font-extrabold uppercase scale-90">HD</div>
                      <span className="relative z-10 font-bold leading-tight">House of the Dragon</span>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-indigo-900/60 to-zinc-950 border border-indigo-700/30 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-2xs bg-[#f59e0b]/80 text-[5px] text-black font-extrabold uppercase scale-90">NEW</div>
                      <span className="relative z-10 font-bold leading-tight">Carry On Jatta 4</span>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-rose-950/60 to-zinc-950 border border-rose-700/20 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-2xs bg-purple-600/80 text-[5px] text-white font-extrabold uppercase scale-90">HD</div>
                      <span className="relative z-10 font-bold leading-tight">KD - The Devil</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Series Section */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1">
                  <span className="text-xs">✨</span>
                  <span className="font-bold text-[10px] tracking-wide text-zinc-200">Recommended Shows</span>
                </div>
                
                {/* Horizontal list */}
                <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
                  {/* Card 1 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-amber-900/30 to-zinc-950 border border-amber-700/20 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <span className="relative z-10 font-bold leading-tight">Mirzapur S03</span>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-purple-900/30 to-zinc-950 border border-purple-700/20 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <span className="relative z-10 font-bold leading-tight">Demon Slayer</span>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="flex-shrink-0 w-[74px]">
                    <div className="aspect-[2/3] rounded-lg bg-gradient-to-b from-blue-900/30 to-zinc-950 border border-blue-700/20 overflow-hidden relative shadow-md p-1 flex flex-col justify-end text-[7px]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <span className="relative z-10 font-bold leading-tight">Panchayat S03</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-11 bg-zinc-950/95 border-t border-zinc-900 flex items-center justify-around text-[8px] text-zinc-400 font-semibold z-10 px-2">
              <div className="flex flex-col items-center gap-0.5 text-purple-400 cursor-pointer">
                <Home size={12} />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Search size={12} />
                <span>Search</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Download size={12} />
                <span>Downloads</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. SIDEBAR MENU SCREEN */}
        {screen === 'sidebar' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative">
            {/* Ambient Background Content dimmed */}
            <div className="absolute inset-0 bg-black/60 z-0" />
            
            {/* Menu Header / Top Area */}
            <div className="px-3.5 py-2 flex items-center justify-between z-10 bg-black/40">
              <div className="flex items-center gap-2">
                <Menu size={16} className="text-purple-400" />
                <div className="flex items-center">
                  <span className="font-display font-extrabold text-[13px] tracking-wider text-purple-400">VEG</span>
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-pink-500 transform rotate-45 ml-0.5 rounded-[2px]" />
                </div>
              </div>
            </div>

            {/* Drawer layout overlay on left */}
            <div className="absolute top-0 bottom-0 left-0 w-[180px] bg-[#0c0c14] border-r border-zinc-800/80 z-20 flex flex-col p-3 shadow-2xl">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-zinc-800">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-[10px] text-white">V</div>
                <div>
                  <h4 className="font-bold text-[9px] text-white">Vega App v1.0</h4>
                  <p className="text-[6px] text-purple-400 font-mono">Status: Premium Free</p>
                </div>
              </div>

              {/* Sidebar Menu Items */}
              <div className="flex-1 space-y-1">
                {/* Active Category */}
                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-gradient-to-r from-purple-950/80 to-purple-900/30 border-l-[3px] border-purple-500 text-purple-300">
                  <Film size={12} />
                  <span className="font-bold text-[9px]">Movies & Series</span>
                </div>
                
                {/* Regular Category */}
                <div className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-zinc-800/30 text-zinc-400 hover:text-white transition">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} />
                    <span className="text-[9px]">Short Drama</span>
                  </div>
                  <span className="px-1 py-0.2 rounded bg-rose-600/20 text-rose-400 text-[5px] scale-90 font-bold uppercase">HOT</span>
                </div>

                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-zinc-800/30 text-zinc-400 hover:text-white transition">
                  <Tv size={12} />
                  <span className="text-[9px]">Anime Hub</span>
                </div>

                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-zinc-800/30 text-zinc-400 hover:text-white transition">
                  <Play size={12} />
                  <span className="text-[9px]">Live OTT</span>
                </div>

                <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg hover:bg-zinc-800/30 text-zinc-400 hover:text-white transition mt-4 pt-4 border-t border-zinc-900">
                  <Clock size={12} />
                  <span className="text-[9px]">Watchlist</span>
                </div>
              </div>

              {/* Version indicator footer */}
              <div className="text-[7px] text-zinc-500 font-mono mt-auto flex items-center justify-between">
                <span>By Vega Team</span>
                <span>v1.0.0</span>
              </div>
            </div>

            {/* Simulated background items */}
            <div className="flex-1 flex flex-col pl-[190px] pr-2 pt-4 space-y-4 opacity-15">
              <div className="h-14 bg-zinc-900 rounded-lg"></div>
              <div className="h-20 bg-zinc-900 rounded-lg"></div>
            </div>
          </div>
        )}

        {/* 3. SHORT DRAMA SCREEN */}
        {screen === 'short-drama' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative">
            {/* Header */}
            <div className="px-3.5 py-2 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent">
              <div>
                <span className="text-[7px] font-bold text-purple-400 tracking-wider uppercase font-mono">SHORT DRAMA</span>
                <h3 className="text-[10px] font-extrabold text-white mt-0.5">Vertical stories</h3>
              </div>
              <div className="flex items-center gap-2">
                <Menu size={14} className="text-zinc-400" />
                <Search size={14} className="text-zinc-400" />
              </div>
            </div>

            {/* Drama Content Scrollable */}
            <div className="flex-1 overflow-y-auto px-3 pb-12 space-y-4" style={{ scrollbarWidth: 'none' }}>
              
              {/* Featured Reel Banner */}
              <div className="relative rounded-2xl aspect-[3/4] overflow-hidden bg-gradient-to-t from-zinc-950 via-purple-950/20 to-zinc-950 border border-purple-500/20 flex flex-col justify-end p-3.5">
                {/* Simulated vertical stream art */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-[#0d0d16]/90 to-black z-0" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-10 h-10 rounded-full bg-purple-600/90 border border-purple-400 flex items-center justify-center shadow-lg shadow-purple-950/40 transform hover:scale-105 transition cursor-pointer">
                    <Play size={16} fill="white" className="ml-0.5 text-white" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-rose-600 text-[6px] text-white font-extrabold uppercase tracking-wide z-10">
                  Featured Reel
                </div>

                <div className="relative z-10 space-y-1">
                  <h4 className="font-bold text-[11px] leading-snug">Poker King Ka Badla Full Episode</h4>
                  <div className="flex items-center gap-2 text-[7px] text-zinc-400">
                    <span>🎬 Drama • Action</span>
                    <span>👁️ 535 views</span>
                  </div>
                </div>
              </div>

              {/* Trending MicroTV */}
              <div className="space-y-2">
                <span className="font-bold text-[9px] tracking-wide text-zinc-200">Trending MicroTV Stories</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[3/4] rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-purple-600/80 flex items-center justify-center">
                      <Play size={6} fill="white" className="ml-0.5 text-white" />
                    </div>
                    <span className="relative z-10 font-bold text-[7px] leading-tight">Boss Ki Shart</span>
                  </div>
                  <div className="aspect-[3/4] rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-purple-600/80 flex items-center justify-center">
                      <Play size={6} fill="white" className="ml-0.5 text-white" />
                    </div>
                    <span className="relative z-10 font-bold text-[7px] leading-tight">Love Over Gold</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-11 bg-zinc-950/95 border-t border-zinc-900 flex items-center justify-around text-[8px] text-zinc-400 font-semibold z-10">
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Home size={12} />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-purple-400 cursor-pointer">
                <Sparkles size={12} />
                <span>Stories</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Download size={12} />
                <span>Downloads</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. DOWNLOADS SCREEN */}
        {screen === 'downloads' && (
          <div className="flex-1 flex flex-col overflow-hidden bg-[#030303] relative">
            {/* Header */}
            <div className="px-3.5 py-3.5 flex items-center justify-between z-10 bg-zinc-950/80 border-b border-zinc-900">
              <div className="flex items-center gap-1.5">
                <Download size={12} className="text-purple-400" />
                <h3 className="text-[11px] font-bold text-white">Smart Downloads</h3>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 font-mono">3 Files</span>
            </div>

            {/* Downloads List */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
              
              {/* Item 1 - Active Download */}
              <div className="p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-[9px] text-white">House of the Dragon S03E01</h4>
                    <p className="text-[7px] text-zinc-400 mt-0.5">Dual Audio • 1080p</p>
                  </div>
                  <Pause size={10} className="text-purple-400 cursor-pointer" />
                </div>
                
                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '54%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[6px] text-zinc-500">
                    <span>54% (742 MB / 1.4 GB)</span>
                    <span className="text-purple-400 font-mono">2.1 MB/s</span>
                  </div>
                </div>
              </div>

              {/* Item 2 - Completed */}
              <div className="p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[9px] text-zinc-400">Carry On Jatta 4 (2026)</h4>
                    <p className="text-[7px] text-zinc-500">Pre-dub • 720p • 840 MB</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-emerald-500">
                    <Check size={8} />
                  </div>
                </div>
              </div>

              {/* Item 3 - Paused */}
              <div className="p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2 opacity-70">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-[9px] text-zinc-400">Demon Slayer: Movie (Dub)</h4>
                    <p className="text-[7px] text-zinc-500 mt-0.5">Japanese • 1080p • 1.2 GB</p>
                  </div>
                  <Play size={10} className="text-zinc-400 cursor-pointer" fill="currentColor" />
                </div>
                
                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-600 rounded-full" style={{ width: '89%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[6px] text-zinc-500">
                    <span>Paused (1.06 GB / 1.2 GB)</span>
                    <span>89%</span>
                  </div>
                </div>
              </div>

              {/* Storage Info Bar */}
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-between text-[8px]">
                <span className="text-zinc-400 font-medium">Device Storage:</span>
                <span className="text-zinc-200 font-bold">12.4 GB Free / 64 GB</span>
              </div>

            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-11 bg-zinc-950/95 border-t border-zinc-900 flex items-center justify-around text-[8px] text-zinc-400 font-semibold z-10">
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Home size={12} />
                <span>Home</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
                <Search size={12} />
                <span>Search</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 text-purple-400 cursor-pointer">
                <Download size={12} />
                <span>Downloads</span>
              </div>
            </div>
          </div>
        )}

        {/* 5. PLAYER SCREEN */}
        {screen === 'player' && (
          <div className="flex-1 flex flex-col justify-center bg-black relative">
            {/* Dark immersive overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0518] to-black z-0 opacity-90" />
            
            {/* Main Video simulated container (rotated landscape-style visual vibe or nested player controls) */}
            <div className="relative z-10 w-full p-3 space-y-3">
              
              {/* Media Player Frame */}
              <div className="relative rounded-xl aspect-[16/10] overflow-hidden bg-zinc-950 border border-purple-500/30 shadow-lg flex flex-col justify-between p-2">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0" />
                
                {/* Simulated Movie Background Content (abstract shapes/gradients resembling a fiery scene) */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 via-purple-900/30 to-amber-950/30 z-[-1]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />

                {/* Top Overlay Bar */}
                <div className="relative z-10 flex items-center justify-between text-[6px] text-zinc-300">
                  <span className="font-bold">House of the Dragon S03E01 • Auto Source</span>
                  <Volume2 size={8} />
                </div>

                {/* Center play icon */}
                <div className="relative z-10 self-center">
                  <div className="w-8 h-8 rounded-full bg-purple-600/95 flex items-center justify-center border border-purple-400">
                    <Pause size={12} fill="white" className="text-white" />
                  </div>
                </div>

                {/* Bottom Scrub and Timing */}
                <div className="relative z-10 space-y-1">
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '42%' }} />
                  </div>
                  <div className="flex items-center justify-between text-[5px] text-zinc-400 font-mono">
                    <span>24:12</span>
                    <span>57:40</span>
                  </div>
                </div>
              </div>

              {/* Streaming Controls / Quality Settings */}
              <div className="space-y-2 p-1">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="font-bold text-zinc-200">Active Server</span>
                  <span className="text-purple-400 font-mono">Server 1 (High Speed)</span>
                </div>
                
                {/* Server Quality Option buttons */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="p-1.5 rounded bg-zinc-900 border border-purple-500/40 text-[7px] text-center font-bold text-purple-300">
                    ⚡ Server 1 (1080p Mirror)
                  </div>
                  <div className="p-1.5 rounded bg-zinc-900/40 border border-zinc-800 text-[7px] text-center text-zinc-500">
                    💨 Server 2 (720p Speed)
                  </div>
                </div>

                {/* Feature Tags list */}
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="px-1.5 py-0.5 rounded-sm bg-zinc-900 text-[6px] text-zinc-400 font-semibold">Dual Audio (Hin-Eng)</span>
                  <span className="px-1.5 py-0.5 rounded-sm bg-zinc-900 text-[6px] text-zinc-400 font-semibold">Subtitle Embedded</span>
                </div>
              </div>

            </div>

            {/* Back Button */}
            <div className="absolute top-8 left-3 z-30 flex items-center gap-1 cursor-pointer text-[9px] text-purple-400 bg-zinc-950/80 px-2 py-1 rounded-full border border-zinc-800">
              <span>← Back</span>
            </div>
          </div>
        )}

      </div>

      {/* Gloss reflection overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent z-50 rounded-[40px]" />
    </div>
  );
}
