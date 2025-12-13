import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wallet, ArrowRight } from 'lucide-react';

// Icons as simple SVGs
const MetaMaskIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path fill="#E17726" d="M29.67 11.23L27.1 2.06 16 9.87 4.9 2.06 2.33 11.23 1.15 15.68l.2.66L16 28.52l14.65-12.18.2-.66z"/>
    <path fill="#E27625" d="M27.1 2.06L24.9 9.9l4.77 1.33zM4.9 2.06l2.2 7.84L2.33 11.23z"/>
    <path fill="#E27625" d="M10.49 14.68L16 18.91l5.51-4.23L16 9.87z"/>
  </svg>
);

const BinanceWalletIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
    <path fill="#F0B90B" d="M16 4l-4.5 4.5L16 13l4.5-4.5L16 4zm-9 9l-4.5 4.5L7 22l4.5-4.5L7 13zm18 0l-4.5 4.5 4.5 4.5 4.5-4.5-4.5-4.5zM16 19l-4.5 4.5 4.5 4.5 4.5-4.5L16 19z"/>
  </svg>
);

const RabbyIcon = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8">
     <rect width="32" height="32" rx="6" fill="#5D80F1"/>
     <path d="M9 16c0-4 3-7 7-7s7 3 7 7-3 7-7 7-7-3-7-7z" fill="white"/>
  </svg>
);

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletName: string) => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#15191E] border border-gray-800 rounded-2xl p-6 shadow-2xl shadow-bnb-yellow/5 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Wallet className="text-bnb-yellow" size={24} />
                Connect Wallet
              </h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-800 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Wallet Options */}
            <div className="space-y-3">
              {[
                { name: 'MetaMask', icon: <MetaMaskIcon />, desc: 'Connect to your MetaMask Wallet' },
                { name: 'Rabby Wallet', icon: <RabbyIcon />, desc: 'The game-changing wallet for DeFi' },
                { name: 'Binance Wallet', icon: <BinanceWalletIcon />, desc: 'Binance Web3 Wallet' },
              ].map((wallet) => (
                  <button
                    key={wallet.name}
                    onClick={() => onConnect(wallet.name)}
                    className="w-full flex items-center justify-between p-4 bg-bnb-black/50 border border-gray-800 rounded-xl hover:bg-bnb-yellow/5 hover:border-bnb-yellow transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                          {wallet.icon}
                      </div>
                      <div>
                          <span className="font-bold text-white block">{wallet.name}</span>
                          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{wallet.desc}</span>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-gray-600 group-hover:text-bnb-yellow transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                  </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                <p className="text-xs text-bnb-gray">
                    New to crypto? <a href="#" className="text-bnb-yellow hover:underline">Learn how to connect</a>
                </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};