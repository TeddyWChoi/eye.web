import React from 'react';
import { Ghost, Hand, Eye, AlertTriangle } from 'lucide-react';

export function HorrorElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating Ghost */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce duration-[3000ms]">
        <Ghost className="w-12 h-12 text-gray-500" />
      </div>

      {/* Creepy Hand */}
      <div className="absolute bottom-1/3 right-10 opacity-10 rotate-45">
        <Hand className="w-24 h-24 text-red-900" />
      </div>

      {/* Watching Eye - Removed */}
      {/* <div className="absolute top-1/2 left-1/4 opacity-10 animate-pulse">
        <Eye className="w-16 h-16 text-red-900" />
      </div> */}

      {/* Warning Sign */}
      <div className="absolute top-10 right-20 opacity-20 rotate-12">
        <AlertTriangle className="w-8 h-8 text-red-800" />
      </div>

      {/* Random Fog/Noise elements could go here */}
    </div>
  );
}
