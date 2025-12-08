import React, { useState } from 'react';
import { MapPin, Skull, Eye, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hongdaeMapImg from 'figma:asset/c4e92406cd100c50a3547b1e899e3fc27132796a.png';
import ghost1 from 'figma:asset/410a4edc0add1efe63f581f78ecaaf717fe8f48e.png';
import ghost2 from 'figma:asset/de65471a6165abd53ae3c37a3c8a7a541688517d.png';
import ghost3 from 'figma:asset/a831feee00ee3a4483a6e7ba6b1771cf631e3a15.png';
import ghost4 from 'figma:asset/fa6d1d2491deb59a2df588569a584bd933a88d88.png';
import ghost5 from 'figma:asset/0e94b10802a42442f075d0df9ca99bc800d73453.png';
import ghost6 from 'figma:asset/eb10d660874cc8d78b9ffa44275784383627d343.png';

interface Ghost {
  id: number;
  name: string;
  location: string;
  description: string;
  danger: string;
  image: string;
  x: number;
  y: number;
}

const ghosts: Ghost[] = [
  {
    id: 1,
    name: '처녀귀신',
    location: '홍문관 입구',
    description: '홍문관 입구를 떠도는 슬픈 영혼. 밤마다 들리는 울음소리는 잠들지 못하는 학생들을 괴롭힌다.',
    danger: '주의',
    image: ghost1,
    x: 25,
    y: 60
  },
  {
    id: 2,
    name: '비명지르는 여인',
    location: '현대미술관 외벽',
    description: '현대미술관 외벽 난간에 서 있는 여인. 그녀의 비명을 듣는 순간, 당신은 이미 허공을 딛고 있다.',
    danger: '위험',
    image: ghost2,
    x: 70,
    y: 35
  },
  {
    id: 3,
    name: '쌍둥이',
    location: '대나무 숲길',
    description: '대나무 숲길에 나타나는 어린 남매. 길을 묻는 척하며 사람들을 숲의 미궁 속으로 유인한다.',
    danger: '위험',
    image: ghost3,
    x: 50,
    y: 50
  },
  {
    id: 4,
    name: '귀문',
    location: '캠퍼스 중앙',
    description: '캠퍼스 중앙에 열리는 저승의 문. 그곳에서 뿜어져 나오는 냉기는 산 사람의 생기를 앗아간다.',
    danger: '위험',
    image: ghost4,
    x: 35,
    y: 25
  },
  {
    id: 5,
    name: '대학원생',
    location: 'IDAS 복도',
    description: 'IDAS 복도를 배회하는 지친 영혼. "교수님..." 이라고 중얼거리며 밤새 복도를 걸어다닌다.',
    danger: '경계',
    image: ghost5,
    x: 60,
    y: 70
  },
  {
    id: 6,
    name: '연구원의 망령',
    location: '211호 연구실',
    description: '211호 연구실에서 실험 중 사고로 목숨을 잃었다. 여전히 연구실을 나가지 못하고 누군가를 기다리고 있다.',
    danger: '극도로 위험',
    image: ghost6,
    x: 80,
    y: 55
  }
];

export function HongdaeMap() {
  const [selectedGhost, setSelectedGhost] = useState<Ghost | null>(null);
  const [hoveredGhost, setHoveredGhost] = useState<number | null>(null);

  const getDangerColor = (danger: string) => {
    switch (danger) {
      case '극도로 위험':
        return 'text-red-600 border-red-600';
      case '위험':
        return 'text-orange-500 border-orange-500';
      default:
        return 'text-yellow-500 border-yellow-500';
    }
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise-map" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 text-red-600 justify-center mb-6">
            <Waves className="w-6 h-6 animate-pulse" />
            <span className="text-sm tracking-widest uppercase">Hunting Grounds</span>
            <Waves className="w-6 h-6 scale-x-[-1] animate-pulse" />
          </div>
          <h2 className="text-5xl mb-6 relative horror-title">
            홍대던전
            {/* Glitch layers */}
            <span className="absolute inset-0 text-cyan-500 opacity-0 animate-title-glitch-1">
              홍대던전
            </span>
            <span className="absolute inset-0 text-red-600 opacity-0 animate-title-glitch-2">
              홍대던전
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            평범한 홍대 캠퍼스가 영안을 키는 순간 귀신들의 영역으로 변한다.<br />
            당신의 스마트폰으로 숨겨진 존재들을 찾아내라.
          </p>
        </div>

        {/* Map container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Map background */}
          <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 overflow-hidden">
            {/* Map image */}
            <ImageWithFallback 
              src={hongdaeMapImg}
              alt="Hongdae map"
              className="w-full h-full object-cover opacity-70"
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-red-950/20 to-black/60" />

            {/* Grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(139, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />

            {/* Ghost markers */}
            {ghosts.map((ghost) => (
              <div
                key={ghost.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${ghost.x}%`, top: `${ghost.y}%` }}
                onMouseEnter={() => {
                  setHoveredGhost(ghost.id);
                  setSelectedGhost(ghost);
                }}
                onMouseLeave={() => {
                  setHoveredGhost(null);
                }}
              >
                {/* Pulse ring */}
                <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="w-full h-full rounded-full bg-red-600/30 animate-ping" />
                </div>

                {/* Marker pin */}
                <div className={`relative z-10 transition-all duration-300 ${
                  hoveredGhost === ghost.id ? 'scale-125' : 'scale-100'
                }`}>
                  <MapPin className="w-8 h-8 text-red-600 fill-red-900 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Skull className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Location label */}
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                  hoveredGhost === ghost.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="bg-black/90 border border-red-600/50 px-3 py-1 text-xs text-red-500">
                    {ghost.location}
                  </div>
                </div>
              </div>
            ))}

            {/* Eerie glow effects */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Ghost info popup */}
          {selectedGhost && hoveredGhost && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 pointer-events-none">
              <div className="bg-black/95 border-2 border-red-600 p-6 backdrop-blur-sm animate-fade-in">
                {/* Blood drip decoration */}
                <div className="absolute top-0 left-8 w-1 h-4 bg-gradient-to-b from-red-900 to-transparent" />
                <div className="absolute top-0 right-12 w-0.5 h-3 bg-gradient-to-b from-red-800 to-transparent" />

                <div className="flex gap-6">
                  {/* Ghost image */}
                  <div className="w-32 h-32 flex-shrink-0 relative overflow-hidden border border-red-900">
                    <ImageWithFallback 
                      src={selectedGhost.image}
                      alt={selectedGhost.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <Eye className="absolute bottom-2 right-2 w-6 h-6 text-red-600 animate-pulse" />
                  </div>

                  {/* Ghost info */}
                  <div className="flex-1">
                    <h3 className="text-2xl text-red-500 mb-2">{selectedGhost.name}</h3>
                    <div className={`inline-block px-3 py-1 border text-xs mb-3 ${getDangerColor(selectedGhost.danger)}`}>
                      {selectedGhost.danger}
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      <span className="text-red-600">위치:</span> {selectedGhost.location}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {selectedGhost.description}
                    </p>
                  </div>
                </div>

                {/* Glitch effect */}
                <div className="absolute inset-0 border-2 border-cyan-500/30 pointer-events-none animate-glitch-border" />
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 p-6 text-center">
            <div className="text-4xl text-red-600 mb-2">6</div>
            <div className="text-sm text-gray-500">발견된 귀신</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 p-6 text-center">
            <div className="text-4xl text-red-600 mb-2">12</div>
            <div className="text-sm text-gray-500">숨겨진 장소</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 p-6 text-center">
            <div className="text-4xl text-red-600 mb-2">∞</div>
            <div className="text-sm text-gray-500">공포의 순간</div>
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
        
        .bg-noise-map {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        @keyframes glitch-border {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; transform: translate(2px, -2px); }
        }

        .animate-glitch-border {
          animation: glitch-border 3s infinite;
        }
      `}</style>
    </section>
  );
}
