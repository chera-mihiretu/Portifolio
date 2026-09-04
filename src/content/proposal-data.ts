/**
 * Serializable portfolio data for MCP / Upwork proposal generation.
 * No React or icon imports — safe for Node MCP servers and any LLM client.
 */

export const services = [
  {
    title: 'AI Agent Development',
    description:
      'Autonomous agents that take actions across tools, APIs, and internal systems—with guardrails, retries, and measurable outputs.',
    keywords: ['ai agent', 'langchain', 'crewai', 'llm', 'automation', 'openai', 'gemini', 'claude'],
  },
  {
    title: 'Workflow Automation',
    description:
      'From manual ops to reliable pipelines: triggers, queues, approvals, schedules, and self-healing execution for business processes.',
    keywords: ['n8n', 'zapier', 'workflow', 'automation', 'webhook', 'integration', 'make.com'],
  },
  {
    title: 'Open WebUI (Open Claw) Setup & Hardening',
    description:
      'End-to-end deployment of Open WebUI with production-grade security: SSO/OIDC authentication, role-based access control, encrypted model traffic, API key rotation, network isolation, and audit logging.',
    keywords: ['open webui', 'open claw', 'sso', 'oidc', 'private llm', 'self-hosted ai'],
  },
  {
    title: 'Intelligent Backend Systems',
    description:
      'APIs, services, and data flows designed for scale: observability, clean architecture, and performance you can trust.',
    keywords: ['backend', 'api', 'python', 'golang', 'node', 'microservices', 'rest', 'graphql'],
  },
  {
    title: 'AWS Cloud Infrastructure',
    description:
      'Secure, cost-aware cloud architecture—deployment pipelines, environments, and production reliability for automation workloads.',
    keywords: ['aws', 'cloud', 'lambda', 'ecs', 'docker', 'devops', 'terraform', 'serverless'],
  },
  {
    title: 'Security & Reliability',
    description:
      'Least-privilege integrations, audit trails, and failure-mode thinking so automation helps the business instead of risking it.',
    keywords: ['security', 'reliability', 'audit', 'monitoring', 'logging', 'guardrails'],
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & system map',
    description:
      'Identify bottlenecks, tools, owners, and failure points—then define success metrics and constraints (security, cost, time).',
  },
  {
    step: '02',
    title: 'Prototype fast, validate early',
    description:
      'A working slice of the workflow: inputs → decisions → actions. Real behavior before scaling scope.',
  },
  {
    step: '03',
    title: 'Production build & hardening',
    description:
      'Retries, idempotency, logging, alerts, and guardrails. Automation that survives messy data and edge cases.',
  },
  {
    step: '04',
    title: 'Deploy, monitor, iterate',
    description:
      'Ship with dashboards and feedback loops. Optimize outcomes, reduce operational load, expand adjacent workflows.',
  },
] as const;

export const upworkProposalGuide = {
  tone: 'Direct, confident, and outcome-focused. Sound like an engineer who ships, not a generic freelancer template.',
  structure: [
    'Hook: mirror the client problem in one sentence',
    'Relevant proof: 1–2 matched projects or deliverables with concrete outcomes',
    'Approach: short plan aligned to their stack and constraints',
    'Credibility: Top Rated badge, AWS cert, or domain fit (only what applies)',
    'CTA: invite a quick call or ask one clarifying question',
  ],
  avoid: [
    'Generic openings like "I am interested in your project"',
    'Listing every skill unrelated to the job',
    'Overpromising timeline without discovery',
    'Copy-pasting the same proposal for every job',
  ],
  defaultCta:
    'If helpful, I can share a quick system map for your workflow and outline a phased delivery plan on a short call.',
} as const;

export type ProposalProject = {
  id: string;
  name: string;
  status: string;
  description: string;
  technologies: string[];
  images: string[];
  logo: string | null;
  github: string | null;
  demo: string | null;
  apkDownload: string | null;
  clientSource?: string;
  proposalAngles: string[];
};

