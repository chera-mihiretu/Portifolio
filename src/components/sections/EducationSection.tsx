import Image from 'next/image';
import { education } from '@/content/portfolio';
import { Card, Section } from '@/components/ui/primitives';

export default function EducationSection() {
  return (
    <Section id="education" index="06" label="Education" title="Knowledge base" tone="tinted">
      <ul className="grid gap-5 lg:grid-cols-3">
        {education.map((e) => (
          <Card as="li" key={`${e.institution}-${e.degree}`} className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-white">
                <Image src={e.image} alt={`${e.institution} logo`} fill className="object-contain p-2" />
              </div>
              <span className="rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-xs font-medium">{e.status}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{e.institution}</h3>
            <p className="mt-0.5 text-[15px] font-medium text-[var(--accent)]">{e.degree}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{e.details}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
