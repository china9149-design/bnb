import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Lock, Ban } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 relative overflow-hidden">
        {/* Decorative background logo */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none translate-x-1/3">
            <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor" className="text-bnb-yellow">
                <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0ZM50 18.3L21.7 34.6L37.1 43.5L50 36.1L62.9 43.5L78.3 34.6L50 18.3ZM50 81.7L78.3 65.4L62.9 56.5L50 63.9L37.1 56.5L21.7 65.4L50 81.7ZM20 41.7V58.3L34.6 50V41.7L20 41.7ZM80 41.7L65.4 50V58.3L80 58.3V41.7Z" />
            </svg>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">TOKENOMICS</h2>
          <p className="text-xl text-bnb-gray max-w-2xl mx-auto">
            Transparent. Simple. Launched via four.meme. <br />
            Exactly what you expect from a Normal Boss.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Token Name', value: 'Be Normal Boss' },
            { label: 'Ticker', value: '$BNB', highlight: true },
            { label: 'Platform', value: 'four.meme' },
            { label: 'Network', value: 'BSC (BEP-20)' },
          ].map((item, i) => (
            <SpotlightCard
              key={i}
              delay={i * 0.1}
              className={`p-6 ${item.highlight ? 'bg-bnb-yellow/10 border-bnb-yellow' : ''}`}
            >
              <h4 className={`text-sm uppercase tracking-wider mb-2 ${item.highlight ? 'text-bnb-yellow' : 'text-bnb-gray'}`}>
                {item.label}
              </h4>
              <p className={`text-2xl font-bold truncate ${item.highlight ? 'text-bnb-yellow' : 'text-white'}`}>{item.value}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 bg-bnb-yellow rounded-full flex items-center justify-center text-bnb-black mb-6 shadow-lg shadow-bnb-yellow/20">
                    <PieChart size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Launch</h3>
                <p className="text-bnb-gray text-sm">Launched on four.meme bonding curve. 100% fair distribution with no pre-mine.</p>
            </SpotlightCard>

            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 bg-bnb-yellow rounded-full flex items-center justify-center text-bnb-black mb-6 shadow-lg shadow-bnb-yellow/20">
                    <Lock size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Auto-Liquidity</h3>
                <p className="text-bnb-gray text-sm">Upon graduating the bonding curve, liquidity is automatically seeded and locked on PancakeSwap.</p>
            </SpotlightCard>

            <SpotlightCard className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 bg-bnb-yellow rounded-full flex items-center justify-center text-bnb-black mb-6 shadow-lg shadow-bnb-yellow/20">
                    <Ban size={28} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ownership Renounced</h3>
                <p className="text-bnb-gray text-sm">The contract is immutable. No minting, no blacklisting, no changing taxes. Purely decentralized.</p>
            </SpotlightCard>
        </div>
      </div>
    </section>
  );
};