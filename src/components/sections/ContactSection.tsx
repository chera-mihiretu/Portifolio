'use client';

import { motion } from 'framer-motion';
import { SiUpwork } from 'react-icons/si';
import { person } from '@/content/portfolio';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[28px] glass-panel p-8 sm:p-10">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-[120px]" />
          <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[var(--accent-secondary)]/16 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            className="relative"
          >
            <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">CONTACT</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to <span className="text-gradient">automate</span>?
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)] text-base sm:text-lg">
              If you’re a business owner or team lead, tell me what’s manual, slow, error-prone, or expensive. I’ll design an automation system that reliably runs.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={person.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#14a800] px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <SiUpwork className="text-lg" />
                Hire me on Upwork
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-5 text-sm font-semibold text-[var(--foreground)]/85 hover:bg-[var(--background)]/50 transition-colors"
              >
                View work
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs font-mono text-[var(--foreground)]/55">
                © {new Date().getFullYear()} {person.name}. Engineered with Next.js & Tailwind.
              </p>
              <p className="text-xs font-mono text-[var(--foreground)]/55">
                Built for performance, accessibility, and trust.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

