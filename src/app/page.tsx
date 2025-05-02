'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar />
      <div className="animate-fade-in">
        <Hero />
        <section id="about" className="animate-slide-up">
          <Education />
        </section>
        <section id="projects" className="animate-slide-up">
          <Projects />
        </section>
        <section id="skills" className="animate-slide-up">
          <Skills />
        </section>
        <section id="achievements" className="animate-slide-up">
          <Achievements />
        </section>
        <section id="contact" className="animate-slide-up">
          <Contact />
        </section>
      </div>
    </main>
  );
}