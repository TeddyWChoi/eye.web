import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import appScreenshot from 'figma:asset/7c0cf0078de997a186ffc604f59221775d3eff69.png';

export function PhoneMockup() {
  const [screenGlitch, setScreenGlitch] = useState(false);

  useEffect(() => {
    // Random screen glitches
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setScreenGlitch(true);
        setTimeout(() => setScreenGlitch(false), 150);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
        {/* Screen bezel */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
          
          {/* Screen content - Real App Screenshot */}
          <div className={`relative w-full h-full bg-black transition-all duration-150 ${
            screenGlitch ? 'brightness-150 hue-rotate-180' : ''
          }`}>
            {/* Real app screenshot */}
            <img 
              src={appScreenshot} 
              alt="영안 앱 화면" 
              className="w-full h-full object-cover"
            />
            
            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-20 bg-noise-pattern animate-noise mix-blend-overlay pointer-events-none" />
            
            {/* Scan lines effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent animate-scan" />
            </div>
            
            {/* Glitch bars */}
            {screenGlitch && (
              <>
                <div className="absolute top-1/4 left-0 right-0 h-1 bg-red-500/50" />
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-cyan-500/30" />
                <div className="absolute top-3/4 left-0 right-0 h-1 bg-red-500/40" />
              </>
            )}
          </div>
        </div>
        
        {/* Power button */}
        <div className="absolute -right-1 top-24 w-1 h-12 bg-gray-700 rounded-l" />
        
        {/* Volume buttons */}
        <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-r" />
        <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-700 rounded-r" />
      </div>
      
      {/* Phone glow */}
      <div className="absolute inset-0 -z-10 blur-3xl bg-red-900/30 scale-110 animate-pulse" />
      
      {/* Floating particles around phone */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-1 h-1 bg-red-600 rounded-full opacity-60 animate-float-particle-1" />
        <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-red-500 rounded-full opacity-40 animate-float-particle-2" />
        <div className="absolute bottom-1/3 -left-6 w-1 h-1 bg-red-600 rounded-full opacity-50 animate-float-particle-3" />
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
        
        .animate-noise {
          animation: noise 1s steps(10) infinite;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(5px); opacity: 0; }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-30px) translateX(-5px); opacity: 0; }
        }
        
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-25px) translateX(8px); opacity: 0; }
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite;
        }
        
        .animate-float-particle-3 {
          animation: float-particle-3 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}