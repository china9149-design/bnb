import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, ExternalLink, Wallet } from 'lucide-react';
import { BossLogo } from './BossMascot';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string | null;
  balance: string | null;
  walletType: string | null;
  onDisconnect: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ 
  isOpen, 
  onClose, 
  address, 
  balance, 
  walletType,
  onDisconnect 
}) => {
  const shortenAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#15191E] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header Background */}
            <div className="h-24 bg-bnb-yellow/10 relative overflow-hidden">
               <div className="absolute -right-4 -top-4 opacity-10">
                   <BossLogo className="w-32 h-32" />
               </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 -mt-10 relative">
                {/* Avatar */}
                <div className="w-20 h-20 bg-bnb-black rounded-2xl border-4 border-[#15191E] flex items-center justify-center overflow-hidden shadow-lg mb-4">
                     <div className="w-full h-full bg-gradient-to-br from-bnb-yellow to-orange-500 flex items-center justify-center">
                        <Wallet className="text-bnb-black w-8 h-8" />
                     </div>
                </div>

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">My Wallet</h3>
                        <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-lg border border-gray-800">
                             <div className={`w-2 h-2 rounded-full ${address ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-gray-500'}`} />
                             <span className="text-sm font-mono text-bnb-gray">{address ? shortenAddress(address) : 'Not Connected'}</span>
                             <button onClick={copyToClipboard} className="text-gray-500 hover:text-white transition-colors ml-1">
                                <Copy size={14} />
                             </button>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Balances */}
                <div className="space-y-4 mb-8">
                    <p className="text-xs uppercase tracking-widest text-bnb-gray font-semibold">Your Assets</p>
                    
                    {/* Native BNB */}
                    <div className="flex items-center justify-between p-4 bg-black/40 border border-gray-800 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#F0B90B] flex items-center justify-center text-bnb-black font-bold text-xs">
                                BNB
                            </div>
                            <div>
                                <p className="font-bold text-white">BNB Chain</p>
                                <p className="text-xs text-bnb-gray">Native Token</p>
                            </div>
                        </div>
                        <div className="text-right">
                             <p className="font-bold text-white">{balance || '0.00'}</p>
                             <p className="text-xs text-bnb-gray">BNB</p>
                        </div>
                    </div>

                    {/* Boss Token (Mock/Placeholder until purchase) */}
                    <div className="flex items-center justify-between p-4 bg-bnb-yellow/5 border border-bnb-yellow/30 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-bnb-yellow/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-bnb-black border border-bnb-yellow p-1">
                                <BossLogo className="w-full h-full" />
                            </div>
                            <div>
                                <p className="font-bold text-white">Be Normal Boss</p>
                                <p className="text-xs text-bnb-gray">Meme Coin</p>
                            </div>
                        </div>
                        <div className="text-right relative z-10">
                             <p className="font-bold text-white">0.00</p>
                             <p className="text-xs text-bnb-yellow">BOSS</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4">
                    <a 
                        href={`https://bscscan.com/address/${address}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                        <ExternalLink size={16} />
                        View on BSC
                    </a>
                    <button 
                        onClick={onDisconnect}
                        className="py-3 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl text-sm font-semibold transition-colors"
                    >
                        Disconnect
                    </button>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};