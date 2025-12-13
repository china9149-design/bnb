import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    title: "Be Normal",
    items: ["Launch on PancakeSwap", "Website Release", "Community Formation", "Vibe Check (Passed)"]
  },
  {
    phase: "Phase 2",
    title: "Boss Moves",
    items: ["CoinGecko Listing", "CMC Listing", "1,000 Boss Holders", "Trending on Twitter"]
  },
  {
    phase: "Phase 3",
    title: "Normal on Binance? 👀",
    items: ["Viral Marketing Campaigns", "Strategic Partnerships", "10,000 Boss Holders", "Notice us CZ"]
  },
  {
    phase: "Phase 4",
    title: "Legendary Boss",
    items: ["Global Domination", "Establish 'Normal' as a Lifestyle", "Merch Store", "Top Tier Exchange Listings"]
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-bnb-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">ROADMAP</h2>
          <p className="text-xl text-bnb-gray">The path to becoming the ultimate Boss.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-800 hidden md:block" />

            <div className="space-y-12 relative">
                {phases.map((phase, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Empty side for spacing on desktop */}
                        <div className="hidden md:block w-1/2" />
                        
                        {/* Center Point */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-bnb-yellow rounded-full border-4 border-bnb-black z-10 hidden md:flex items-center justify-center">
                            <div className="w-2 h-2 bg-black rounded-full" />
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-1/2 md:px-12">
                            <div className="bg-[#15191E] p-8 rounded-2xl border border-gray-800 hover:border-bnb-yellow transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white group-hover:opacity-20 transition-opacity select-none">
                                    {index + 1}
                                </div>
                                <span className="text-bnb-yellow font-bold tracking-wider uppercase mb-2 block">{phase.phase}</span>
                                <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                                <ul className="space-y-2">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-bnb-gray">
                                            <span className="mr-2 text-bnb-yellow">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};