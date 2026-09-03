'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/content/proposal-data';

const steps = processSteps;

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">PROCESS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)] text-base sm:text-lg">
            A clear, low-friction collaboration loop—designed for stakeholders who care about outcomes and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-bold tracking-tight">{s.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
                </div>
                <div className="shrink-0 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-2 font-mono text-xs text-[var(--foreground)]/70">
                  {s.step}
                </div>
              </div>

              <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent opacity-80" />
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[var(--foreground)]/55">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--glow)]" />
                <span>Designed for repeatable delivery</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

