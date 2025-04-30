'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { theme } from '@/styles/theme';

// Navigation component
const Navigation: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <nav className={`fixed top-0 w-full z-50 ${isDarkMode ? 'bg-black-primary' : 'bg-white-primary'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black-primary'}`}>
              Portfolio
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-white text-black-primary' : 'bg-black-primary text-white'}`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Layout component
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black-primary text-white' : 'bg-white-primary text-black-primary'}`}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}; 