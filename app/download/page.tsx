'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Download, 
  AlertTriangle, 
  Info, 
  ChevronRight, 
  Smartphone, 
  QrCode, 
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Wifi
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticlesBg from '@/components/ParticlesBg';
import Footer from '@/components/Footer';

export default function DownloadPage() {
  const [downloadLink, setDownloadLink] = useState('#');
  const [customQr, setCustomQr] = useState('');
  const [apkVersion, setApkVersion] = useState('v1.0.0');
  const [apkSize, setApkSize] = useState('25.4 MB');
  const [releaseNotes, setReleaseNotes] = useState('Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch global config from server API
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDownloadLink(data.apkLink || '#');
          setApkVersion(data.apkVersion || 'v1.0.0');
          setApkSize(data.apkSize || '25.4 MB');
          setReleaseNotes(data.releaseNotes || 'Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.');
          setCustomQr(data.customQr || '');
        }
      })
      .catch((err) => {
        console.error('Failed to load server config, falling back to local storage', err);
        if (typeof window !== 'undefined') {
          const savedLink = localStorage.getItem('vegaApkLink');
          const savedQr = localStorage.getItem('vegaCustomQr');
          const savedVersion = localStorage.getItem('vegaApkVersion');
          const savedSize = localStorage.getItem('vegaApkSize');
          const savedNotes = localStorage.getItem('vegaReleaseNotes');

          setTimeout(() => {
            if (savedLink) {
              setDownloadLink(savedLink);
            } else {
              setDownloadLink('#download-apk');
            }
            if (savedQr) {
              setCustomQr(savedQr);
            }
            if (savedVersion) {
              setApkVersion(savedVersion);
            }
            if (savedSize) {
              setApkSize(savedSize);
            }
            if (savedNotes) {
              setReleaseNotes(savedNotes);
            }
          }, 0);
        }
      });
  }, []);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const installationSteps = [
    {
      num: 1,
      title: "Download Vega APK",
      desc: "Tap the glowing download button on this page. Your browser might ask for confirmation—tap 'Download anyway'."
    },
    {
      num: 2,
      title: "Open Installed File",
      desc: "Once completed, pull down your notification tray or go to your file manager and open the downloaded APK."
    },
    {
      num: 3,
      title: "Allow Unknown Sources",
      desc: "If prompted, click 'Settings' and toggle on 'Allow installation from this source' to authorize your browser to install apps."
    },
    {
      num: 4,
      title: "Install & Enjoy!",
      desc: "Tap 'Install' in the installer window. Once finished, launch Vega from your app drawer and start streaming immediately."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      <ParticlesBg />
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold font-mono uppercase tracking-widest text-purple-300 bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30"
          >
            Direct File Server
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight italic"
          >
            Download{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-orange-600 bg-clip-text text-transparent tracking-tighter">
              Vega APK
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Direct, virus-free premium download link for Android devices. Get immediate access to movies, anime, live streams, and dramas.
          </motion.p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: APK Info, Download Button, Requirements */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Download Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 bg-zinc-950/40 border border-white/6 relative overflow-hidden"
            >
              {/* Background accent light */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/[0.04]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display font-extrabold text-2xl text-white">Vega Streaming</h3>
                    <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-500/20 text-[10px] font-bold font-mono uppercase">Stable release</span>
                  </div>
                  <p className="text-zinc-500 text-xs mt-1.5 font-medium">Aggregating movies, anime, series, and OTT mirror feeds</p>
                </div>

                {/* Micro metrics */}
                <div className="flex gap-4 text-xs font-semibold text-zinc-400">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 font-bold font-mono text-[9px] uppercase tracking-wider">Version</span>
                    <span className="text-white mt-0.5 font-bold">{apkVersion}</span>
                  </div>
                  <div className="flex flex-col border-l border-white/[0.05] pl-4">
                    <span className="text-zinc-600 font-bold font-mono text-[9px] uppercase tracking-wider">File Size</span>
                    <span className="text-white mt-0.5 font-bold">{apkSize}</span>
                  </div>
                </div>
              </div>

              {/* Glowing Download Trigger */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 0 35px rgba(124,58,237,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 p-[1px] shadow-2xl"
                >
                  <a
                    href={downloadLink}
                    download={`Vega_${apkVersion}.apk`}
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-[#030303] hover:bg-transparent rounded-xl text-lg font-black text-white transition-all cursor-pointer"
                  >
                    <Download size={22} className="text-purple-300 animate-bounce" />
                    <span>Download APK {apkVersion} ({apkSize})</span>
                  </a>
                </motion.div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-medium px-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-500" /> Fully Scanned & Clean
                  </span>
                  <button 
                    onClick={handleShare}
                    className="hover:text-purple-400 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    {copied ? 'Copied link!' : 'Share direct link →'}
                  </button>
                </div>
              </div>

            </motion.div>

            {/* What's New / Release Notes */}
            {releaseNotes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-panel rounded-2xl p-6 bg-zinc-950/40 border border-white/6"
              >
                <h4 className="font-display font-extrabold text-base text-white mb-3 flex items-center gap-2">
                  <Info size={18} className="text-purple-400" /> What&apos;s New in {apkVersion}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans bg-white/[0.01] border border-white/[0.03] p-4 rounded-xl">
                  {releaseNotes}
                </p>
              </motion.div>
            )}

            {/* Warning Alarm Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-5 rounded-2xl bg-[#f59e0b]/[0.02] border border-[#f59e0b]/20 flex items-start gap-4"
            >
              <div className="p-2 rounded-xl bg-[#f59e0b]/10 text-[#F59E0B]">
                <AlertTriangle size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-extrabold text-sm text-zinc-200">Installation Security Warning</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Since Vega is not listed on Google Play Store, you must enable <strong className="text-zinc-200">&quot;Install from Unknown Sources&quot;</strong> in your Android settings to complete installation. This is standard for manually installed APK files.
                </p>
              </div>
            </motion.div>

            {/* Hardware Requirements Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-panel rounded-2xl p-6 bg-zinc-950/40 border border-white/6"
            >
              <h4 className="font-display font-extrabold text-base text-white mb-4 flex items-center gap-2">
                <Smartphone size={18} className="text-purple-400" /> Hardware Requirements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-between">
                  <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest">Target OS</span>
                  <div className="space-y-1 mt-2">
                    <div className="text-sm font-bold text-white">Android 8.0+</div>
                    <div className="text-[10px] text-zinc-500">Oreo, Pie, 10, 11, 12, 13, 14</div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-between">
                  <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest">Free Space</span>
                  <div className="space-y-1 mt-2">
                    <div className="text-sm font-bold text-white">50 MB+</div>
                    <div className="text-[10px] text-zinc-500">For download & unpacking</div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-between">
                  <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest">Internet Connection</span>
                  <div className="space-y-1 mt-2">
                    <div className="text-sm font-bold text-white">Wifi / 4G LTE</div>
                    <div className="text-[10px] text-zinc-500">Higher speed is recommended</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: QR Code, Installation Instructions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Visual QR Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel rounded-2xl p-6 bg-zinc-950/40 border border-white/6 flex flex-col items-center text-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
              
              {/* Visual QR Code Box */}
              {customQr ? (
                <div className="relative p-2.5 rounded-2xl bg-white border-2 border-purple-500/50 shadow-2xl shadow-purple-900/10 mb-4 w-44 h-44 flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={customQr} 
                    alt="Vega Download QR" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ) : (
                /* Stylized CSS QR Code Box */
                <div className="relative p-4 rounded-2xl bg-white border-2 border-purple-500/50 shadow-2xl shadow-purple-900/10 mb-4 w-44 aspect-square flex flex-col items-center justify-center">
                  {/* Visual Representation of QR elements */}
                  <div className="w-full h-full relative grid grid-cols-5 gap-1 text-black p-1">
                    {/* QR Positioning Anchors */}
                    <div className="border-[3px] border-black bg-white rounded-[4px] w-6 h-6 absolute top-0 left-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-black rounded-3xs"></div>
                    </div>
                    <div className="border-[3px] border-black bg-white rounded-[4px] w-6 h-6 absolute top-0 right-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-black rounded-3xs"></div>
                    </div>
                    <div className="border-[3px] border-black bg-white rounded-[4px] w-6 h-6 absolute bottom-0 left-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-black rounded-3xs"></div>
                    </div>

                    {/* Aesthetic visual noise simulating real QR code dots */}
                    <div className="absolute inset-4 grid grid-cols-6 gap-[2px] opacity-80 select-none pointer-events-none p-1">
                      {[...Array(36)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-3xs ${
                            (i % 3 === 0 || i % 5 === 1 || i === 7 || i === 22 || i === 14) ? 'bg-black' : 'bg-transparent'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <h4 className="font-display font-extrabold text-sm text-white flex items-center gap-1.5">
                <QrCode size={16} className="text-purple-400" /> Scan to Download
              </h4>
              <p className="text-[11px] text-zinc-500 max-w-[200px] mt-1">
                Scan this code with your phone camera to open this portal directly on your mobile device.
              </p>
            </motion.div>

            {/* Installation Steps List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 bg-zinc-950/40 border border-white/6 space-y-6"
            >
              <h4 className="font-display font-extrabold text-base text-white">
                How to Install Direct APK
              </h4>
              
              <div className="space-y-6 relative">
                {/* Connect line for instructions */}
                <div className="absolute top-[24px] bottom-[24px] left-5 w-[1px] bg-white/[0.04] -z-10" />

                {installationSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    {/* Circle tag */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 font-mono font-black text-sm text-purple-300">
                      {step.num}
                    </div>

                    {/* Step texts */}
                    <div className="space-y-1">
                      <h5 className="font-display font-extrabold text-sm text-white">{step.title}</h5>
                      <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
