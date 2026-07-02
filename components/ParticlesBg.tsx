'use client';

import React, { useEffect, useRef } from 'react';

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 65);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.6,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.45 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background glow orbs (drawn underneath particles)
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, Math.min(canvas.width * 0.4, 400)
      );
      gradient1.addColorStop(0, 'rgba(124, 58, 237, 0.12)');
      gradient1.addColorStop(1, 'rgba(3, 3, 3, 0)');
      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.2, canvas.height * 0.3, Math.min(canvas.width * 0.4, 400), 0, Math.PI * 2);
      ctx.fill();

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.7, 0,
        canvas.width * 0.8, canvas.height * 0.7, Math.min(canvas.width * 0.5, 500)
      );
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.1)');
      gradient2.addColorStop(1, 'rgba(3, 3, 3, 0)');
      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height * 0.7, Math.min(canvas.width * 0.5, 500), 0, Math.PI * 2);
      ctx.fill();

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#A855F7';
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Update positions
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="particles-bg-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
