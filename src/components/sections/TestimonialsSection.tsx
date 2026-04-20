'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/content/portfolio';

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">TESTIMONIALS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            What people <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={`${t.name}-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <blockquote className="text-sm leading-relaxed text-[var(--foreground)]/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-[var(--card-border)]">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-[var(--muted)]">
                  {[t.role, t.company].filter(Boolean).join(' · ')}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

