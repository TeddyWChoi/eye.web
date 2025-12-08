import React from 'react';
import { Lightbulb, Palette, Code, TestTube } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: '컨셉 기획',
      description: '스마트폰과 한국 무속 공포를 결합한 독특한 경험 설계',
      details: [
        '영안(靈眼) 컨셉 개발',
        '공포 메커니즘 정의',
        '사용자 경험 시나리오 작성',
        '스토리 & 세계관 구축'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX 디자인',
      description: '공포 분위기를 극대화하는 인터페이스 설계',
      details: [
        '다크 테마 & 붉은 악센트',
        '글리치 효과 연출',
        '직관적인 카메라 UI',
        '몰입형 인터랙션 설계'
      ]
    },
    {
      icon: Code,
      title: '개발 & 구현',
      description: 'React와 최신 웹 기술로 심령 현상 체험 구축',
      details: [
        'React 기반 SPA 구조',
        '카메라 필터 시뮬레이션',
        '애니메이션 & 효과 구현',
        '반응형 레이아웃'
      ]
    },
    {
      icon: TestTube,
      title: '테스트 & 최적화',
      description: '실제 사용 환경에서의 공포 경험 검증',
      details: [
        '다양한 조명 환경 테스트',
        '성능 최적화',
        '사용자 피드백 반영',
        '공포 연출 강화'
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6 relative horror-title">
            작업 과정
            {/* Glitch layers */}
            <span className="absolute inset-0 text-cyan-500 opacity-0 animate-title-glitch-1">
              작업 과정
            </span>
            <span className="absolute inset-0 text-red-600 opacity-0 animate-title-glitch-2">
              작업 과정
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            아이디어에서 완성된 앱까지의 여정
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-900 via-red-600 to-red-900 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block bg-gray-900 border border-gray-800 p-8 hover:border-red-900 transition-all duration-300 group">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <step.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-6">
                      {step.description}
                    </p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-500 flex items-center gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          {index % 2 === 1 && <div className="w-1 h-1 bg-red-600 rounded-full" />}
                          {detail}
                          {index % 2 === 0 && <div className="w-1 h-1 bg-red-600 rounded-full" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 bg-red-600 rounded-full" />
                    <div className="absolute inset-0 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
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
