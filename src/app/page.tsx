'use client';

import ExpertiseBar from '@/components/ExpertiseBar';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="automation-bg min-h-screen relative overflow-x-hidden selection:bg-[var(--accent)] selection:text-white">
      <ExpertiseBar />
      <Header />

      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}