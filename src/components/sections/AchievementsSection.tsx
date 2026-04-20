'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { achievements } from '@/content/portfolio';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">CREDIBILITY</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Honors & <span className="text-gradient">awards</span>
            </h2>
          </div>
          <p className="max-w-xl text-[var(--muted)] text-base sm:text-lg">
            Recognized for cloud competency and competitive problem solving—evidence of depth, not hype.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {achievements.map((a, idx) => (
            <motion.article
              key={`${a.title}-${a.position}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 rounded-full bg-black/55 border border-white/10 px-3 py-1 text-[10px] font-mono tracking-wider text-white/70">
                  {a.category}
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-black/55 border border-white/10 px-3 py-1 text-[10px] font-mono tracking-wider text-white/70">
                  {a.date}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold tracking-tight">{a.title}</h3>
                    <div className="mt-1 text-xs font-mono text-[var(--foreground)]/65">{a.position}</div>
                  </div>
                  <div className="h-11 w-11 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 flex items-center justify-center shrink-0">
                    {a.icon ? <a.icon className="text-3xl" /> : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{a.description}</p>

                {a.credly ? (
                  <a
                    href={a.credly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/35 px-4 py-2 text-sm font-semibold text-[var(--foreground)]/80 hover:bg-[var(--background)]/50 transition-colors"
                  >
                    Verify on Credly <FaExternalLinkAlt className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <div className="mt-5 h-10" />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

