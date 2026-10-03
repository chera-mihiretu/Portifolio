import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { achievements } from '@/content/portfolio';
import { ButtonLink, Card, Section } from '@/components/ui/primitives';

export default function AchievementsSection() {
  return (
    <Section
      id="achievements"
      index="07"
      label="Credibility"
      title="Honors & awards"
      intro="Recognized for cloud competency, competitive problem solving, and Top Rated delivery on Upwork."
    >
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((a) => {
          const link =
            'credly' in a && a.credly
              ? { url: a.credly, label: 'Verify on Credly' }
              : 'link' in a && a.link
                ? a.link
                : null;
          return (
            <Card as="li" key={`${a.title}-${a.position}`} className="overflow-hidden flex flex-col">
              <div className="relative aspect-[16/9] w-full border-b border-[var(--border)] bg-[var(--surface-2)]">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <a.icon className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                  {a.category}
                  <span aria-hidden="true">·</span>
                  {a.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                <p className="text-[15px] font-medium text-[var(--accent)]">{a.position}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{a.description}</p>
                {link ? (
                  <div className="mt-auto pt-5">
                    <ButtonLink href={link.url} external variant="secondary" size="sm">
                      {link.label}
                      <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
