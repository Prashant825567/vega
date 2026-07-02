'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay: number;
}

function Counter({ value, suffix, delay, highlightColor }: { value: number; suffix: string; delay: number; highlightColor: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const durationMs = 1200;
      const steps = 30;
      const stepValue = Math.ceil(end / steps);
      const stepTime = durationMs / steps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [value, isInView, delay]);

  const displayStr = value === 10000 ? `${(count / 1000).toFixed(0)}` : count;

  return (
    <span ref={ref} className={`text-4xl sm:text-5xl md:text-6xl font-black italic leading-none font-display shrink-0 ${highlightColor}`}>
      {displayStr}
      <span>{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const statsList = [
    { value: 10000, suffix: 'K', label: 'Premium', sublabel: 'Movies', color: 'text-[#7C3AED]', delay: 0 },
    { value: 500, suffix: '+', label: 'Latest', sublabel: 'Anime', color: 'text-[#7C3AED]', delay: 0.1 },
    { value: 50, suffix: '+', label: 'Scraped', sublabel: 'Sources', color: 'text-[#7C3AED]', delay: 0.2 },
    { value: 100, suffix: '% FREE', label: 'Subscription', sublabel: 'Not Required', color: 'text-[#F59E0B]', delay: 0.3 }
  ];

  return (
    <section className="relative bg-black/40 backdrop-blur-2xl border-t border-b border-white/5 py-8 px-6 overflow-hidden">
      {/* Glow highlight horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center lg:divide-x divide-white/10">
          {statsList.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center lg:justify-start gap-5 px-4 py-2 sm:py-3"
            >
              <Counter value={stat.value} suffix={stat.suffix} delay={stat.delay} highlightColor={stat.color} />
              
              <div className="flex flex-col text-left">
                <span className="text-[10px] leading-tight uppercase font-bold text-zinc-500 tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[10px] leading-tight uppercase font-bold text-zinc-200 tracking-wider font-display">
                  {stat.sublabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
