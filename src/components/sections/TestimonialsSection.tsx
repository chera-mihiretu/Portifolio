import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { testimonials } from '@/content/portfolio';
import { Card, Section } from '@/components/ui/primitives';

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <Section
      id="testimonials"
      index="08"
      label="Client & user reviews"
      title="What clients and users say"
      intro="5-star feedback from Upwork clients and Chrome Web Store users of 8D Audio Experience."
      tone="tinted"
    >
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Card as="li" key={`${t.name}-${idx}`} className="p-6 flex flex-col">
            <figure className="flex flex-1 flex-col">
              {t.rating ? (
                <div className="flex items-center gap-1 text-amber-500" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="h-4 w-4" aria-hidden="true" />
                  ))}
                </div>
              ) : null}
              <blockquote className="mt-4 text-[16px] leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-auto pt-5">
                <div className="border-t border-[var(--border)] pt-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-[var(--muted)]">
                      {[t.role, t.company, t.date, t.source].filter(Boolean).join(' · ')}
                    </div>
                  </div>
                  {t.href ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[var(--muted)] hover:text-[var(--foreground)]"
                      aria-label={`See this review from ${t.name} at its source`}
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </figcaption>
            </figure>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
