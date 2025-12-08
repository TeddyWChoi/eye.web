import React from 'react';
import { Eye, Skull, Waves } from 'lucide-react';

export function Concept() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-red-950/10 to-gray-900 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise-texture" />
      
      {/* Floating blood particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-red-900 rounded-full opacity-40 blur-sm animate-float-slow-1" />
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-red-800 rounded-full opacity-30 blur-sm animate-float-slow-2" />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-red-900 rounded-full opacity-35 blur-sm animate-float-slow-3" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-20 relative flex flex-col items-center">
          <div className="mb-6">
            <div className="flex items-center gap-3 text-red-600 justify-center">
              <Waves className="w-6 h-6 animate-pulse" />
              <span className="text-sm tracking-widest uppercase">Concept</span>
              <Waves className="w-6 h-6 scale-x-[-1] animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl mb-6 relative inline-block horror-title">
            영안(靈眼)이란?
            {/* Glitch layers */}
            <span className="absolute inset-0 text-cyan-500 opacity-0 animate-title-glitch-1">
              영안(靈眼)이란?
            </span>
            <span className="absolute inset-0 text-red-600 opacity-0 animate-title-glitch-2">
              영안(靈眼)이란?
            </span>
            {/* Text distress effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            신령스러운 눈, 영혼을 볼 수 있는 눈.<br />
            평범한 사람들이 볼 수 없는 <span className="text-red-500 relative">
              저승의 존재들
              <span className="absolute inset-0 blur-sm bg-red-600/30" />
            </span>을 감지하는 능력입니다.
          </p>
        </div>

        {/* Core concept cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/30 p-8 hover:border-red-600 transition-all duration-300 overflow-hidden">
            {/* Torn paper edge effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent blur-sm" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
            
            {/* Blood stain */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-950/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            
            <div className="absolute inset-0 bg-red-950 opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative">
              <div className="mb-4 relative">
                <Eye className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-xl bg-red-600 opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <h3 className="text-xl mb-3">보이지 않는 것을 보다</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                스마트폰 카메라를 통해 현실 공간에 존재하는 영적 존재들을 간접 체험합니다.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/30 p-8 hover:border-red-600 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent blur-sm" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-950/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            
            <div className="absolute inset-0 bg-red-950 opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative">
              <div className="mb-4 relative">
                <Skull className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-xl bg-red-600 opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <h3 className="text-xl mb-3">현실의 왜곡</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                익숙하고 안전했던 일상의 공간이 갑자기 공포의 무대로 변합니다.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/30 p-8 hover:border-red-600 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent blur-sm" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
            <div className="absolute top-4 right-4 w-12 h-12 bg-red-950/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
            
            <div className="absolute inset-0 bg-red-950 opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative">
              <div className="mb-4 relative">
                <Waves className="w-12 h-12 text-red-600 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-xl bg-red-600 opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <h3 className="text-xl mb-3">무속적 공포</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                단순한 관찰을 넘어, 귀신과 저주가 실제 당신의 삶에 영향을 미칠 수 있다는 두려움.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto relative">
          {/* Blood splatter background */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-950/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-900/10 rounded-full blur-3xl" />
          
          <div className="border border-red-900/50 pl-8 py-6 bg-black/70 backdrop-blur-sm relative overflow-hidden">
            {/* Scratch marks effect */}
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
            <div className="absolute top-2 left-2 bottom-2 w-px bg-red-800/50" />
            
            <p className="text-2xl text-gray-300 mb-4 italic relative">
              "보지 말았어야 할 것을 보았을 때,<br />
              당신은 이미 <span className="text-red-500">돌이킬 수 없습니다</span>."
            </p>
            <p className="text-sm text-gray-500">
              - 영안 앱 사용자의 마지막 기록에서
            </p>
            
            {/* Distress overlay */}
            <div className="absolute top-4 right-6 w-16 h-16 bg-red-950/20 rounded-full blur-2xl" />
          </div>
        </div>
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
        
        .bg-noise-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes float-slow-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(20px); }
        }
        
        @keyframes float-slow-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(50px) translateX(-15px); }
        }
        
        @keyframes float-slow-3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-35px) translateX(-25px); }
        }
        
        .animate-float-slow-1 {
          animation: float-slow-1 12s ease-in-out infinite;
        }
        
        .animate-float-slow-2 {
          animation: float-slow-2 15s ease-in-out infinite;
        }
        
        .animate-float-slow-3 {
          animation: float-slow-3 13s ease-in-out infinite;
        }
        
        @keyframes title-glitch-1 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 0.6; transform: translate(-3px, 2px); }
        }
        
        @keyframes title-glitch-2 {
          0%, 100% { opacity: 0; transform: translate(0); }
          40% { opacity: 0.6; transform: translate(3px, -2px); }
        }
        
        .animate-title-glitch-1 {
          animation: title-glitch-1 5s infinite;
        }
        
        .animate-title-glitch-2 {
          animation: title-glitch-2 5s infinite;
        }
      `}</style>
    </section>
  );
}