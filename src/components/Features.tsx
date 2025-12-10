import React from 'react';
import { Camera, BookOpen, Gauge, Map } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Camera,
      title: '영안 활성화',
      description: '카메라 렌즈를 통해 보이지 않는 존재를 감지하는 영안 모드를 시뮬레이션합니다.',
      details: ['심령 현상 시각화', '노이즈 & 글리치 효과', '불길한 사운드 디자인']
    },
    {
      icon: BookOpen,
      title: '영안 기록',
      description: '촬영된 유령 사진을 저장하고, 각 존재의 정보를 도감처럼 기록합니다.',
      details: ['유령 사진 갤러리', '존재별 상세 정보', '숨겨진 스토리 파편']
    },
    {
      icon: Map,
      title: '스토리 퀘스트',
      description: '특정 유령과의 만남은 퀘스트로 이어집니다. 그들의 과거를 파헤치고 진실을 밝히세요.',
      details: ['다층적 서사 구조', '유품 & 단서 수집', '한국 무속 설화 기반']
    },
    {
      icon: Gauge,
      title: '저주 게이지',
      description: '위험한 상호작용은 저주 게이지를 증가시킵니다. 가득 차면... 무슨 일이 일어날까요?',
      details: ['실시간 위험도 측정', '행동에 따른 게이지 변화', '저주 발동 시스템']
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise-effect" />

      {/* Eerie fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 relative">
          <h2 className="text-5xl mb-6 relative inline-block horror-title">
            주요 기능
            {/* Glitch layers */}
            <span className="absolute inset-0 text-cyan-500 opacity-0 animate-title-glitch-1">
              주요 기능
            </span>
            <span className="absolute inset-0 text-red-600 opacity-0 animate-title-glitch-2">
              주요 기능
            </span>
            {/* Blood stains on title */}
            <div className="absolute -top-2 right-8 w-6 h-6 bg-red-950/40 rounded-full blur-md" />
            <div className="absolute -bottom-1 left-12 w-4 h-4 bg-red-900/30 rounded-full blur-sm" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            영안 앱을 통해 경험하게 될 핵심 기능들
          </p>
        </div>

        {/* Features list */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-red-900/30 hover:border-red-600 transition-all duration-300 overflow-hidden"
            >
              {/* Distressed edges */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/40 to-transparent" />

              {/* Blood splatter corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Icon section */}
                <div className="relative bg-black border-r border-red-900/30 p-8 flex flex-col items-center justify-center overflow-hidden">
                  {/* Scratch marks background */}
                  <div className="absolute top-0 left-4 w-px h-24 bg-gradient-to-b from-transparent via-red-900/30 to-transparent opacity-50" />
                  <div className="absolute top-0 left-6 w-px h-20 bg-gradient-to-b from-transparent via-red-800/20 to-transparent opacity-30" />

                  <div className="relative mb-4">
                    <feature.icon className="w-16 h-16 text-red-600 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 blur-2xl bg-red-600 opacity-0 group-hover:opacity-60 transition-opacity" />
                    {/* Glitch clone */}
                    <feature.icon className="absolute top-0 left-0 w-16 h-16 text-cyan-500 opacity-0 group-hover:animate-feature-glitch" />
                  </div>
                  <h3 className="text-2xl text-center relative">
                    {feature.title}
                  </h3>
                </div>

                {/* Content section */}
                <div className="p-8 relative">
                  {/* Background blood stain */}
                  <div className="absolute bottom-4 right-8 w-20 h-20 bg-red-950/20 rounded-full blur-2xl" />

                  <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 relative z-10">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/0 via-red-950/10 to-red-950/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
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
        
        .bg-noise-effect {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 350 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes feature-glitch {
          0%, 100% { opacity: 0; transform: translate(0); }
          50% { opacity: 0.7; transform: translate(-2px, 2px); }
        }
        
        .animate-feature-glitch {
          animation: feature-glitch 0.4s ease-in-out;
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