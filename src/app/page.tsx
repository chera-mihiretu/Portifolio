'use client';

import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Education />
        <Projects />
        <Skills />
      </Layout>
    </ThemeProvider>
  );
}
