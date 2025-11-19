'use client';

import NeuralCursor from '@/components/NeuralCursor';
import Navbar from '@/components/Navbar';
import InteractivePlayground from '@/components/InteractivePlayground';
import HolographicCode from '@/components/HolographicCode';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import DynamicIsland from '@/components/DynamicIsland';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-[var(--accent)] selection:text-white">
      <NeuralCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-full flex items-center">
            <InteractivePlayground />
          </div>
          <div className="order-1 lg:order-2 perspective-container">
            <HolographicCode />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--foreground)]/40 to-transparent" />
        </motion.div>
      </section>

      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />

      <DynamicIsland />

      {/* Background Ambient Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[9999]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
      />
    </main>
  );
}