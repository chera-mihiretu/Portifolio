'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaCogs, FaLock, FaShieldAlt, FaSitemap, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: 'AI Agent Development',
    description:
      'Autonomous agents that take actions across tools, APIs, and internal systems—with guardrails, retries, and measurable outputs.',
    icon: <FaBolt className="h-5 w-5 text-[var(--accent-secondary)]" />,
  },
  {
    title: 'Workflow Automation',
    description:
      'From manual ops to reliable pipelines: triggers, queues, approvals, schedules, and self-healing execution for business processes.',
    icon: <FaCogs className="h-5 w-5 text-[var(--accent)]" />,
  },
  {
    title: 'Open WebUI (Open Claw) Setup & Hardening',
    description:
      'End-to-end deployment of Open WebUI with production-grade security: SSO/OIDC authentication, role-based access control, encrypted model traffic, API key rotation, network isolation, and audit logging—so your team gets a private AI interface without exposing sensitive data.',
    icon: <FaLock className="h-5 w-5 text-[var(--accent-secondary)]" />,
  },
  {
    title: 'Intelligent Backend Systems',
    description:
      'APIs, services, and data flows designed for scale: observability, clean architecture, and performance you can trust.',
    icon: <FaSitemap className="h-5 w-5 text-[var(--accent-secondary)]" />,
  },
  {
    title: 'AWS Cloud Infrastructure',
    description:
      'Secure, cost-aware cloud architecture—deployment pipelines, environments, and production reliability for automation workloads.',
    icon: <FaCloud className="h-5 w-5 text-[var(--accent)]" />,
  },
  {
    title: 'Security & Reliability',
    description:
      'Least-privilege integrations, audit trails, and failure-mode thinking so automation helps the business instead of risking it.',
    icon: <FaShieldAlt className="h-5 w-5 text-[var(--accent-secondary)]" />,
  },
] as const;

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

