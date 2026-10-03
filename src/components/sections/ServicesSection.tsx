import { FaBolt, FaCogs, FaLock, FaShieldAlt, FaSitemap, FaCloud } from 'react-icons/fa';
import { services } from '@/content/proposal-data';
import { Card, Section } from '@/components/ui/primitives';

const serviceIcons = {
  'AI Agent Development': FaBolt,
  'Workflow Automation': FaCogs,
  'Open WebUI (Open Claw) Setup & Hardening': FaLock,
  'Intelligent Backend Systems': FaSitemap,
  'AWS Cloud Infrastructure': FaCloud,
  'Security & Reliability': FaShieldAlt,
} as const;

export default function ServicesSection() {
  return (
    <Section
      id="services"
      index="02"
      label="Services"
      title="What I build for business clients"
      intro="The goal is simple: faster execution, fewer errors, and systems that run without constant human babysitting."
      tone="tinted"
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = serviceIcons[s.title as keyof typeof serviceIcons] ?? FaBolt;
          return (
            <Card as="li" key={s.title} className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{s.description}</p>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
