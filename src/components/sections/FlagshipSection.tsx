import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { flagship } from '@/content/portfolio';
import { ButtonLink, Card, Section, Tag } from '@/components/ui/primitives';

export default function FlagshipSection() {
  return (
    <Section
      id="e-school"
      index="01"
      label="Case study · e-school.et"
      title={flagship.premise}
    >
      {/* Problem */}
      <Card className="p-6 sm:p-8 border-l-4 border-l-[var(--accent)]">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">The problem</h3>
        <p className="mt-3 max-w-4xl text-[17px] leading-relaxed">{flagship.problem}</p>
      </Card>

      {/* Who gets what */}
      <h3 className="mt-12 text-xl font-semibold">What each side gets</h3>
      <div className="mt-5 grid gap-5 lg:grid-cols-3 lg:items-start">
        {flagship.worlds.map((world) => (
          <Card as="article" key={world.title} className="p-6">
            <h4 className="text-lg font-semibold">{world.title}</h4>
            <ul className="mt-4 space-y-3">
              {world.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted)]">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Why it matters */}
      <h3 className="mt-12 text-xl font-semibold">Why a buyer should care</h3>
      <dl className="mt-5 divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        {flagship.buyer.map((item) => (
          <div key={item.title} className="grid gap-1 p-5 sm:grid-cols-12 sm:gap-6 sm:px-6">
            <dt className="font-semibold sm:col-span-4">{item.title}</dt>
            <dd className="text-[15px] leading-relaxed text-[var(--muted)] sm:col-span-8">{item.body}</dd>
          </div>
        ))}
      </dl>

      {/* Build + audience */}
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">How it is built</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{flagship.built}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {flagship.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Who this is for</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{flagship.who}</p>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl bg-[var(--accent-soft)] p-6 sm:p-8">
        <p className="max-w-3xl text-lg leading-relaxed text-[var(--foreground)]">{flagship.cta}</p>
        <p className="mt-3 text-sm text-[var(--muted)]">{flagship.outOfScope}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <ButtonLink href="#contact" variant="primary">
            Talk about a network
            <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={flagship.url} external variant="secondary">
            Visit e-school.et
            <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
