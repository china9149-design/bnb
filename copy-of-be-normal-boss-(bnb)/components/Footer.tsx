import React from 'react';
import { BossLogo } from './BossMascot';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bnb-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 group-hover:rotate-12 transition-transform">
             <BossLogo className="w-full h-full" />
          </div>
          <span className="font-bold text-lg text-white">BE NORMAL BOSS</span>
        </div>
        
        <div className="text-bnb-gray text-sm text-center md:text-right">
          <p className="mb-2">© {new Date().getFullYear()} Be Normal Boss. All rights reserved.</p>
          <p className="opacity-60 text-xs max-w-md">
            Disclaimer: This is a meme coin for entertainment purposes only. 
            There is no intrinsic value or expectation of financial return. 
            Do not risk money you cannot afford to lose. Be normal, stay safe.
          </p>
        </div>
      </div>
    </footer>
  );
};