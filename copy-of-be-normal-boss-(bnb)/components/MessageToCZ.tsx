import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { BossLogo } from './BossMascot';

export const MessageToCZ: React.FC = () => {
  return (
    <section className="py-24 bg-bnb-dark border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-bnb-black p-12 rounded-3xl border border-bnb-yellow/20"
        >
          <Quote className="absolute top-8 left-8 text-bnb-yellow/20 w-16 h-16" />
          
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-white relative z-10">
            A Message to CZ 
            <span className="text-bnb-yellow text-4xl ml-2">4</span>
          </h2>
          
          <div className="space-y-6 text-lg text-bnb-gray leading-relaxed relative z-10 font-medium">
            <p>
              Hey Boss. We know you like things simple. We know you like things fast. 
              We built this token to honor the efficiency of the chain you championed.
            </p>
            <p>
              We promise to be normal. We promise to keep building. We promise not to ask "When Binance?".
              (Okay, maybe just once in phase 3).
            </p>
            <p className="text-white font-bold">
              Stay safe. Stay SAIFU. Stay Boss.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center items-center gap-4">
             <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden border-2 border-bnb-yellow">
                <div className="w-full h-full bg-bnb-black flex items-center justify-center p-1">
                    <BossLogo className="w-full h-full" />
                </div>
             </div>
             <div className="text-left">
                <p className="text-white font-bold">The Be Normal Boss Team</p>
                <p className="text-bnb-gray text-sm">Community Contributors</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};