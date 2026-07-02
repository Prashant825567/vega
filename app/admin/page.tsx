'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  Save, 
  LogOut, 
  Sparkles, 
  HardDrive, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  Sliders,
  ShieldAlert,
  Edit2,
  ChevronRight,
  QrCode,
  Upload,
  Trash2
} from 'lucide-react';
import ParticlesBg from '@/components/ParticlesBg';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // APK values
  const [apkLink, setApkLink] = useState('#');
  const [apkVersion, setApkVersion] = useState('v1.0.0');
  const [apkSize, setApkSize] = useState('25.4 MB');
  const [releaseNotes, setReleaseNotes] = useState('');
  const [customQr, setCustomQr] = useState('');
  
  // Date and stats
  const [todayDate, setTodayDate] = useState('July 2, 2026');
  const apkLinkInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Dynamic date to prevent hydration mismatch
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    // Wrap in setTimeout to defer state updates to prevent synchronous setState during render
    setTimeout(() => {
      setTodayDate(formattedDate);
    }, 0);

    // Client checks
    if (typeof window !== 'undefined') {
      const authStatus = sessionStorage.getItem('vegaAdminAuthenticated');
      if (authStatus === 'true') {
        setTimeout(() => {
          setIsAuthenticated(true);
        }, 0);
      }
    }

    // Fetch config from server API
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setApkLink(data.apkLink || '#');
          setApkVersion(data.apkVersion || 'v1.0.0');
          setApkSize(data.apkSize || '25.4 MB');
          setReleaseNotes(data.releaseNotes || '');
          setCustomQr(data.customQr || '');
        }
      })
      .catch((err) => {
        console.error('Failed to load server config, falling back to local storage', err);
        if (typeof window !== 'undefined') {
          const savedLink = localStorage.getItem('vegaApkLink') || '#';
          const savedVersion = localStorage.getItem('vegaApkVersion') || 'v1.0.0';
          const savedSize = localStorage.getItem('vegaApkSize') || '25.4 MB';
          const savedNotes = localStorage.getItem('vegaReleaseNotes') || 'Initial launch with aggregated 50+ movie servers, anime hub, and micro vertical short dramas.';
          const savedQr = localStorage.getItem('vegaCustomQr') || '';

          setApkLink(savedLink);
          setApkVersion(savedVersion);
          setApkSize(savedSize);
          setReleaseNotes(savedNotes);
          setCustomQr(savedQr);
        }
      });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'prashant') {
      setIsAuthenticated(true);
      setError('');
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('vegaAdminAuthenticated', 'true');
      }
    } else {
      setError('Access Denied: Incorrect Password');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('File is too large! Please upload a QR code image under 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomQr(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearQr = () => {
    setCustomQr('');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const res = await fetch('/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apkLink,
          apkVersion,
          apkSize,
          releaseNotes,
          customQr,
        }),
      });
      const result = await res.json();
      if (result.success) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('vegaApkLink', apkLink);
          localStorage.setItem('vegaApkVersion', apkVersion);
          localStorage.setItem('vegaApkSize', apkSize);
          localStorage.setItem('vegaReleaseNotes', releaseNotes);
          localStorage.setItem('vegaCustomQr', customQr);
        }
        alert('Changes saved successfully! All users will see the updated download link and QR code immediately.');
      } else {
        alert('Failed to save config: ' + (result.error || 'Unknown error'));
      }
    } catch (err: any) {
      console.error(err);
      alert('Error saving config: ' + (err?.message || 'Unknown error'));
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('vegaAdminAuthenticated');
    }
  };

  const focusApkInput = () => {
    if (apkLinkInputRef.current) {
      apkLinkInputRef.current.focus();
      apkLinkInputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-white flex flex-col justify-between overflow-x-hidden">
      <ParticlesBg />

      {/* 1. LOGIN GATE FOR DECRYPTING ADMIN CORES */}
      {!isAuthenticated ? (
        <div className="flex-1 flex items-center justify-center p-6 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] aspect-square rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md glass-panel rounded-3xl p-8 bg-zinc-950/40 border border-white/6 text-center space-y-6"
          >
            {/* Lock Circle Icon */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_4px_15px_rgba(124,58,237,0.15)]">
              <Lock size={28} className="animate-pulse" />
            </div>

            <div className="space-y-1.5">
              <h1 className="font-display font-black text-2xl tracking-wide text-white uppercase italic">Vega Control Gate</h1>
              <p className="text-xs text-zinc-500 font-medium font-mono">Verify credentials to configure release streams</p>
            </div>

            {/* Login form */}
            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1">Passcode Key</label>
                <input
                  type="password"
                  placeholder="Enter secret passcode..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 rounded-xl bg-zinc-900 border border-white/6 px-4 text-sm font-semibold placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-white"
                  required
                />
              </div>

              {/* Error messages */}
              {error && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-xs font-semibold text-rose-400 flex items-center gap-2">
                  <ShieldAlert size={14} />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Trigger */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-bold text-white shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Unlock Console</span>
                <Unlock size={14} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      ) : (
        /* 2. AUTHENTICATED SYSTEM DASHBOARD PANEL */
        <div className="flex-1 flex flex-col relative z-10">
          
          {/* Header Dashboard Bar */}
          <header className="border-b border-white/[0.05] bg-zinc-950/85 backdrop-blur-md sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] rounded-lg flex items-center justify-center font-black italic text-white text-base shadow-[0_4px_12px_rgba(124,58,237,0.3)]">V</div>
                <span className="font-display font-black text-lg sm:text-xl tracking-tighter bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent italic underline decoration-[#7C3AED]/50 underline-offset-4">
                  VEGA PANEL
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 font-mono font-bold text-[9px] text-purple-300 uppercase tracking-wider scale-95">Admin Console</span>
              </div>

              <button 
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-bold text-zinc-400 hover:text-white transition cursor-pointer"
              >
                <span>Logout</span>
                <LogOut size={12} />
              </button>

            </div>
          </header>

          {/* Main Dashboard Panel Frame */}
          <main className="max-w-7xl mx-auto px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: APK configuration form */}
            <div className="lg:col-span-8 space-y-8">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-2xl p-6 sm:p-8 bg-zinc-950/40 border border-white/6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/[0.04]">
                  <Sliders size={18} className="text-purple-400" />
                  <h3 className="font-display font-extrabold text-lg text-white">Configure Release Stream</h3>
                </div>

                <form onSubmit={handleSave} className="space-y-6">
                  
                  {/* Link field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1 flex items-center gap-1.5">
                      <span>Direct APK Download Link</span>
                    </label>
                    <input
                      ref={apkLinkInputRef}
                      type="text"
                      placeholder="Enter APK hosting URL (e.g. https://domain.com/vega.apk)..."
                      value={apkLink}
                      onChange={(e) => setApkLink(e.target.value)}
                      className="w-full h-12 rounded-xl bg-zinc-900 border border-white/6 px-4 text-xs sm:text-sm font-semibold placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all font-mono"
                      required
                    />
                    <p className="text-[10px] text-zinc-500 font-medium px-1 leading-normal">
                      The download page (/download) reads from this storage key: <code className="text-purple-400 font-semibold font-mono bg-zinc-900 px-1 py-0.5 rounded">vegaApkLink</code>. If empty, defaults to &quot;#&quot;.
                    </p>
                  </div>

                  {/* Custom QR Code Upload */}
                  <div className="space-y-3 bg-white/[0.02] border border-white/[0.04] p-5 rounded-2xl">
                    <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1 flex items-center gap-1.5">
                      <QrCode size={12} className="text-purple-400" />
                      <span>Download QR Code Image</span>
                    </label>
                    
                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                      {/* Current QR Code Preview */}
                      <div className="relative w-32 h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 overflow-hidden shrink-0 group">
                        {customQr ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img 
                              src={customQr} 
                              alt="QR Preview" 
                              className="w-full h-full object-contain rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                              <button
                                type="button"
                                onClick={handleClearQr}
                                className="p-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors duration-200 shadow-lg"
                                title="Delete QR Code"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-2 text-[10px] text-zinc-500 font-medium">
                            <QrCode size={24} className="mx-auto mb-1.5 text-zinc-600 animate-pulse" />
                            Default Code<br />(Stylized CSS)
                          </div>
                        )}
                      </div>

                      {/* Upload Controls */}
                      <div className="flex-1 space-y-2.5 w-full">
                        <p className="text-[11px] text-zinc-400 leading-normal">
                          Upload your custom app QR code. If none is uploaded, the site will automatically render a gorgeous, stylized fallback QR code.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          <label className="px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-xs font-bold text-purple-300 transition-all duration-200 cursor-pointer flex items-center gap-1.5">
                            <Upload size={14} />
                            <span>Upload QR Image</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleQrUpload}
                              className="hidden"
                            />
                          </label>
                          
                          {customQr && (
                            <button
                              type="button"
                              onClick={handleClearQr}
                              className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-white/6 rounded-xl text-xs font-bold text-zinc-400 hover:text-white transition-all duration-200 flex items-center gap-1.5"
                            >
                              <Trash2 size={14} />
                              <span>Reset to Default</span>
                            </button>
                          )}
                        </div>
                        <p className="text-[9px] text-zinc-600 font-mono">
                          Accepts PNG, JPG, WebP. Recommended square size. Max size 2MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Version & Size side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1">APK Version Code</label>
                      <input
                        type="text"
                        placeholder="v1.0.0"
                        value={apkVersion}
                        onChange={(e) => setApkVersion(e.target.value)}
                        className="w-full h-12 rounded-xl bg-zinc-900 border border-white/6 px-4 text-sm font-semibold placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-all font-mono"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1">File Size Measure</label>
                      <input
                        type="text"
                        placeholder="25.4 MB"
                        value={apkSize}
                        onChange={(e) => setApkSize(e.target.value)}
                        className="w-full h-12 rounded-xl bg-zinc-900 border border-white/6 px-4 text-sm font-semibold placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-all font-mono"
                        required
                      />
                    </div>
                  </div>

                  {/* Release notes textarea */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-widest px-1">Release Log Notes</label>
                    <textarea
                      placeholder="Write release highlights..."
                      rows={4}
                      value={releaseNotes}
                      onChange={(e) => setReleaseNotes(e.target.value)}
                      className="w-full rounded-xl bg-zinc-900 border border-white/6 p-4 text-xs sm:text-sm font-semibold placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-all text-zinc-300 leading-relaxed"
                    />
                  </div>

                  {/* Save changes Trigger */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.04]">
                    <span className="text-xs text-purple-400 font-semibold font-mono">
                      ● Saves globally to the web server
                    </span>
                    
                    <motion.button
                      whileHover={isSaving ? {} : { scale: 1.05, boxShadow: "0 0 25px rgba(124,58,237,0.4)" }}
                      whileTap={isSaving ? {} : { scale: 0.96 }}
                      type="submit"
                      disabled={isSaving}
                      className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all ${
                        isSaving 
                          ? 'bg-zinc-800 border border-white/10 text-zinc-500 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer'
                      }`}
                    >
                      <Save size={16} className={isSaving ? 'animate-spin' : ''} />
                      <span>{isSaving ? 'Saving Changes...' : 'Save Changes'}</span>
                    </motion.button>
                  </div>

                </form>
              </motion.div>

            </div>

            {/* Right Column: Dynamic Statistics, Navigation shortcuts */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Stats Box list */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-panel rounded-2xl p-6 bg-zinc-950/40 border border-white/6 space-y-5"
              >
                <h4 className="font-display font-extrabold text-sm text-zinc-300 uppercase tracking-wider pb-3 border-b border-white/[0.04]">System Telemetry</h4>
                
                <div className="space-y-4">
                  {/* Metric item */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-950/30 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <TrendingUp size={14} />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Total Telemetry DLs</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">1,247</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-pink-950/30 border border-pink-500/20 flex items-center justify-center text-pink-400">
                        <Sparkles size={14} />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Downloads This Month</span>
                    </div>
                    <span className="text-sm font-bold text-white font-mono">342</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-950/30 border border-amber-500/20 flex items-center justify-center text-amber-400">
                        <HardDrive size={14} />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Active APK Version</span>
                    </div>
                    <span className="text-xs font-bold text-white font-mono uppercase bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">{apkVersion}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-950/30 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Calendar size={14} />
                      </div>
                      <span className="text-xs font-semibold text-zinc-400">Last Stream Sync</span>
                    </div>
                    <span className="text-xs font-bold text-white font-mono">{todayDate}</span>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Shortcuts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="glass-panel rounded-2xl p-6 bg-zinc-950/40 border border-white/6 space-y-4"
              >
                <h4 className="font-display font-extrabold text-sm text-zinc-300 uppercase tracking-wider pb-3 border-b border-white/[0.04]">Quick Utilities</h4>
                
                <div className="space-y-2 text-xs font-semibold text-zinc-400">
                  <button 
                    onClick={focusApkInput}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] text-left transition"
                  >
                    <div className="flex items-center gap-2">
                      <Edit2 size={13} className="text-purple-400" />
                      <span>Edit Current APK Link</span>
                    </div>
                    <ChevronRight size={12} className="text-zinc-600" />
                  </button>

                  <Link 
                    href="/download"
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink size={13} className="text-pink-400" />
                      <span>Preview Download Page</span>
                    </div>
                    <ChevronRight size={12} className="text-zinc-600" />
                  </Link>

                  <Link 
                    href="/"
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] text-left transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <ExternalLink size={13} className="text-amber-400" />
                      <span>Go to Main Website</span>
                    </div>
                    <ChevronRight size={12} className="text-zinc-600" />
                  </Link>
                </div>
              </motion.div>

            </div>

          </main>

        </div>
      )}

      {/* Admin footer */}
      <footer className="border-t border-white/[0.04] py-8 px-6 text-center text-zinc-600 text-[11px] font-mono tracking-wide z-10 relative bg-zinc-950/10">
        <span>© 2026 Vega Admin Panel • Encrypted Gate</span>
      </footer>
    </div>
  );
}
