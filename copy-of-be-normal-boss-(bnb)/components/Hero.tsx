import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { BossMascot } from './BossMascot';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      
      {/* Background Elements - Kept static blurred blobs for deep depth behind particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-bnb-yellow/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-bnb-yellow/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
            
            {/* Mascot Display - Mobile: Top */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 block md:hidden"
            >
                <BossMascot className="w-40 h-40" />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block"
            >
            <a 
                href="https://four.meme/token/0x7e151cef092ec9870d020cb490e2b245c4174444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-2 rounded-full bg-[#1E2329]/80 backdrop-blur border border-bnb-yellow/30 hover:border-bnb-yellow text-white text-sm font-semibold tracking-wider uppercase transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(240,185,11,0.1)] hover:shadow-[0_0_30px_rgba(240,185,11,0.3)]"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                Fair Launch on <span className="text-bnb-yellow font-bold">four.meme</span>
            </a>
            </motion.div>

            <div className="relative w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 relative z-10 whitespace-nowrap"
                >
                    BE NORMAL{' '}
                    <span 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-bnb-yellow via-[#FFF5C2] to-bnb-yellow bg-[length:200%_auto] animate-[shine_3s_linear_infinite]"
                      style={{ textShadow: "0 0 40px rgba(240,185,11,0.3)" }}
                    >
                      BOSS
                    </span>
                </motion.h1>

                {/* Desktop Mascot Floating */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="hidden md:block absolute -right-32 top-10 z-0 pointer-events-none opacity-50 lg:opacity-100"
                >
                     <BossMascot className="w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl" />
                </motion.div>
            </div>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-bnb-gray max-w-2xl mx-auto mb-10 leading-relaxed"
            >
            A normal meme coin in an abnormal crypto world. 
            Launched fairly on four.meme. Just be a Boss.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
            <a
                href="https://four.meme/token/0x7e151cef092ec9870d020cb490e2b245c4174444"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-bnb-yellow text-bnb-black font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center shadow-[0_0_20px_rgba(240,185,11,0.4)] hover:shadow-[0_0_40px_rgba(240,185,11,0.6)] hover:-translate-y-1"
            >
                Buy on four.meme
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
                href="https://bscscan.com/token/0x7e151cef092ec9870d020cb490e2b245c4174444"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#1E2329]/50 backdrop-blur border-2 border-bnb-dark hover:border-bnb-yellow text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center hover:-translate-y-1"
            >
                View on BSC
                <ExternalLink className="w-5 h-5 text-bnb-gray group-hover:text-bnb-yellow transition-colors" />
            </a>
            </motion.div>

            {/* Ticker Display */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-16 border-t border-gray-800/50 pt-8 inline-block w-full max-w-4xl backdrop-blur-sm bg-bnb-black/30 rounded-2xl p-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <p className="text-bnb-gray text-sm uppercase tracking-widest mb-1">Ticker</p>
                        <p className="text-3xl font-bold text-white">$BNB</p>
                    </div>
                    <div>
                        <p className="text-bnb-gray text-sm uppercase tracking-widest mb-1">Platform</p>
                        <p className="text-3xl font-bold text-bnb-yellow">four.meme</p>
                    </div>
                    <div>
                        <p className="text-bnb-gray text-sm uppercase tracking-widest mb-1">Vibe</p>
                        <p className="text-3xl font-bold text-white">BOSS</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
