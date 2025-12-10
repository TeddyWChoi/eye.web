import React, { useState } from 'react';
import { Eye, ExternalLink, AlertTriangle } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import qrCode from '../assets/qr.svg';

export function CallToAction() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-red-950/30 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.2),transparent_70%)]" />
        {isHovering && (
          <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.4),transparent_50%)]" />
        )}
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-final-noise" />

      {/* Floating ghost silhouettes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-20 w-24 h-40 bg-gradient-to-b from-gray-800/10 to-transparent blur-3xl animate-ghost-float-1" />
        <div className="absolute bottom-1/4 right-32 w-32 h-48 bg-gradient-to-b from-gray-700/10 to-transparent blur-3xl animate-ghost-float-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left side - Text content (left aligned) */}
          <div className="order-2 md:order-1 ml-[100px]">
            {/* Warning message */}
            <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-red-950/50 border border-red-900/70 relative overflow-hidden">
              {/* Blood drip on warning */}
              <div className="absolute top-0 left-8 w-0.5 h-2 bg-gradient-to-b from-red-900 to-transparent" />

              <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm text-red-400 relative z-10">
                경고: 본 앱의 사용은 자기 책임 하에 진행됩니다
              </span>
            </div>

            {/* Main CTA content */}
            <div className="mb-12 relative">
              <h2 className="text-5xl mb-6 relative horror-title">
                당신은 준비되었습니까?
                {/* Glitch layers */}
                <span className="absolute inset-0 text-cyan-500 opacity-0 animate-cta-glitch-1">
                  당신은 준비되었습니까?
                </span>
                <span className="absolute inset-0 text-red-600 opacity-0 animate-cta-glitch-2">
                  당신은 준비되었습니까?
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-4">
                보이지 않는 것을 보는 순간,
              </p>
              <div className="text-xl text-gray-400 relative inline-block">
                당신의 일상은 더 이상 같지 않을 것입니다.
                {/* Blood stain under text */}
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-12 relative">
              <a
                href="https://teddywchoi.github.io/eye/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-12 py-6 bg-red-600 hover:bg-red-700 transition-all duration-300 text-xl relative overflow-hidden border border-red-700 hover:border-red-500"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Button background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Glitch bars on hover */}
                {isHovering && (
                  <>
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-cyan-500/50" />
                    <div className="absolute bottom-1/3 left-0 right-0 h-px bg-red-500/50" />
                  </>
                )}

                <Eye className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">영안 앱 체험하기</span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* QR Code */}
            <div className="mb-12">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-red-500/20 hover:border-red-500/50 transition-colors">
                <img
                  src={qrCode}
                  alt="App Download QR Code"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-lg bg-white p-0 -ml-[3px]"
                />
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="order-1 md:order-2 flex justify-center -mt-[50px]">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 pt-12 border-t border-red-900/50 text-center">
        {/* Blood drips on footer divider */}
        <div className="absolute top-0 left-1/3 w-0.5 h-3 bg-gradient-to-b from-red-900 to-transparent" />
        <div className="absolute top-0 right-1/4 w-1 h-4 bg-gradient-to-b from-red-900 to-transparent" />

        <div className="flex items-center justify-center gap-3 mb-4">
          <Eye className="w-6 h-6 text-red-600 animate-pulse" />
          <p className="text-2xl text-red-600">영안(靈眼)</p>
        </div>
        <p className="text-sm text-gray-600">
          © 2025 Spiritual Eye AR Experience. All rights reserved.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          본 앱은 엔터테인먼트 목적으로 제작되었습니다. 실제 초자연적 현상과는 무관합니다.
        </p>
      </div>

      <style>{`
        .horror-title {
          font-family: 'Noto Serif KR', serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          text-shadow: 
            0 0 20px rgba(220, 38, 38, 0.5),
            0 0 40px rgba(220, 38, 38, 0.3),
            2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        
        .bg-final-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes ghost-float-1 {
          0%, 100% { transform: translateY(0); opacity: 0.1; }
          50% { transform: translateY(-30px); opacity: 0.15; }
        }
        
        @keyframes ghost-float-2 {
          0%, 100% { transform: translateY(0); opacity: 0.12; }
          50% { transform: translateY(40px); opacity: 0.08; }
        }
        
        .animate-ghost-float-1 {
          animation: ghost-float-1 10s ease-in-out infinite;
        }
        
        .animate-ghost-float-2 {
          animation: ghost-float-2 12s ease-in-out infinite;
        }
        
        @keyframes cta-glitch-1 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 0.6; transform: translate(-3px, 2px); }
        }
        
        @keyframes cta-glitch-2 {
          0%, 100% { opacity: 0; transform: translate(0); }
          40% { opacity: 0.6; transform: translate(3px, -2px); }
        }
        
        .animate-cta-glitch-1 {
          animation: cta-glitch-1 5s infinite;
        }
        
        .animate-cta-glitch-2 {
          animation: cta-glitch-2 5s infinite;
        }
      `}</style>
    </section>
  );
}
