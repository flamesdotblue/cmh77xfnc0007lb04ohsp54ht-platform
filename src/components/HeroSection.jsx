import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-neutral-950/80" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-start justify-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
            <Rocket className="w-4 h-4 text-teal-300" />
            <span className="text-xs text-teal-200 tracking-wide">Technology • Interactive • Education</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Centralized Alumni Data & Engagement Platform
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl">
            Unify alumni records, streamline communications, and activate a thriving community for mentorship, internships, and fundraising — all in one secure, modern platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-400 transition-colors px-5 py-3 text-sm font-medium"
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition-colors px-5 py-3 text-sm font-medium"
            >
              <Users className="w-4 h-4 mr-2" /> Explore Features
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-semibold">1</p>
              <p className="text-xs text-white/70">Unified alumni database</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-semibold">2</p>
              <p className="text-xs text-white/70">Mentorship & careers</p>
            </div>
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur">
              <p className="text-2xl font-semibold">3</p>
              <p className="text-xs text-white/70">Events & communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
