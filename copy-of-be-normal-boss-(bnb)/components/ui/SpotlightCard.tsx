import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", delay = 0 }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`relative overflow-hidden rounded-2xl border border-gray-800 bg-[#15191E] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(240, 185, 11, 0.1), transparent 40%)`,
        }}
      />
      <div
         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
         style={{
           opacity,
           background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(240, 185, 11, 0.4), transparent 40%)`,
           zIndex: 1,
           maskImage: "linear-gradient(black, black)",
           WebkitMaskImage: "linear-gradient(black, black)",
           maskComposite: "exclude", 
           WebkitMaskComposite: "xor",
           // This approximates a border glow by masking content
           padding: "1px" 
         }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};