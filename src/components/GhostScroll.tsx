import React, { useEffect, useState } from 'react';
import { Skull, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ghost1 from 'figma:asset/410a4edc0add1efe63f581f78ecaaf717fe8f48e.png';
import ghost2 from 'figma:asset/de65471a6165abd53ae3c37a3c8a7a541688517d.png';
import ghost3 from 'figma:asset/a831feee00ee3a4483a6e7ba6b1771cf631e3a15.png';
import ghost4 from 'figma:asset/fa6d1d2491deb59a2df588569a584bd933a88d88.png';
import ghost5 from 'figma:asset/0e94b10802a42442f075d0df9ca99bc800d73453.png';
import ghost6 from 'figma:asset/eb10d660874cc8d78b9ffa44275784383627d343.png';

interface GhostReveal {
  name: string;
  description: string;
  ability: string;
  image: string;
  dangerLevel: number;
  type: string;
}

const ghosts: GhostReveal[] = [
  {
    name: '처녀귀신',
    description: '홍문관 입구를 떠도는 슬픈 영혼. 밤마다 들리는 울음소리는 잠들지 못하는 학생들을 괴롭힌다.',
    ability: '악몽 유발',
    type: '홍문관 입구',
    dangerLevel: 3,
    image: ghost1
  },
  {
    name: '비명지르는 여인',
    description: '현대미술관 외벽 난간에 서 있는 여인. 그녀의 비명을 듣는 순간, 당신은 이미 허공을 딛고 있다.',
    ability: '정신 지배',
    type: '현대미술관 외벽',
    dangerLevel: 4,
    image: ghost2
  },
  {
    name: '쌍둥이',
    description: '대나무 숲길에 나타나는 어린 남매. 길을 묻는 척하며 사람들을 숲의 미궁 속으로 유인한다.',
    ability: '환영 생성',
    type: '대나무 숲길',
    dangerLevel: 4,
    image: ghost3
  },
  {
    name: '귀문',
    description: '캠퍼스 중앙에 열리는 저승의 문. 그곳에서 뿜어져 나오는 냉기는 산 사람의 생기를 앗아간다.',
    ability: '생기 흡수',
    type: '캠퍼스 중앙',
    dangerLevel: 4,
    image: ghost4
  },
  {
    name: '대학원생',
    description: 'IDAS 복도를 배회하는 지친 영혼. "교수님..." 이라고 중얼거리며 밤새 복도를 걸어다닌다.',
    ability: '절망 전이',
    type: 'IDAS 복도',
    dangerLevel: 2,
    image: ghost5
  },
  {
    name: '연구원의 망령',
    description: '211호 연구실에서 실험 중 사고로 목숨을 잃었다. 여전히 연구실을 나가지 못하고 누군가를 기다리고 있다.',
    ability: '염력',
    type: '211호 연구실',
    dangerLevel: 5,
    image: ghost6
  }
];

export function GhostScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Auto-slide effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 1) % ghosts.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + ghosts.length) % ghosts.length);
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % ghosts.length);
  };

  const currentGhost = ghosts[currentIndex];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-red-950/20 to-black overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise-scroll" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <div className="flex items-center gap-3 text-red-600 justify-center mb-6">
            <Skull className="w-6 h-6 animate-pulse" />
            <span className="text-sm tracking-widest uppercase">Entities</span>
            <Skull className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-5xl mb-6 relative horror-title">
            귀신 도감
            {/* Glitch layers */}
            <span className="absolute inset-0 text-cyan-500 opacity-0 animate-title-glitch-1">
              귀신 도감
            </span>
            <span className="absolute inset-0 text-red-600 opacity-0 animate-title-glitch-2">
              귀신 도감
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            당신을 기다리는 존재들. 각자의 능력과 특성을 파악하라.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main slide */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Ghost image */}
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto border-2 border-red-900/50 overflow-hidden group">
                <ImageWithFallback 
                  key={currentIndex}
                  src={currentGhost.image}
                  alt={currentGhost.name}
                  className="w-full h-full object-cover animate-slide-in"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-500" />
                
                {/* Animated border glitch - REMOVED */}
                {/* <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/50 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                
                {/* Eerie glow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Type badge */}
                <div className="absolute top-4 left-4 bg-black/90 border border-red-600/50 px-4 py-2 text-sm text-red-500">
                  {currentGhost.type}
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-1/4 -left-4 w-2 h-2 bg-red-600 rounded-full blur-sm animate-float-particle-1" />
              <div className="absolute bottom-1/3 -right-6 w-1.5 h-1.5 bg-red-800 rounded-full blur-sm animate-float-particle-2" />
            </div>

            {/* Ghost info */}
            <div className="animate-fade-in" key={`info-${currentIndex}`}>
              <div className="border-l-4 border-red-600 pl-8 py-6 bg-gradient-to-r from-red-950/20 to-transparent">
                {/* Ghost number */}
                <div className="text-red-900/50 text-6xl mb-2">
                  {String(currentIndex + 1).padStart(2, '0')}
                </div>

                <h3 className="text-5xl mb-6 text-red-500">{currentGhost.name}</h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentGhost.description}
                </p>
                
                <div className="inline-flex items-center gap-3 bg-black/70 border border-red-900/50 px-6 py-3 mb-6">
                  <Skull className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="text-xs text-gray-500 mb-1">특수 능력</div>
                    <div className="text-red-400">{currentGhost.ability}</div>
                  </div>
                </div>

                {/* Danger indicator */}
                <div>
                  <div className="text-xs text-gray-500 mb-2">위험도</div>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-1.5 transition-all duration-500"
                        style={{
                          backgroundColor: i < currentGhost.dangerLevel ? 'rgb(220, 38, 38)' : 'rgb(220, 38, 38, 0.2)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-black/80 border border-red-600/50 hover:border-red-600 hover:bg-red-950/50 transition-all flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-red-600 group-hover:scale-125 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-black/80 border border-red-600/50 hover:border-red-600 hover:bg-red-950/50 transition-all flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-red-600 group-hover:scale-125 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {ghosts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'next' : 'prev');
                  setCurrentIndex(index);
                }}
                className="group relative"
              >
                <div className={`w-12 h-1 transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-red-600'
                    : 'bg-red-900/30 group-hover:bg-red-900/60'
                }`} />
                {index === currentIndex && !isHovered && (
                  <div className="absolute top-0 left-0 h-full bg-red-400 animate-progress" />
                )}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-8 text-gray-600 text-sm">
            <span className="text-red-600">{currentIndex + 1}</span> / {ghosts.length}
          </div>
        </div>

        {/* Auto-play indicator */}
        {!isHovered && (
          <div className="text-center mt-8 text-xs text-gray-600 animate-pulse">
            마우스를 올려 자동 재생을 멈추세요
          </div>
        )}
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
        
        .bg-noise-scroll {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-progress {
          animation: progress 4s linear;
        }

        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(10px); opacity: 0.8; }
        }

        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(40px) translateX(-15px); opacity: 0.9; }
        }

        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
