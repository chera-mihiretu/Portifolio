'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { person, projects, type Project } from '@/content/portfolio';

function OutcomeLine(description: string) {
  const normalized = description.trim();
  if (!normalized) return '';
  return normalized
    .replace(/^Mobile app/i, 'Production-ready mobile app')
    .replace(/^Python Flask API \+ Flutter app/i, 'API + mobile app system')
    .replace(/^Campus platform/i, 'Platform')
    .replace(/^Thread-pooled/i, 'High-throughput')
    .replace(/^Enabling/i, 'Enables')
    .replace(/^AI-powered/i, 'AI-assisted')
    .replace(/^Mobile-first/i, 'Mobile-first product');
}

function LinkButtons({ p }: { p: Project }) {
  const hasAny = p.github || p.demo || p.apkDownload;
  if (!hasAny) return null;

  return (
    <div className="mt-5 flex items-center gap-3">
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-2 text-sm font-semibold text-[var(--foreground)]/80 hover:bg-[var(--background)]/50 transition-colors"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
      )}
      {p.demo && (
        <a
          href={p.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-2 text-sm font-semibold text-[var(--foreground)]/80 hover:bg-[var(--background)]/50 transition-colors"
        >
          <FaExternalLinkAlt className="h-4 w-4" />
          Live
        </a>
      )}
      {p.apkDownload && (
        <a
          href={p.apkDownload}
          download
          className="ml-auto inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-3 py-2 text-sm font-semibold text-[var(--background)] hover:opacity-90 transition-opacity"
        >
          <FaDownload className="h-4 w-4" />
          APK
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  const [imgIdx, setImgIdx] = useState(0);
  const hasMultiple = p.images.length > 1;

  const prev = () => setImgIdx((i) => (i - 1 + p.images.length) % p.images.length);
  const next = () => setImgIdx((i) => (i + 1) % p.images.length);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      className="glass-panel rounded-2xl overflow-hidden mb-5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image gallery */}
        <div className="relative h-72 sm:h-80 lg:h-full min-h-[320px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={p.images[imgIdx]}
                alt={`${p.name} — image ${imgIdx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--background)]/30 lg:to-[var(--background)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent lg:from-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="rounded-full bg-[var(--accent)]/90 px-3 py-1 text-[10px] font-mono tracking-wider text-white border border-white/10">
              FEATURED
            </span>
            <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] font-mono tracking-wider text-[var(--accent-secondary)] border border-white/10">
              {p.status}
            </span>
          </div>

          {/* Navigation */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <FaChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <FaChevronRight className="h-3.5 w-3.5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {p.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === imgIdx
                        ? 'w-5 bg-[var(--accent-secondary)]'
                        : 'w-1.5 bg-white/35 hover:bg-white/55'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">{p.id}</div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{p.name}</h3>
            {p.clientSource ? (
              <span className="rounded-full border border-[#14a800]/30 bg-[#14a800]/10 px-3 py-1 text-[10px] font-mono tracking-wider text-[#14a800]">
                {p.clientSource}
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
            {p.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-1 text-[11px] font-mono text-[var(--foreground)]/70"
              >
                {t}
              </span>
            ))}
          </div>

          <LinkButtons p={p} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <motion.article
      key={p.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ delay: idx * 0.06 }}
      className="glass-panel rounded-2xl overflow-hidden"
    >
      <div className="relative h-52 w-full">
        {p.images?.[0] ? (
          <Image
            src={p.images[0]}
            alt={p.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full bg-[var(--foreground)]/5" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] font-mono tracking-wider text-white/70 border border-white/10">
            {p.id}
          </span>
          <span className="rounded-full bg-black/55 px-3 py-1 text-[10px] font-mono tracking-wider text-[var(--accent-secondary)] border border-white/10">
            {p.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold tracking-tight">{p.name}</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              {OutcomeLine(p.description)}
            </p>
          </div>
          {p.logo ? (
            <div className="relative h-10 w-10 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 overflow-hidden shrink-0">
              <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain p-1.5" />
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.technologies.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-1 text-[11px] font-mono text-[var(--foreground)]/70"
            >
              {t}
            </span>
          ))}
        </div>

        <LinkButtons p={p} />
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">WORK</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Projects with <span className="text-gradient">real systems</span>
            </h2>
          </div>
          <div className="max-w-xl space-y-4">
            <p className="text-[var(--muted)] text-base sm:text-lg">
              Built to ship: architecture, reliability, and product-level execution—then improved with iteration.
            </p>
            <a
              href={person.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#14a800]/30 bg-[#14a800]/10 px-4 py-2 text-sm font-semibold text-[var(--foreground)]/85 hover:bg-[#14a800]/16 transition-colors"
            >
              <SiUpwork className="h-4 w-4 text-[#14a800]" />
              See more client work on Upwork · {person.upworkBadge}
            </a>
          </div>
        </motion.div>

        {/* Featured project — full-width with image gallery */}
        <FeaturedProject p={featured} />

        {/* Rest of the projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rest.map((p, idx) => (
            <ProjectCard key={p.id} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
