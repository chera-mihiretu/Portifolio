'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaTerminal } from 'react-icons/fa';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'bg-[var(--card-bg)]/80' : 'bg-[var(--card-bg)]/50'
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[var(--foreground)] flex items-center justify-center text-[var(--background)] group-hover:scale-110 transition-transform duration-300">
              <FaTerminal className="text-sm" />
            </div>
            <span className="font-mono font-bold tracking-tighter text-lg hidden sm:block">
              CHERA<span className="text-[var(--accent)]">.DEV</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {['projects', 'skills', 'education', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-all duration-300 capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-lg bg-[var(--foreground)] text-[var(--background)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <span>Hire Me</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;