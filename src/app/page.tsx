'use client';

import NeuralCursor from '@/components/NeuralCursor';
import Navbar from '@/components/Navbar';
import InteractivePlayground from '@/components/InteractivePlayground';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import Achievements from '@/components/Achievements';
import ClientTestimonials from '@/components/ClientTestimonials';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentImage, setCurrentImage] = useState('/assets/me.png');
  
  const toggleImage = () => {
    setCurrentImage(prev => 
      prev === '/assets/me.png' ? '/assets/me-1.png' : '/assets/me.png'
    );
  };

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
          
          {/* Profile Image - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex order-1 lg:order-2 h-full items-center justify-center relative"
          >
            {/* Decorative Elements Behind Image */}
            <motion.div
              animate={{
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-80 h-80 border-[6px] border-[#FFE600] rotate-12 -z-10"
            />
            <motion.div
              animate={{
                rotate: [0, -5, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-72 h-72 border-[6px] border-[#0047FF] -rotate-12 -z-10"
            />
            
            {/* Main Image Container */}
            <div className="relative z-10">
              <motion.div
                onClick={toggleImage}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-[400px] h-[500px] border-[6px] border-black shadow-[12px_12px_0px_black] bg-[var(--card-bg)] overflow-hidden cursor-pointer"
              >
                {/* Colored accent bars */}
                <div className="absolute top-0 left-0 w-full h-4 flex z-10">
                  <div className="flex-1 bg-[#FFE600]" />
                  <div className="flex-1 bg-[#FF006E]" />
                  <div className="flex-1 bg-[#0047FF]" />
                  <div className="flex-1 bg-[#00FF94]" />
                </div>
                
                {/* Image with AnimatePresence for smooth transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage}
                      alt="Chera Mihiretu - ACPC 2025 Finalist, Top Ethiopia GitHub Contributor"
                      fill
                      className="object-cover object-center pt-4"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Click indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider backdrop-blur-sm pointer-events-none z-20"
                >
                  Click to Toggle
                </motion.div>
                
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-[#FFE600] py-3 px-4 border-t-[6px] border-black z-10">
                  <p className="font-mono text-xs font-bold text-center uppercase tracking-wider">
                    CHERA MIHIRETU
                  </p>
                </div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 bg-[#FF006E] text-white px-6 py-3 border-[4px] border-black shadow-[6px_6px_0px_black] font-black text-xs uppercase tracking-wider rotate-3 z-50"
              >
                Lucky 
              </motion.div>
            </div>
          </motion.div>
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
      <ProfessionalExperience />
      <Achievements />
      <ClientTestimonials />
      <Contact />



      {/* Background Ambient Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[9999]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
      />
    </main>
  );
}