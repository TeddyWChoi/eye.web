import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { HongdaeMap } from './components/HongdaeMap';
import { GhostScroll } from './components/GhostScroll';
import { HorrorElements } from './components/HorrorElements';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { CallToAction } from './components/CallToAction';
import { GlitchEffect } from './components/GlitchEffect';

export default function App() {
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    // Random glitch effects
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setShowGlitch(true);
        setTimeout(() => setShowGlitch(false), 200);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black text-white min-h-screen">
      {showGlitch && <GlitchEffect />}

      <Hero />
      <Concept />
      <Process />
      <Features />
      <HongdaeMap />
      <GhostScroll />
      <HorrorElements />
      <CallToAction />

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.3),transparent_50%)]" />
      </div>
    </div>
  );
}
