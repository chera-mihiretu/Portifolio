import { FaDownload } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { flagship, person } from '@/content/portfolio';
import { ButtonLink } from '@/components/ui/primitives';

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="border-t border-[var(--border)] px-4 sm:px-6 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
            <p className="flex items-center gap-3 text-sm font-medium text-[var(--accent)]">
              <span className="font-mono text-xs text-[var(--subtle)]">09</span>
              Contact
            </p>
            <h2 id="contact-title" className="mt-3 text-3xl sm:text-4xl font-semibold">
              Ready to automate?
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-[var(--muted)]">
              <p>{flagship.cta}</p>
              <p>
                If you’re a business owner or team lead, tell me what’s manual, slow, error-prone, or expensive.
                I’ll design an automation system that reliably runs.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href={person.upwork} external variant="upwork">
                <SiUpwork className="h-4 w-4" aria-hidden="true" />
                Hire me on Upwork · {person.upworkBadge}
              </ButtonLink>
              <ButtonLink href="#projects" variant="secondary">
                View work
              </ButtonLink>
              <ButtonLink href={person.cv.url} download={person.cv.downloadName} variant="secondary">
                <FaDownload className="h-3.5 w-3.5" aria-hidden="true" />
                Download CV
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">Upwork {person.upworkBadge} freelancer</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] px-4 sm:px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {person.name}. Engineered with Next.js & Tailwind.
          </p>
          <p>Built for performance, accessibility, and trust.</p>
        </div>
      </footer>
    </>
  );
}
