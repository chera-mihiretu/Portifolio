'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaCogs, FaLock, FaShieldAlt, FaSitemap, FaCloud } from 'react-icons/fa';
import { services as proposalServices } from '@/content/proposal-data';

const serviceIcons = {
  'AI Agent Development': FaBolt,
  'Workflow Automation': FaCogs,
  'Open WebUI (Open Claw) Setup & Hardening': FaLock,
  'Intelligent Backend Systems': FaSitemap,
  'AWS Cloud Infrastructure': FaCloud,
  'Security & Reliability': FaShieldAlt,
} as const;

const services = proposalServices.map((service) => {
  const Icon = serviceIcons[service.title as keyof typeof serviceIcons] ?? FaBolt;
  return {
    ...service,
    icon: <Icon className="h-5 w-5 text-[var(--accent-secondary)]" />,
  };
});

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">SERVICES</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              What I build for <span className="text-gradient">business clients</span>
            </h2>
          </div>
          <p className="max-w-xl text-[var(--muted)] text-base sm:text-lg">
            The goal is simple: faster execution, fewer errors, and systems that run without constant human babysitting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: idx * 0.06 }}
              className="glass-panel rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-[var(--card-border)] bg-[var(--background)]/40 flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

