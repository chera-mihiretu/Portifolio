'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { expertiseBar } from '@/content/portfolio';

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs sm:text-sm font-medium tracking-tight text-[var(--foreground)]/85 backdrop-blur">
      {children}
    </span>
  );
}

export default function ExpertiseBar() {
  const reduce = useReducedMotion();
  const items = [...expertiseBar, ...expertiseBar];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] border-b border-[var(--card-border)] bg-[var(--background)]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="flex items-center gap-3 py-2.5">
          <span className="hidden sm:inline-flex font-mono text-[10px] tracking-[0.22em] text-[var(--muted)]">
            EXPERTISE
          </span>

          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)]/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)]/90 to-transparent" />

            <motion.div
              className="flex w-max items-center gap-2"
              initial={{ x: 0 }}
              animate={reduce ? undefined : { x: ['0%', '-50%'] }}
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 26,
                      repeat: Infinity,
                      ease: 'linear',
                    }
              }
              aria-label="Core skills"
            >
              {items.map((text, idx) => (
                <Pill key={`${text}-${idx}`}>{text}</Pill>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

