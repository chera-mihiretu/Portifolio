import Image from 'next/image';
import { FaArrowRight, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { expertiseBar, flagship, person } from '@/content/portfolio';
import { ButtonLink, Card, StatusBadge, Tag } from '@/components/ui/primitives';

export default function HeroSection() {
  return (
    <section id="top" className="px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Who I am */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <a
              href={person.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium hover:bg-[var(--surface-2)]"
            >
              <SiUpwork className="h-4 w-4 text-[var(--upwork)]" aria-hidden="true" />
              {person.upworkBadge} on Upwork
            </a>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold">{person.name}</h1>
            <p className="mt-2 text-xl sm:text-2xl text-[var(--muted)]">{person.title}</p>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed">{person.identitySentence}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href={person.upwork} external variant="upwork">
                <SiUpwork className="h-4 w-4" aria-hidden="true" />
                Hire me on Upwork
              </ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                See my work
                <FaArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={person.cv.url} download={person.cv.downloadName} variant="secondary">
                <FaDownload className="h-3.5 w-3.5" aria-hidden="true" />
                Download CV
              </ButtonLink>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pt-14 space-y-6">
            <div>
              <h2 className="text-sm font-medium text-[var(--muted)]">Core expertise</h2>
              <ul className="mt-3 space-y-2">
                {expertiseBar.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium text-[var(--muted)]">Coding profiles</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {person.codingProfiles.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium hover:bg-[var(--surface-2)]"
                  >
                    <Image src={p.icon} alt="" width={16} height={16} />
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Featured work */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-sm font-medium text-[var(--muted)]">Featured work</h2>
          <div className="mt-4 grid gap-5 lg:grid-cols-3">
            <Card as="article" className="overflow-hidden lg:col-span-2">
              <div className="relative aspect-[2/1] w-full border-b border-[var(--border)] bg-[var(--surface-2)]">
                <Image
                  src={flagship.images[0]}
                  alt="e-school.et network home: every school on its own address"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
              <div className="grid gap-6 p-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold">{flagship.name}</span>
                    <StatusBadge>{flagship.status} on Railway</StatusBadge>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">One platform, a private address for every school</h3>
                  <p className="mt-3 text-[15px] text-[var(--muted)]">{flagship.oneLine}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    <ButtonLink href={flagship.url} external variant="primary" size="sm">
                      Open the live site
                      <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                    </ButtonLink>
                    <ButtonLink href="#e-school" variant="secondary" size="sm">
                      Read the case study
                    </ButtonLink>
                  </div>
                </div>
                <div>
                  <dl className="grid gap-2 text-sm">
                    <div className="rounded-lg bg-[var(--surface-2)] px-3 py-2">
                      <dt className="text-xs text-[var(--subtle)]">School site</dt>
                      <dd className="font-mono text-[13px]">north-hall.e-school.et</dd>
                    </div>
                    <div className="rounded-lg bg-[var(--surface-2)] px-3 py-2">
                      <dt className="text-xs text-[var(--subtle)]">Operator console</dt>
                      <dd className="font-mono text-[13px]">admin.e-school.et</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-sm text-[var(--muted)]">
                    The hostname chooses the school. The session chooses the person.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {flagship.skills.slice(0, 6).map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card as="article" className="overflow-hidden flex flex-col">
              <div className="flex aspect-[2/1] lg:aspect-auto lg:h-[45%] items-center justify-center border-b border-[var(--border)] bg-[var(--surface-2)]">
                <Image
                  src={person.featured.icon}
                  alt={`${person.featured.name} icon`}
                  width={112}
                  height={112}
                  className="h-24 w-24 rounded-2xl"
                />
              </div>
              <div className="p-6 flex flex-1 flex-col">
                <p className="text-xs font-medium text-[var(--accent)]">Featured product</p>
                <h3 className="mt-1 text-xl font-semibold">{person.featured.name}</h3>
                <p className="mt-3 text-sm font-medium">{person.featured.tagline}</p>
                <p className="mt-2 text-[15px] text-[var(--muted)]">{person.featured.blurb}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink href={person.featured.url} external variant="secondary" size="sm">
                    View on Chrome Web Store
                    <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
