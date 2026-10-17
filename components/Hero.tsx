'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowDown, Play, ExternalLink } from 'lucide-react';
import PhoneMockup from './PhoneMockup';
import DownloadTracker from './DownloadTracker';

export default function Hero() {
  const [downloadLink, setDownloadLink] = useState('');
  const [apkVersion, setApkVersion] = useState('');
  const [apkSize, setApkSize] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDownloadLink(data.apkLink || 'https://github.com/Vega-Portal/vega-releases/releases/download/v1.0.0/Vega_v1.0.0.apk');
          setApkVersion(data.apkVersion || 'v1.0.0');
          setApkSize(data.apkSize || '25.4 MB');
        }
      })
      .catch((err) => {
        console.error('Failed to load server config on hero:', err);
        if (typeof window !== 'undefined') {
          const savedLink = localStorage.getItem('vegaApkLink');
          const savedVersion = localStorage.getItem('vegaApkVersion');
          const savedSize = localStorage.getItem('vegaApkSize');
          if (savedLink) setDownloadLink(savedLink);
          if (savedVersion) setApkVersion(savedVersion);
          if (savedSize) setApkSize(savedSize);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden flex items-center justify-center">
      {/* Background radial soft light orbs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] aspect-square rounded-full bg-purple-900/10 blur-[130px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[15%] w-[300px] sm:w-[450px] aspect-square rounded-full bg-pink-900/10 blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left column content */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold uppercase tracking-widest text-purple-300 shadow-[0_4px_20px_rgba(124,58,237,0.15)] font-mono min-h-[32px]"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            {isLoading ? (
              <span className="inline-block w-36 h-3 bg-purple-400/20 rounded animate-pulse" />
            ) : (
              <span>Version {apkVersion || 'v1.0.0'} Now Available</span>
            )}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.95] tracking-tight italic text-center lg:text-left"
          >
            Stream <span className="text-[#7C3AED]">Everything.</span><br className="hidden lg:inline" />
            {' '}Pay <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">Nothing.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-zinc-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed"
          >
            Movies • Anime • Web Series • Live OTT • Short Dramas — all free, all in one premium app with auto-scraping from 50+ sources.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Main Live Download Button */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(124,58,237,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 p-[1px] shadow-lg shadow-purple-500/25"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 px-8 py-4 bg-[#030303] rounded-xl text-base font-bold text-zinc-400 cursor-wait">
                  <div className="w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  <span>Loading APK Size...</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsTrackerOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#030303] hover:bg-transparent rounded-xl text-base font-bold text-white transition-all cursor-pointer group"
                >
                  <ArrowDown size={18} className="text-purple-400 animate-bounce group-hover:scale-110 transition-transform" />
                  <span>Download APK {apkVersion} ({apkSize})</span>
                </button>
              )}
            </motion.div>

            {/* View Screenshots / Download Page */}
            <motion.div
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.03)' }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/download"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 text-base font-bold text-zinc-300 hover:text-white transition-colors w-full"
              >
                <span>Download Portal</span>
                <ExternalLink size={15} className="text-zinc-500" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs text-zinc-500 font-medium font-mono"
          >
            No registration • No monthly fees • Pure high speed streaming
          </motion.div>

        </div>

        {/* Right column mockup phone */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, type: 'spring', damping: 25 }}
            className="relative"
          >
            {/* Premium backdrop radial purple light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[400px] rounded-full bg-purple-600/15 blur-[60px] pointer-events-none -z-10" />
            
            {/* Animated floating frame */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PhoneMockup screen="home" animated={false} />
            </motion.div>

            {/* Extra label floating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 sm:-left-12 bottom-20 glass-panel px-4 py-2.5 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/50 flex items-center justify-center">
                <Play size={14} fill="white" className="text-white ml-0.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-zinc-400 font-mono">Current Release</div>
                {isLoading ? (
                  <div className="w-16 h-3.5 bg-white/10 rounded animate-pulse mt-0.5" />
                ) : (
                  <div className="text-xs font-bold text-white">{apkVersion || 'v1.0.0'} Stable</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Live Download Tracker Modal for Home Page */}
      <DownloadTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        apkVersion={apkVersion || 'v1.0.0'}
        apkSize={apkSize || '25.4 MB'}
        downloadLink={downloadLink}
      />
    </section>
  );
}
