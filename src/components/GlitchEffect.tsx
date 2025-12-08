import React from 'react';

export function GlitchEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div 
        className="absolute inset-0 bg-red-600 opacity-20 animate-pulse"
        style={{ 
          animation: 'glitch 0.2s linear',
          mixBlendMode: 'screen'
        }}
      />
      <style>{`
        @keyframes glitch {
          0%, 100% { 
            transform: translate(0); 
            opacity: 0.2;
          }
          20% { 
            transform: translate(-2px, 2px); 
            opacity: 0.4;
          }
          40% { 
            transform: translate(2px, -2px); 
            opacity: 0.3;
          }
          60% { 
            transform: translate(-2px, -2px); 
            opacity: 0.4;
          }
          80% { 
            transform: translate(2px, 2px); 
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
