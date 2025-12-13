import React from 'react';
import { motion } from 'framer-motion';

export const BossLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#F0B90B"/>
    {/* Glasses */}
    <path d="M15 40H48V60C48 60 38 60 35.5 60C33 60 23 60 15 60V40Z" fill="#0B0E11"/>
    <path d="M52 40H85V60C85 60 75 60 72.5 60C70 60 60 60 52 60V40Z" fill="#0B0E11"/>
    <rect x="45" y="45" width="10" height="5" fill="#0B0E11"/>
    {/* Smirk */}
    <path d="M35 75Q50 82 65 72" stroke="#0B0E11" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

export const BossMascot = ({ className = "w-64 h-64" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 200 240" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 10 }}
    animate={{ y: 0 }}
    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "easeInOut" }}
  >
     {/* Legs */}
    <path d="M80 180 V230" stroke="#0B0E11" strokeWidth="16" strokeLinecap="round"/>
    <path d="M120 180 V230" stroke="#0B0E11" strokeWidth="16" strokeLinecap="round"/>
    
    {/* Body (Suit) */}
    <rect x="50" y="110" width="100" height="80" rx="10" fill="#1E2329"/>
    
    {/* White Shirt Collar area */}
    <path d="M100 110 L85 140 H115 L100 110 Z" fill="#EAECEF"/>
    
    {/* Tie */}
    <path d="M100 140 L92 165 L100 175 L108 165 L100 140 Z" fill="#F0B90B"/>
    
    {/* Arms (Crossed/Boss Pose) */}
    <path d="M50 120 C30 140 30 170 60 170 H140 C170 170 170 140 150 120" stroke="#1E2329" strokeWidth="14" strokeLinecap="round"/>

    {/* Head Shadow */}
    <ellipse cx="100" cy="115" rx="45" ry="5" fill="#000000" fillOpacity="0.2"/>

    {/* Head */}
    <rect x="40" y="10" width="120" height="110" rx="25" fill="#F0B90B"/>
    
    {/* Glasses */}
    <rect x="45" y="45" width="50" height="30" rx="8" fill="#0B0E11"/>
    <rect x="105" y="45" width="50" height="30" rx="8" fill="#0B0E11"/>
    <rect x="90" y="55" width="20" height="6" fill="#0B0E11"/>
    
    {/* Shine on glasses */}
    <path d="M50 50 L65 50 L55 65 Z" fill="white" fillOpacity="0.2"/>
    <path d="M110 50 L125 50 L115 65 Z" fill="white" fillOpacity="0.2"/>

    {/* Mouth (Confident Smirk) */}
    <path d="M70 90 Q100 100 130 85" stroke="#0B0E11" strokeWidth="6" strokeLinecap="round"/>
  </motion.svg>
);

export const BossThumbsUp = ({ className = "w-64 h-64" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 200 240" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: -5 }}
    animate={{ rotate: 5 }}
    transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "easeInOut" }}
  >
    {/* Legs */}
    <path d="M80 180 V230" stroke="#0B0E11" strokeWidth="16" strokeLinecap="round"/>
    <path d="M120 180 V230" stroke="#0B0E11" strokeWidth="16" strokeLinecap="round"/>

    {/* Right Arm (Down) */}
    <path d="M140 130 L160 160" stroke="#1E2329" strokeWidth="14" strokeLinecap="round"/>

    {/* Left Arm (Thumbs Up) */}
    <path d="M60 130 L40 110" stroke="#1E2329" strokeWidth="14" strokeLinecap="round"/>
    {/* Thumb Hand */}
    <circle cx="35" cy="105" r="12" fill="#F0B90B" />
    <path d="M35 105 L30 90" stroke="#F0B90B" strokeWidth="8" strokeLinecap="round"/>

    {/* Body (Suit) */}
    <rect x="50" y="110" width="100" height="80" rx="10" fill="#1E2329"/>
    <path d="M100 110 L85 140 H115 L100 110 Z" fill="#EAECEF"/>
    <path d="M100 140 L92 165 L100 175 L108 165 L100 140 Z" fill="#F0B90B"/>

    {/* Head */}
    <rect x="40" y="10" width="120" height="110" rx="25" fill="#F0B90B"/>
    <rect x="45" y="45" width="50" height="30" rx="8" fill="#0B0E11"/>
    <rect x="105" y="45" width="50" height="30" rx="8" fill="#0B0E11"/>
    <rect x="90" y="55" width="20" height="6" fill="#0B0E11"/>
    <path d="M50 50 L65 50 L55 65 Z" fill="white" fillOpacity="0.2"/>
    <path d="M110 50 L125 50 L115 65 Z" fill="white" fillOpacity="0.2"/>
    <path d="M70 90 Q100 105 130 90" stroke="#0B0E11" strokeWidth="6" strokeLinecap="round"/>
  </motion.svg>
);
