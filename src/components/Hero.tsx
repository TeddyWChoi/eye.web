import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import logoImage from 'figma:asset/45668b07b2299cdbb64890287e6caa0e17ff70e5.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [glitchText, setGlitchText] = useState(false);
  const [bloodDrip, setBloodDrip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 100);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBloodDrip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Dark horror background image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1662414712336-12cb34792ad5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwaG9ycm9yJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ3NTk1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Horror background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-red-950/50 to-black" />
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise" />
      
      {/* Animated eye background with multiple layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Eye className="w-96 h-96 text-red-900/20 animate-pulse blur-sm" />
        <Eye className="absolute w-96 h-96 text-red-600/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Blood drips from top */}
      {bloodDrip && (
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-1 h-0 bg-gradient-to-b from-red-900 to-transparent animate-blood-drip" />
          <div className="absolute top-0 left-1/3 w-0.5 h-0 bg-gradient-to-b from-red-800/70 to-transparent animate-blood-drip" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-0 right-1/3 w-1.5 h-0 bg-gradient-to-b from-red-900 to-transparent animate-blood-drip" style={{ animationDelay: '1s' }} />
        </div>
      )}

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-8 relative">
          <img 
            src={logoImage} 
            alt="영안 로고" 
            className="w-56 h-auto relative z-10"
          />
          <div className="absolute inset-0 blur-3xl bg-red-600 opacity-40 animate-pulse" />
          {/* Glitch clones */}
          <img 
            src={logoImage} 
            alt="영안 로고" 
            className="absolute top-0 left-0 w-56 h-auto opacity-0 animate-glitch-1 mix-blend-screen"
            style={{ filter: 'hue-rotate(180deg)' }}
          />
          <img 
            src={logoImage} 
            alt="영안 로고" 
            className="absolute top-0 left-0 w-56 h-auto opacity-0 animate-glitch-2"
            style={{ filter: 'brightness(2) saturate(2)' }}
          />
        </div>

        {/* Tagline */}
        <p className="text-2xl text-red-500 mb-4 tracking-wider animate-pulse">
          보이지 않는 것을 보다
        </p>
        <p className="text-gray-400 text-center max-w-md">
          현실 공간에 숨겨진 유령과 저주를 간접 체험해보는<br />
          <span className="text-red-400">공포 시뮬레이션 앱</span>
        </p>
      </div>

      {/* Scroll indicator - centered */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-red-600 rounded-full mx-auto flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-red-600 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Vignette effect - stronger */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
      
      {/* Floating ghost silhouettes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-48 bg-gradient-to-b from-gray-800/10 to-transparent blur-2xl animate-float-1" />
        <div className="absolute bottom-1/3 right-20 w-24 h-40 bg-gradient-to-b from-gray-700/10 to-transparent blur-2xl animate-float-2" />
      </div>

      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes blood-drip {
          0% { height: 0; opacity: 0; }
          10% { opacity: 1; }
          100% { height: 200px; opacity: 0; }
        }
        
        .animate-blood-drip {
          animation: blood-drip 3s ease-in forwards;
        }
        
        @keyframes glitch-1 {
          0%, 100% { opacity: 0; transform: translate(0); }
          33% { opacity: 0.8; transform: translate(-2px, 2px); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translate(0); }
          66% { opacity: 0.8; transform: translate(2px, -2px); }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.1; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.2; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
          50% { transform: translateY(40px) translateX(-15px); opacity: 0.05; }
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
