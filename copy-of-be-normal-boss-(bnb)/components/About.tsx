import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { BossThumbsUp } from './BossMascot';
import { SpotlightCard } from './ui/SpotlightCard';

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <SpotlightCard delay={delay} className="p-8 h-full">
    <div className="w-12 h-12 bg-bnb-yellow/10 rounded-lg flex items-center justify-center text-bnb-yellow mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-bnb-gray leading-relaxed">{desc}</p>
  </SpotlightCard>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why be abnormal when you can <span className="text-bnb-yellow">Be Normal</span>?
            </h2>
            <p className="text-lg text-bnb-gray mb-6 leading-relaxed">
              In a crypto world full of dogs, frogs, hats, and complicated DeFi protocols that require a PhD to understand, we decided to do something revolutionary: 
              <strong className="text-white"> Be Normal.</strong>
            </p>
            <p className="text-lg text-bnb-gray mb-8 leading-relaxed">
              We started on <span className="text-bnb-yellow font-bold">four.meme</span> because that's what normal bosses do. Fair launch, no team allocation, no funny business. 
              We are BNB (the token), on BNB (the chain). Confused? Good.
            </p>
            
            <div className="flex items-center gap-6">
                 <div className="hidden sm:block">
                     <BossThumbsUp className="w-32 h-32 drop-shadow-lg" />
                 </div>
                 <div className="p-6 bg-bnb-yellow/5 border-l-4 border-bnb-yellow rounded-r-lg flex-1 backdrop-blur-sm">
                    <p className="text-white italic">
                        "Funds are safu. Vibes are normal. Boss moves only."
                    </p>
                 </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
             <FeatureCard 
                icon={<TrendingUp size={24} />}
                title="Launched on four.meme"
                desc="A fair launch mechanism that ensures everyone gets a fair shot. No sniper bots eating all the supply in block 0."
                delay={0.2}
             />
             <FeatureCard 
                icon={<ShieldCheck size={24} />}
                title="Audited by Normies"
                desc="The contract is renounced. Liquidity is managed by the four.meme bonding curve. It's safe."
                delay={0.4}
             />
             <FeatureCard 
                icon={<Sparkles size={24} />}
                title="Meme Purity"
                desc="No utility. No staking dApp that gets hacked. Just a token that sits in your wallet and looks good in yellow."
                delay={0.6}
             />
          </div>

        </div>
      </div>
    </section>
  );
};