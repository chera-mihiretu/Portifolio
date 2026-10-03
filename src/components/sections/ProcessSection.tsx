import { processSteps } from '@/content/proposal-data';
import { Section } from '@/components/ui/primitives';

export default function ProcessSection() {
  return (
    <Section
      id="process"
      index="03"
      label="Process"
      title="How it works"
      intro="A clear, low-friction collaboration loop—designed for stakeholders who care about outcomes and reliability."
    >
      <ol className="grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s) => (
          <li key={s.step} className="bg-[var(--surface)] p-6">
            <span className="font-mono text-sm font-medium text-[var(--accent)]">Step {s.step}</span>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{s.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