export type ProposalProfile = {
  /** Mirrors every content section on the portfolio website. */
  sections: {
    hero: true;
    expertise: true;
    services: true;
    process: true;
    projects: true;
    skills: true;
    education: true;
    achievements: true;
    testimonials: true;
    contact: true;
  };
  freelancer: {
    name: string;
    title: string;
    identitySentence: string;
    upworkUrl: string;
    upworkBadge: string;
    cv: {
      url: string;
      downloadName: string;
    };
    featuredProduct: {
      name: string;
      tagline: string;
      blurb: string;
      url: string;
      icon: string;
    };
    codingProfiles: Array<{ name: string; url: string }>;
  };
  contact: {
    upworkUrl: string;
    upworkBadge: string;
    cta: string;
  };
  services: typeof services;
  process: typeof processSteps;
  expertise: readonly string[];
  skills: Array<{ category: string; skills: string[] }>;
  projects: ProposalProject[];
  education: Array<{
    institution: string;
    degree: string;
    status: string;
    details: string;
  }>;
  achievements: Array<{
    title: string;
    position: string;
    description: string;
    date: string;
    category: string;
    verifyUrl?: string;
  }>;
  testimonials: Array<{
    name: string;
    quote: string;
    rating?: number;
    date?: string;
    source?: string;
    href?: string;
  }>;
  upworkProposalGuide: typeof upworkProposalGuide;
};

function projectAngles(name: string, technologies: string[]): string[] {
  const angles: Record<string, string[]> = {
    'Stock Change Notification System': [
      'Built a live n8n workflow that monitors market data and pushes real-time alerts—similar to ops automation clients need.',
      'Delivered end-to-end for an Upwork client: scraping, triggers, notifications, and reliable execution.',
    ],
    'Pill Reminder': [
      'Shipped a production mobile app with clean architecture, offline support, and reliable notifications.',
    ],
    IKnow: [
      'Designed microservices backend (Golang) with a modern web front end—good proof for platform builds.',
    ],
    'Fix-IT': [
      'AI agent pipeline: PDF ingestion → quiz generation → web app—shows LLM product integration.',
    ],
    LocalizeAI: [
      'LLM localization research project—relevant for multilingual or regional AI products.',
    ],
  };

  return (
    angles[name] ?? [
      `Delivered ${name} using ${technologies.slice(0, 3).join(', ')} with production-minded engineering.`,
    ]
  );
}

