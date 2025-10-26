import React from 'react';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Stakeholders from './components/Stakeholders';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <HeroSection />
      <Features />
      <Stakeholders />
      <CallToAction />
    </div>
  );
}

export default App;
