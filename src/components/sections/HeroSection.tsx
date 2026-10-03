'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { flagship, person } from '@/content/portfolio';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  return (
    <section id="top" className="pt-32 sm:pt-36 pb-18 sm:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_16px_var(--glow-2)]" />
                {flagship.status} on Railway
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">
                {person.name} · {person.title}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
            >
              <span className="block text-[1.05rem] sm:text-xl font-semibold tracking-tight text-[var(--foreground)]/80 mb-3">
                e-school.et
              </span>
              One platform, a{' '}
              <span className="text-gradient">private address</span> for every school
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-5 text-base sm:text-lg text-[var(--muted)] max-w-xl"
            >
              {flagship.oneLine}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href={flagship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
              >
                Open the live site
                <FaExternalLinkAlt className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => scrollTo('e-school')}
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 px-5 text-sm font-semibold text-[var(--foreground)]/85 backdrop-blur transition-colors hover:bg-[var(--background)]/55"
              >
                Read the case
                <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {flagship.skills.slice(0, 6).map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-[var(--foreground)]/60 rounded-full border border-[var(--card-border)] px-3 py-1.5 bg-[var(--card-bg)]/50 backdrop-blur"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.46, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href={person.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#14a800]/35 bg-[#14a800]/10 px-4 py-2 text-sm font-semibold text-[var(--foreground)]/85 hover:bg-[#14a800]/16 transition-colors"
              >
                <SiUpwork className="h-4 w-4 text-[#14a800]" />
                Upwork · {person.upworkBadge}
              </a>
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
              transition={{ delay: 0.52, duration: 0.6 }}
              className="mt-6"
            >
              <a
                href={person.featured.url}
                target="_blank"
                rel="noopener noreferrer"
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
                <FaArrowRight className="relative ml-auto h-3.5 w-3.5 shrink-0 text-[var(--foreground)]/60 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-[var(--accent-secondary)]/10 blur-2xl" />
              <a
                href={flagship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group relative block rounded-[28px] overflow-hidden"
              >
                <div className="relative h-64 sm:h-80 w-full">
                  <Image
                    src={flagship.images[0]}
                    alt="e-school.et network home: every school on its own address"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="relative border-t border-[var(--card-border)] bg-[var(--background)]/55 p-4 sm:p-5">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent-secondary)]">
                    THE ADDRESS IS THE SCHOOL
                  </div>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 px-3 py-2">
                      <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">SCHOOL</div>
                      <div className="mt-1 text-sm font-semibold tracking-tight">north-hall.e-school.et</div>
                    </div>
                    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 px-3 py-2">
                      <div className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted)]">OPERATOR</div>
                      <div className="mt-1 text-sm font-semibold tracking-tight">admin.e-school.et</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[var(--muted)]">
                    The hostname chooses the school. The session chooses the person.
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