/** Build the full proposal profile from portfolio content (lazy import avoids React icons in MCP bundle). */
export async function buildProposalProfile(): Promise<ProposalProfile> {
  const portfolio = await import('./portfolio');

  return {
    sections: {
      hero: true,
      expertise: true,
      services: true,
      process: true,
      projects: true,
      skills: true,
      education: true,
      achievements: true,
      testimonials: true,
      contact: true,
    },
    freelancer: {
      name: portfolio.person.name,
      title: portfolio.person.title,
      identitySentence: portfolio.person.identitySentence,
      upworkUrl: portfolio.person.upwork,
      upworkBadge: portfolio.person.upworkBadge,
      cv: {
        url: portfolio.person.cv.url,
        downloadName: portfolio.person.cv.downloadName,
      },
      featuredProduct: {
        name: portfolio.person.featured.name,
        tagline: portfolio.person.featured.tagline,
        blurb: portfolio.person.featured.blurb,
        url: portfolio.person.featured.url,
        icon: portfolio.person.featured.icon,
      },
      codingProfiles: portfolio.person.codingProfiles.map(({ name, url }) => ({ name, url })),
    },
    contact: {
      upworkUrl: portfolio.person.upwork,
      upworkBadge: portfolio.person.upworkBadge,
      cta: `Hire me on Upwork · ${portfolio.person.upworkBadge}`,
    },
    services: [...services],
    process: [...processSteps],
    expertise: [...portfolio.expertiseBar],
    skills: portfolio.skillCategories.map(({ category, skills }) => ({ category, skills })),
    projects: portfolio.projects.map((p) => ({
      id: p.id,
      name: p.name,
      status: p.status,
      description: p.description,
      technologies: p.technologies,
      images: p.images,
      logo: p.logo,
      github: p.github,
      demo: p.demo,
      apkDownload: p.apkDownload,
      clientSource: p.clientSource,
      proposalAngles: projectAngles(p.name, p.technologies),
    })),
    education: portfolio.education.map(({ institution, degree, status, details }) => ({
      institution,
      degree,
      status,
      details,
    })),
    achievements: portfolio.achievements.map((a) => ({
      title: a.title,
      position: a.position,
      description: a.description,
      date: a.date,
      category: a.category,
      verifyUrl: a.credly ?? a.link?.url,
    })),
    testimonials: portfolio.testimonials.map(({ name, quote, rating, date, source, href }) => ({
      name,
      quote,
      rating,
      date,
      source,
      href,
    })),
    upworkProposalGuide,
  };
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+.#/\s-]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

function scoreText(haystack: string, tokens: string[]): number {
  const lower = haystack.toLowerCase();
  return tokens.reduce((score, token) => (lower.includes(token) ? score + 1 : score), 0);
}

export async function searchPortfolio(query: string, limit = 5) {
  const profile = await buildProposalProfile();
  const tokens = tokenize(query);

  const projectHits = profile.projects
    .map((project) => ({
      type: 'project' as const,
      id: project.id,
      title: project.name,
      snippet: project.description.slice(0, 220),
      score:
        scoreText(project.name, tokens) * 3 +
        scoreText(project.description, tokens) +
        scoreText(project.technologies.join(' '), tokens) * 2,
      technologies: project.technologies,
      proposalAngles: project.proposalAngles,
    }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const serviceHits = profile.services
    .map((service) => ({
      type: 'service' as const,
      title: service.title,
      snippet: service.description,
      score:
        scoreText(service.title, tokens) * 2 +
        scoreText(service.description, tokens) +
        scoreText(service.keywords.join(' '), tokens) * 2,
    }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const skillHits = profile.skills
    .flatMap((group) =>
      group.skills.map((skill) => ({
        type: 'skill' as const,
        title: skill,
        category: group.category,
        score: scoreText(skill, tokens) * 2 + scoreText(group.category, tokens),
      })),
    )
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const educationHits = profile.education
    .map((edu) => ({
      type: 'education' as const,
      title: `${edu.degree} — ${edu.institution}`,
      snippet: edu.details,
      score:
        scoreText(edu.institution, tokens) * 2 +
        scoreText(edu.degree, tokens) * 2 +
        scoreText(edu.details, tokens),
    }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const achievementHits = profile.achievements
    .map((a) => ({
      type: 'achievement' as const,
      title: `${a.title} — ${a.position}`,
      snippet: a.description,
      score:
        scoreText(a.title, tokens) * 3 +
        scoreText(a.position, tokens) * 2 +
        scoreText(a.description, tokens) +
        scoreText(a.category, tokens),
    }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const testimonialHits = profile.testimonials
    .map((t) => ({
      type: 'testimonial' as const,
      title: t.name,
      snippet: t.quote,
      score: scoreText(t.quote, tokens) + scoreText(t.source ?? '', tokens),
    }))
    .filter((hit) => hit.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return {
    query,
    projectHits,
    serviceHits,
    skillHits,
    educationHits,
    achievementHits,
    testimonialHits,
  };
}

export async function getProposalBrief(input: {
  jobTitle: string;
  jobDescription: string;
  clientNotes?: string;
}) {
  const profile = await buildProposalProfile();
  const combined = [input.jobTitle, input.jobDescription, input.clientNotes ?? ''].join('\n');
  const search = await searchPortfolio(combined, 4);

  const credibility = [
    `${profile.freelancer.upworkBadge} on Upwork (${profile.freelancer.upworkUrl})`,
    ...profile.achievements.slice(0, 3).map((a) => `${a.title} — ${a.position} (${a.date})`),
  ];

  const matchedSkills = search.skillHits.slice(0, 8).map((s) => s.title);
  const matchedServices = search.serviceHits.slice(0, 3);
  const matchedProjects = search.projectHits.slice(0, 2);

  const suggestedOpening =
    matchedProjects.length > 0
      ? `You're looking for ${input.jobTitle.toLowerCase()}—I've shipped similar work (${matchedProjects.map((p) => p.title).join(', ')}) with a focus on reliable automation and clear delivery.`
      : `You're looking for ${input.jobTitle.toLowerCase()}—I build autonomous agents, workflows, and backend systems for teams that need automation without adding headcount.`;

  return {
    jobTitle: input.jobTitle,
    freelancer: profile.freelancer,
    suggestedOpening,
    matchedProjects,
    matchedServices,
    matchedSkills,
    credibility,
    process: profile.process,
    proposalGuide: profile.upworkProposalGuide,
    featuredProduct: profile.freelancer.featuredProduct,
    testimonials: profile.testimonials.slice(0, 2),
  };
}
