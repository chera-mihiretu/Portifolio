'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaDownload, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { person, projects, type Project } from '@/content/portfolio';
import { formatProjectOutcome } from '@/lib/project-copy';
import { splitFeatured } from '@/lib/portfolio-selectors';
import { ButtonLink, Card, Section, StatusBadge, Tag } from '@/components/ui/primitives';

function ProjectLinks({ p }: { p: Project }) {
  if (!p.github && !p.demo && !p.apkDownload) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {p.demo && (
        <ButtonLink href={p.demo} external variant="secondary" size="sm">
          <FaExternalLinkAlt className="h-3 w-3" aria-hidden="true" />
          Live site
        </ButtonLink>
      )}
      {p.github && (
        <ButtonLink href={p.github} external variant="secondary" size="sm">
          <FaGithub className="h-4 w-4" aria-hidden="true" />
          GitHub
        </ButtonLink>
      )}
      {p.apkDownload && (
        <ButtonLink href={p.apkDownload} download variant="secondary" size="sm">
          <FaDownload className="h-3.5 w-3.5" aria-hidden="true" />
          Download APK
        </ButtonLink>
      )}
    </div>
  );
}

function ProjectMeta({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <StatusBadge>{p.status}</StatusBadge>
      {p.clientSource ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--upwork)]">
          <SiUpwork className="h-3 w-3" aria-hidden="true" />
          {p.clientSource}
        </span>
      ) : null}
      <span className="font-mono text-xs text-[var(--subtle)]">{p.id}</span>
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <Card as="article" className="overflow-hidden grid lg:grid-cols-2">
      <div className="border-b lg:border-b-0 lg:border-r border-[var(--border)] bg-[var(--surface-2)]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={p.images[imgIdx]}
            alt={`${p.name} — screenshot ${imgIdx + 1} of ${p.images.length}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        {p.images.length > 1 ? (
          <div className="flex gap-2 p-3" role="group" aria-label={`${p.name} screenshots`}>
            {p.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setImgIdx(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-pressed={i === imgIdx}
                className={[
                  'relative h-14 w-20 overflow-hidden rounded-md border-2',
                  i === imgIdx ? 'border-[var(--accent)]' : 'border-transparent opacity-70 hover:opacity-100',
                ].join(' ')}
              >
                <Image src={src} alt="" fill className="object-cover object-top" sizes="80px" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="p-6 sm:p-8 flex flex-col">
        <ProjectMeta p={p} />
        <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">{p.name}</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted)]">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-6">
          <ProjectLinks p={p} />
        </div>
      </div>
    </Card>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const coverIsLogo = Boolean(p.logo && p.images[0] === p.logo);

  return (
    <Card as="article" className="overflow-hidden flex flex-col">
      <div className="relative aspect-[16/10] w-full border-b border-[var(--border)] bg-[var(--surface-2)]">
        <Image
          src={p.images[0]}
          alt={`${p.name} screenshot`}
          fill
          className={coverIsLogo ? 'object-contain p-10' : 'object-cover object-top'}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-1 flex-col">
        <ProjectMeta p={p} />
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{p.name}</h3>
          {p.logo && !coverIsLogo ? (
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <Image src={p.logo} alt={`${p.name} logo`} fill className="object-contain p-1" />
            </div>
          ) : null}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{formatProjectOutcome(p.description)}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.technologies.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <ProjectLinks p={p} />
        </div>
      </div>
    </Card>
  );
}

export default function ProjectsSection() {
  const { featured, rest } = splitFeatured(projects);

  return (
    <Section
      id="projects"
      index="04"
      label="Work"
      title="Projects with real systems"
      intro="Built to ship: architecture, reliability, and product-level execution—then improved with iteration."
      tone="tinted"
      aside={
        <ButtonLink href={person.upwork} external variant="secondary">
          <SiUpwork className="h-4 w-4 text-[var(--upwork)]" aria-hidden="true" />
          See more client work on Upwork · {person.upworkBadge}
        </ButtonLink>
      }
    >
      {featured ? <FeaturedProject p={featured} /> : null}

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </Section>
  );
}
