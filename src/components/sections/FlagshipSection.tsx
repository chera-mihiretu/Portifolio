'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { flagship } from '@/content/portfolio';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function FlagshipSection() {
  return (
    <section id="e-school" className="pb-20 sm:pb-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10 max-w-3xl"
        >
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">CASE STUDY</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Two worlds that <span className="text-gradient">never mix</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">{flagship.premise}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="glass-panel rounded-2xl p-6 sm:p-8 mb-5"
        >
          <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">THE PROBLEM</div>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--foreground)]/80 max-w-4xl">
            {flagship.problem}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {flagship.worlds.map((world, idx) => (
            <motion.article
              key={world.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold tracking-tight">{world.title}</h3>
              <ul className="mt-4 space-y-3">
                {world.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8"
          >
            <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">WHY A BUYER SHOULD CARE</div>
            <div className="mt-5 space-y-4">
              {flagship.buyer.map((item) => (
                <div key={item.title}>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ delay: 0.06 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">HOW IT IS BUILT</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{flagship.built}</p>
            </div>
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <div className="font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">WHO THIS IS FOR</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{flagship.who}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {flagship.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-1 text-[11px] font-mono text-[var(--foreground)]/70"
            >
              {skill}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mt-8 glass-panel rounded-[28px] p-6 sm:p-8"
        >
          <p className="max-w-3xl text-base sm:text-lg leading-relaxed">{flagship.cta}</p>
          <p className="mt-3 text-sm text-[var(--muted)]">{flagship.outOfScope}</p>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[var(--foreground)] px-5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
            >
              Talk about a network
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={flagship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 px-5 text-sm font-semibold text-[var(--foreground)]/85 backdrop-blur transition-colors hover:bg-[var(--background)]/55"
            >
              e-school.et
              <FaExternalLinkAlt className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
