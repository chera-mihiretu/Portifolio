import { FaBrain, FaCode, FaDatabase, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { skillCategories } from '@/content/portfolio';
import { Section, Tag } from '@/components/ui/primitives';

const iconByCategory: Record<string, IconType> = {
  'Programming Languages': FaCode,
  'Web & App Development': FaMobileAlt,
  'Databases & Backend': FaDatabase,
  'DevOps & CI/CD': FaServer,
  'AI & Machine Learning': FaBrain,
  Architecture: FaTools,
};

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      index="05"
      label="Skills"
      title="Technical capability map"
      intro="Tools are choices. The goal is consistent delivery, stable systems, and automation that stays correct at scale."
    >
      <dl className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        {skillCategories.map((c) => {
          const Icon = iconByCategory[c.category] ?? FaCode;
          return (
            <div key={c.category} className="grid gap-3 p-5 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6">
              <dt className="flex items-center gap-3 font-semibold sm:col-span-4">
                <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                {c.category}
              </dt>
              <dd className="flex flex-wrap gap-1.5 sm:col-span-8">
                {c.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
