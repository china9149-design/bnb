import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyBNB } from './components/WhyBNB';
import { Tokenomics } from './components/Tokenomics';
import { MessageToCZ } from './components/MessageToCZ';
import { Roadmap } from './components/Roadmap';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ui/ParticleBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-bnb-black text-white font-sans overflow-x-hidden selection:bg-bnb-yellow selection:text-bnb-black">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <MessageToCZ />
        <Tokenomics />
        <WhyBNB />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}