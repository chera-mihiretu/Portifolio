'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { person } from '@/content/portfolio';

const sections = [
  { id: 'e-school', label: 'Case study' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'testimonials', label: 'Reviews' },
] as const;

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 flex-col leading-tight" aria-label="Back to top">
          <span className="truncate text-[15px] font-semibold">{person.name}</span>
          <span className="truncate text-xs text-[var(--muted)]">{person.title}</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-md px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {mounted ? (isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />) : null}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex h-10 items-center rounded-lg bg-[var(--foreground)] px-4 text-sm font-medium text-[var(--background)] hover:opacity-90"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)]"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="lg:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 sm:px-6 py-3"
        >
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1">
            {[...sections, { id: 'contact', label: 'Contact' }].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[15px] text-[var(--foreground)] hover:bg-[var(--surface-2)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
