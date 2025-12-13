import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Coins, Heart } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const Feature = ({ icon, title, text, index }: { icon: React.ReactNode, title: string, text: string, index: number }) => (
  <SpotlightCard delay={index * 0.1} className="flex flex-col items-center text-center p-8 group">
    <div className="w-16 h-16 bg-bnb-black border border-gray-700 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:border-bnb-yellow group-hover:text-bnb-yellow transition-all duration-300 shadow-lg">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-bnb-gray">{text}</p>
  </SpotlightCard>
);

export const WhyBNB: React.FC = () => {
  return (
    <section id="why-bnb" className="py-24 bg-[#050709]/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">WHY BNB CHAIN?</h2>
          <p className="text-xl text-bnb-gray">Because Ethereum gas fees are not normal.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <Feature 
            index={1}
            icon={<Zap size={32} />}
            title="Lighting Fast"
            text="Transactions confirm faster than you can say 'Connect Wallet'. Normal bosses don't like to wait."
          />
          <Feature 
            index={2}
            icon={<Coins size={32} />}
            title="Low Fees"
            text="Save your money for more BNB tokens instead of burning it on gas. That's just common sense."
          />
          <Feature 
            index={3}
            icon={<Heart size={32} />}
            title="Binance Vibes"
            text="We pay homage to the ecosystem that brought crypto to the masses. Yellow is the new green."
          />
        </div>
      </div>
    </section>
  );
};