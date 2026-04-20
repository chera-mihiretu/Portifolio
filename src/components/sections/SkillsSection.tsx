'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaDatabase, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';
import { skillCategories } from '@/content/portfolio';

const iconByCategory: Record<string, React.ReactNode> = {
  'Programming Languages': <FaCode className="h-5 w-5 text-[var(--accent)]" />,
  'Web & App Development': <FaMobileAlt className="h-5 w-5 text-[var(--accent-secondary)]" />,
  'Databases & Backend': <FaDatabase className="h-5 w-5 text-[var(--accent)]" />,
  'DevOps & CI/CD': <FaServer className="h-5 w-5 text-[var(--accent-secondary)]" />,
  'AI & Machine Learning': <FaBrain className="h-5 w-5 text-[var(--accent)]" />,
  Architecture: <FaTools className="h-5 w-5 text-[var(--accent-secondary)]" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10"
        >
          <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">SKILLS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical <span className="text-gradient">capability map</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)] text-base sm:text-lg">
            Tools are choices. The goal is consistent delivery, stable systems, and automation that stays correct at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((c, idx) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-[var(--card-border)]">
                <div className="h-10 w-10 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 flex items-center justify-center">
                  {iconByCategory[c.category] ?? (
                    <span className="h-2 w-2 rounded-sm bg-[var(--accent-secondary)]" />
                  )}
                </div>
                <h3 className="text-base font-bold tracking-tight">{c.category}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--card-border)] bg-[var(--background)]/35 px-3 py-1 text-[12px] font-mono text-[var(--foreground)]/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

