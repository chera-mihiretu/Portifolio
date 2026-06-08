'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { achievements, education, person } from '@/content/portfolio';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]/80 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_16px_var(--glow-2)]" />
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
    >
      {children}
      <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 px-5 text-sm font-semibold text-[var(--foreground)]/85 backdrop-blur transition-colors hover:bg-[var(--background)]/55"
    >
      {children}
    </button>
  );
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  const trust = [
    education[1]?.institution,
    education[2]?.institution,
    achievements[0]?.title,
    achievements[2]?.title,
  ].filter(Boolean);

  return (
    <section id="top" className="pt-32 sm:pt-36 pb-18 sm:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <Badge>AI agents</Badge>
              <Badge>Workflow automation</Badge>
              <Badge>Backend systems</Badge>
              <Badge>AWS</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.03]"
            >
              Automation that{' '}
              <span className="text-gradient">scales operations</span>
              <br className="hidden sm:block" /> without scaling headcount.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-5 text-base sm:text-lg text-[var(--muted)] max-w-2xl"
            >
              {person.identitySentence}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <PrimaryButton onClick={() => scrollTo('contact')}>Talk about your workflow</PrimaryButton>
              <SecondaryButton onClick={() => scrollTo('projects')}>See proof (projects)</SecondaryButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {person.codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/30 px-4 py-2 text-sm font-semibold text-[var(--foreground)]/80 hover:bg-[var(--background)]/45 transition-colors"
                >
                  <Image src={p.icon} alt={p.name} width={18} height={18} className="opacity-80" />
                  {p.name}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.6 }}
              className="mt-6"
            >
              <a
                href={person.featured.url || '#projects'}
                {...(person.featured.url
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group relative flex items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 backdrop-blur transition-colors hover:bg-[var(--background)]/45 max-w-xl overflow-hidden"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[var(--accent-secondary)]/15 to-[var(--accent)]/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Image
                  src={person.featured.icon}
                  alt={person.featured.name}
                  width={56}
                  height={56}
                  className="relative h-14 w-14 rounded-xl shadow-[0_0_28px_var(--glow-2)]"
                />
                <div className="relative min-w-0">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent-secondary)]">
                    FEATURED PRODUCT
                  </div>
                  <div className="mt-1 text-sm font-bold tracking-tight truncate">
                    {person.featured.name}
                  </div>
                  <div className="mt-0.5 text-xs text-[var(--muted)] truncate">
                    {person.featured.tagline}
                  </div>
                </div>
                <FaArrowRight className="relative ml-auto h-3.5 w-3.5 text-[var(--foreground)]/60 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-2">
              {trust.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono text-[var(--foreground)]/55 rounded-full border border-[var(--card-border)] px-3 py-1.5 bg-[var(--card-bg)]/50 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-[var(--accent-secondary)]/10 blur-2xl" />
              <div className="glass-panel rounded-[28px] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">
                      OPERATOR
                    </div>
                    <div className="mt-1 text-xl font-bold tracking-tight">{person.name}</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">{person.title}</div>
                  </div>
                  <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 px-3 py-2 text-xs font-mono text-[var(--foreground)]/70">
                    STATUS: READY
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/35 p-4">
                    <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">FOCUS</div>
                    <div className="mt-2 text-sm font-semibold">Autonomous agents & workflows</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      Reliable systems that run, recover, and report.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/35 p-4">
                    <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">DELIVERY</div>
                    <div className="mt-2 text-sm font-semibold">Backend-first engineering</div>
                    <div className="mt-1 text-sm text-[var(--muted)]">
                      Python · Golang · Node.js · AWS
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/25 p-4 font-mono text-xs text-[var(--foreground)]/70">
                  <div className="flex items-center justify-between gap-3">
                    <span>PIPELINE</span>
                    <span className="text-[var(--muted)]">design → build → ship → iterate</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-[var(--foreground)]/10 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent)] shadow-[0_0_26px_var(--glow)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

