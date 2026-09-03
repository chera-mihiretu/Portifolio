'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { education } from '@/content/portfolio';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">EDUCATION</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Knowledge <span className="text-gradient">base</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {education.map((e, idx) => (
            <motion.div
              key={`${e.institution}-${e.degree}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 overflow-hidden">
                    <Image src={e.image} alt={e.institution} fill className="object-contain p-2 opacity-90" />
                  </div>
                  <div>
                    <div className="text-base font-bold tracking-tight">{e.institution}</div>
                    <div className="text-sm text-[var(--muted)]">{e.degree}</div>
                  </div>
                </div>
                <span className="rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-2 text-xs font-mono text-[var(--foreground)]/70 whitespace-nowrap">
                  {e.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{e.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

