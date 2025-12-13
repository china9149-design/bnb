import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Send, MessageCircle } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-t from-bnb-yellow/10 to-bnb-black">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white">
            JOIN THE <span className="text-bnb-yellow">BOSSES</span>
          </h2>
          <p className="text-xl text-bnb-gray mb-12">
            The most normal community in crypto is waiting for you. <br />
            Come say hello, share a meme, and be part of the movement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 hover:scale-105 transition-all border border-gray-800"
            >
              <Twitter fill="currentColor" size={24} />
              Twitter
            </a>
            <a 
              href="https://telegram.org" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-[#229ED9] text-white rounded-xl font-bold text-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-[#229ED9]/20"
            >
              <Send fill="currentColor" size={24} />
              Telegram
            </a>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-[#5865F2] text-white rounded-xl font-bold text-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg shadow-[#5865F2]/20"
            >
              <MessageCircle fill="currentColor" size={24} />
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};