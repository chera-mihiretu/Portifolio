'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const sections = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = useMemo(() => theme === 'dark', [theme]);
  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 z-50"
      style={{ top: 44 }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div
          className={[
            'glass-panel',
            'rounded-2xl',
            'px-4 sm:px-5',
            'py-3',
            'flex items-center justify-between gap-3',
            'transition-all duration-300',
            scrolled ? 'bg-[var(--card-bg)]/80' : 'bg-[var(--card-bg)]/55',
          ].join(' ')}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
            aria-label="Home"
          >
            <div className="h-9 w-9 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/50 backdrop-blur flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-sm bg-[var(--accent-secondary)] shadow-[0_0_22px_var(--glow-2)]" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">AUTOMATION OS</div>
              <div className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                Chera Mihiretu
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)]/70 hover:text-[var(--foreground)] hover:bg-[var(--foreground)]/5 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="h-10 w-10 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 hover:bg-[var(--background)]/55 transition-colors flex items-center justify-center text-[var(--foreground)]/80"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex h-10 items-center rounded-xl bg-[var(--foreground)] px-4 text-sm font-semibold text-[var(--background)] hover:opacity-90 transition-opacity"
            >
              Build with me
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

