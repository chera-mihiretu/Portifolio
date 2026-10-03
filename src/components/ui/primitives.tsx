import type { ReactNode } from 'react';

/** Shared, static building blocks so every section reads the same way. */

export function Section({
  id,
  index,
  label,
  title,
  intro,
  aside,
  children,
  tone = 'plain',
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  tone?: 'plain' | 'tinted';
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        'border-t border-[var(--border)] px-4 sm:px-6 py-16 sm:py-24',
        tone === 'tinted' ? 'bg-[var(--surface-2)]' : '',
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 sm:mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-sm font-medium text-[var(--accent)]">
              <span className="font-mono text-xs text-[var(--subtle)]">{index}</span>
              {label}
            </p>
            <h2 id={`${id}-title`} className="mt-3 text-3xl sm:text-4xl font-semibold">
              {title}
            </h2>
            {intro ? <p className="mt-4 max-w-2xl text-lg text-[var(--muted)]">{intro}</p> : null}
          </div>
          {aside ? <div className="lg:col-span-5 lg:justify-self-end">{aside}</div> : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function Card({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li' | 'figure';
}) {
  return (
    <Tag className={`rounded-xl border border-[var(--border)] bg-[var(--surface)] ${className}`}>
      {children}
    </Tag>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-[13px] leading-none text-[var(--foreground)]">
      {children}
    </span>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" aria-hidden="true" />
      {children}
    </span>
  );
}

type ButtonVariant = 'primary' | 'secondary' | 'upwork';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--foreground)] text-[var(--background)] hover:opacity-90',
  secondary:
    'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-2)]',
  upwork: 'bg-[var(--upwork)] text-white hover:opacity-90',
};

export function ButtonLink({
  href,
  children,
  variant = 'secondary',
  external = false,
  download,
  size = 'md',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  download?: string | boolean;
  size?: 'sm' | 'md';
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: download === true ? '' : download } : {})}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
        size === 'sm' ? 'h-9 px-3 text-sm' : 'h-11 px-5 text-[15px]',
        buttonStyles[variant],
      ].join(' ')}
    >
      {children}
    </a>
  );
}
