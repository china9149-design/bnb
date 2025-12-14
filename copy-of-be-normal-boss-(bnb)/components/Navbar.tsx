import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet, ChevronDown } from 'lucide-react';
import { WalletModal } from './WalletModal';
import { ProfileModal } from './ProfileModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Wallet State
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [bnbBalance, setBnbBalance] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check if previously connected
    const savedAddress = localStorage.getItem('walletAddress');
    const savedWallet = localStorage.getItem('connectedWallet');
    if (savedAddress && savedWallet) {
        setWalletAddress(savedAddress);
        setConnectedWallet(savedWallet);
        fetchBalance(savedAddress, savedWallet);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProvider = (walletName: string) => {
    const w = window as any;
    if (walletName === 'Binance Wallet') {
        return w.BinanceChain;
    }
    // For Rabby and MetaMask, they both use window.ethereum
    // Rabby sets isRabby = true
    // MetaMask sets isMetaMask = true
    if (w.ethereum) {
       return w.ethereum;
    }
    return null;
  };

  const fetchBalance = async (address: string, walletName: string) => {
      try {
          const provider = getProvider(walletName);
          if (provider && provider.request) {
              // Get Balance in Wei
              const balanceHex = await provider.request({ 
                  method: 'eth_getBalance', 
                  params: [address, 'latest'] 
              });
              // Convert to BNB (Wei to Eth)
              const balanceWei = parseInt(balanceHex, 16);
              const balanceEth = (balanceWei / 1e18).toFixed(4);
              setBnbBalance(balanceEth);
          }
      } catch (error) {
          console.error("Error fetching balance:", error);
          setBnbBalance('0.00');
      }
  };

  const handleConnect = async (walletName: string) => {
    const provider = getProvider(walletName);

    if (!provider) {
        alert(`${walletName} is not installed!`);
        return;
    }

    try {
        let accounts = [];
        // Binance Chain Wallet uses a slightly different API sometimes, but mostly standard EIP-1193 now
        if (walletName === 'Binance Wallet' && provider.request) {
            accounts = await provider.request({ method: 'eth_requestAccounts' });
        } else if (provider.request) {
            accounts = await provider.request({ method: 'eth_requestAccounts' });
        } else if (provider.enable) {
            // Legacy support
            accounts = await provider.enable();
        }

        if (accounts && accounts.length > 0) {
            const address = accounts[0];
            setWalletAddress(address);
            setConnectedWallet(walletName);
            setIsWalletModalOpen(false);
            
            // Persist
            localStorage.setItem('walletAddress', address);
            localStorage.setItem('connectedWallet', walletName);

            // Fetch Balance
            fetchBalance(address, walletName);

            // Listen for account changes
            if (provider.on) {
                provider.on('accountsChanged', (newAccounts: string[]) => {
                    if (newAccounts.length === 0) {
                        handleDisconnect();
                    } else {
                        setWalletAddress(newAccounts[0]);
                        fetchBalance(newAccounts[0], walletName);
                    }
                });
                provider.on('chainChanged', () => {
                    window.location.reload();
                });
            }
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("Failed to connect wallet. See console for details.");
    }
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    setWalletAddress(null);
    setBnbBalance(null);
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('connectedWallet');
    setIsProfileModalOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why BSC', href: '#why-bnb' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  const shortenAddress = (addr: string) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <>
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bnb-black/90 backdrop-blur-md border-b border-bnb-dark py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300">
            <img
                   src="/logobnb.png"
                   alt="Be Normal Boss Logo"
                   className="w-full h-full object-contain"
            />

          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">BE NORMAL <span className="text-bnb-yellow">BOSS</span></span>
          <span className="font-bold text-xl tracking-tight sm:hidden text-bnb-yellow">BNB</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-bnb-light hover:text-bnb-yellow text-sm font-semibold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
             {/* Buy Button */}
            <a 
                href="#community"
                className="px-5 py-2.5 bg-bnb-dark border border-gray-700 text-white font-bold rounded-lg hover:border-bnb-yellow transition-all duration-300 text-sm"
            >
                Buy $BNB
            </a>

            {/* Connect Wallet Button */}
            {connectedWallet && walletAddress ? (
                <button 
                    onClick={() => setIsProfileModalOpen(true)}
                    className="px-5 py-2.5 bg-[#15191E] border border-gray-700 hover:border-bnb-yellow text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 group"
                >
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-sm">{shortenAddress(walletAddress)}</span>
                    <span className="bg-bnb-yellow text-bnb-black text-xs px-1.5 py-0.5 rounded font-bold group-hover:bg-white transition-colors">
                        {bnbBalance ? `${bnbBalance} BNB` : '...'}
                    </span>
                </button>
            ) : (
                <button 
                    onClick={() => setIsWalletModalOpen(true)}
                    className="px-5 py-2.5 bg-bnb-yellow text-bnb-black font-bold rounded-lg hover:bg-white transition-colors duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(240,185,11,0.3)]"
                >
                    <Wallet size={18} />
                    Connect Wallet
                </button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Connect Button (Mini) */}
             {!connectedWallet && (
                 <button 
                    onClick={() => setIsWalletModalOpen(true)}
                    className="p-2 bg-bnb-yellow text-bnb-black rounded-lg"
                 >
                     <Wallet size={20} />
                 </button>
             )}
             
             {connectedWallet && (
                 <button 
                    onClick={() => setIsProfileModalOpen(true)}
                    className="p-2 bg-bnb-dark border border-gray-700 rounded-lg text-white"
                 >
                     <div className="w-5 h-5 flex items-center justify-center">
                         <Wallet size={20} />
                     </div>
                 </button>
             )}

            <button 
            className="text-bnb-yellow"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bnb-dark border-t border-gray-800 absolute w-full shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-bnb-light hover:text-bnb-yellow text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-px bg-gray-800 my-2" />
              
              <a 
                href="#community"
                className="w-full text-center py-3 bg-bnb-dark border border-gray-700 text-white font-bold rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Buy $BNB
              </a>

               {connectedWallet ? (
                   <button
                        onClick={() => {
                            setIsOpen(false);
                            setIsProfileModalOpen(true);
                        }}
                        className="w-full py-3 bg-gray-800 border border-gray-700 text-white font-bold rounded-lg flex items-center justify-center gap-2"
                   >
                        <Wallet size={18} />
                        View Profile ({bnbBalance} BNB)
                   </button>
               ) : (
                    <button 
                        onClick={() => {
                            setIsOpen(false);
                            setIsWalletModalOpen(true);
                        }}
                        className="w-full py-3 bg-bnb-yellow text-bnb-black font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"
                    >
                        <Wallet size={20} />
                        Connect Wallet
                    </button>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={() => setIsWalletModalOpen(false)} 
        onConnect={handleConnect}
    />

    <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        address={walletAddress}
        balance={bnbBalance}
        walletType={connectedWallet}
        onDisconnect={handleDisconnect}
    />
    </>
  );
};
