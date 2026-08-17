# Chera Mihiretu — Portfolio

Personal site for my AI automation, backend, and shipped-product work. Built as a single React app at the repository root with Next.js.

## Requirements

- Node.js 20 (`20.x`, see `.nvmrc`)
- pnpm 10 (this repo uses one lockfile: `pnpm-lock.yaml`)

```bash
nvm use
pnpm install --frozen-lockfile
```

## Scripts

```bash
pnpm dev      # local site at http://localhost:3000
pnpm test     # Vitest, no credentials or external services
pnpm build    # production build
pnpm lint     # Next.js ESLint
```

Tests cover portfolio content invariants and the helpers used by the projects section (featured/rest split, gallery wrap, outcome-line copy).
