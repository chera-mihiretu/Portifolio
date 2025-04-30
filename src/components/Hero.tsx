'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`section relative overflow-hidden ${isDarkMode ? 'bg-background-dark-primary' : 'bg-background-light-primary'}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-main/10 to-secondary-main/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="animate-float">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-text-dark-primary' : 'text-text-light-primary'}`}>
              Hi, I'm <span className="text-primary-gradient">Your Name</span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            Software Engineer | AI Enthusiast | Mentor
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="btn btn-primary shadow-glow hover:shadow-glow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
            >
              Contact Me
            </a>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-main/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary-main/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}; 