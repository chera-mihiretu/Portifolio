'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

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
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className={`bg-[var(--card-bg)] border-[5px] border-black shadow-[8px_8px_0px_black] px-6 py-4 flex items-center justify-between`}>
          
          {/* Logo - Bold & Experimental */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-black flex items-center justify-center text-[#FFE600] group-hover:bg-[#FFE600] group-hover:text-black transition-all border-[4px] border-black shadow-[4px_4px_0px_black]">
              <span className="font-display text-2xl">C</span>
            </div>
            <span className="font-display text-xl md:text-2xl tracking-tighter">
              CHERA<span className="text-[#FFE600] bg-black px-2">DEV</span>
            </span>
          </Link>

          {/* Navigation Links - Bold */}
          <div className="hidden lg:flex items-center gap-1">
            {['projects', 'skills', 'education', 'achievements', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#FFE600] transition-all border-[3px] border-transparent hover:border-black hover:shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions - Brutalist */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleThemeToggle}
              className="w-12 h-12 flex items-center justify-center bg-black text-[#FFE600] border-[4px] border-black hover:bg-[#FFE600] hover:text-black transition-all shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center px-6 py-3 bg-[#FF006E] text-white font-black text-sm uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
