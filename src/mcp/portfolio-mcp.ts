import {
  buildProposalProfile,
  getProposalBrief,
  searchPortfolio,
} from '@/content/proposal-data';

export const MCP_SERVER_INFO = {
  name: 'portfolio-upwork',
  version: '1.0.0',
} as const;

/** One resource per website content section (+ proposal guide). */
export const MCP_RESOURCES = [
  {
    uri: 'portfolio://profile',
    name: 'profile',
    description:
      'Complete website content dump: hero, expertise, services, process, projects, skills, education, achievements, testimonials, contact.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://hero',
    name: 'hero',
    description: 'Hero / freelancer identity, Upwork badge, featured product, coding profiles, CV.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://expertise',
    name: 'expertise',
    description: 'Expertise bar items from the website.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://services',
    name: 'services',
    description: 'Services section with keywords for job matching.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://process',
    name: 'process',
    description: 'How I work / delivery process steps.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://projects',
    name: 'projects',
    description: 'All portfolio projects with tech, links, images, and proposal angles.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://skills',
    name: 'skills',
    description: 'Skill categories from the Skills section.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://education',
    name: 'education',
    description: 'Education section (ASTU, A2SV, ALX).',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://achievements',
    name: 'achievements',
    description: 'Achievements section (Upwork Top Rated, AWS certs, contests).',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://testimonials',
    name: 'testimonials',
    description: 'Testimonials / reviews section.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://contact',
    name: 'contact',
    description: 'Contact / hire CTA and Upwork link.',
    mimeType: 'application/json',
  },
  {
    uri: 'portfolio://proposal-guide',
    name: 'proposal-guide',
    description: 'Tone, structure, and anti-patterns for writing Upwork proposals.',
    mimeType: 'application/json',
  },
] as const;

export const MCP_TOOLS = [
  {
    name: 'get_full_profile',
    description:
      'Return ALL website content as JSON (hero, expertise, services, process, projects, skills, education, achievements, testimonials, contact). Prefer this when you need the full portfolio.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'get_section',
    description:
      'Return one website section by name: hero | expertise | services | process | projects | skills | education | achievements | testimonials | contact | proposal-guide | all.',
    inputSchema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
          description:
            'Section name: hero, expertise, services, process, projects, skills, education, achievements, testimonials, contact, proposal-guide, or all',
        },
      },
      required: ['section'],
    },
  },
  {
    name: 'search_portfolio',
    description:
      'Search across projects, services, skills, education, achievements, and testimonials by keyword.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Keywords from the Upwork job post or client brief',
        },
        limit: {
          type: 'number',
          description: 'Max results per category (default 5)',
          minimum: 1,
          maximum: 10,
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_proposal_brief',
    description:
      'Build a structured Upwork proposal brief from a job title and description using matched website content.',
    inputSchema: {
      type: 'object',
      properties: {
        job_title: { type: 'string', description: 'Upwork job title' },
        job_description: { type: 'string', description: 'Full job description from Upwork' },
        client_notes: {
          type: 'string',
          description: 'Extra context: budget, timeline, stack preferences',
        },
      },
      required: ['job_title', 'job_description'],
    },
  },
] as const;

function textResult(data: unknown) {
  return {
    content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }],
  };
}

function resourcePayload(uri: string, data: unknown) {
  return {
    contents: [
      {
        uri,
        mimeType: 'application/json',
        text: JSON.stringify(data, null, 2),
      },
    ],
  };
}

export async function getWebsiteSection(section: string) {
  const profile = await buildProposalProfile();
  const key = section.trim().toLowerCase();

  switch (key) {
    case 'all':
    case 'profile':
      return profile;
    case 'hero':
      return profile.freelancer;
    case 'expertise':
      return profile.expertise;
    case 'services':
      return profile.services;
    case 'process':
      return profile.process;
    case 'projects':
      return profile.projects;
    case 'skills':
      return profile.skills;
    case 'education':
      return profile.education;
    case 'achievements':
      return profile.achievements;
    case 'testimonials':
      return profile.testimonials;
    case 'contact':
      return profile.contact;
    case 'proposal-guide':
    case 'proposal_guide':
      return profile.upworkProposalGuide;
    default:
      throw new Error(
        `Unknown section "${section}". Use: hero, expertise, services, process, projects, skills, education, achievements, testimonials, contact, proposal-guide, or all.`,
      );
  }
}

export async function readMcpResource(uri: string) {
  const profile = await buildProposalProfile();

  switch (uri) {
    case 'portfolio://profile':
      return resourcePayload(uri, profile);
    case 'portfolio://hero':
      return resourcePayload(uri, profile.freelancer);
    case 'portfolio://expertise':
      return resourcePayload(uri, profile.expertise);
    case 'portfolio://services':
      return resourcePayload(uri, profile.services);
    case 'portfolio://process':
      return resourcePayload(uri, profile.process);
    case 'portfolio://projects':
      return resourcePayload(uri, profile.projects);
    case 'portfolio://skills':
      return resourcePayload(uri, profile.skills);
    case 'portfolio://education':
      return resourcePayload(uri, profile.education);
    case 'portfolio://achievements':
      return resourcePayload(uri, profile.achievements);
    case 'portfolio://testimonials':
      return resourcePayload(uri, profile.testimonials);
    case 'portfolio://contact':
      return resourcePayload(uri, profile.contact);
    case 'portfolio://proposal-guide':
      return resourcePayload(uri, profile.upworkProposalGuide);
    default:
      throw new Error(`Unknown resource: ${uri}`);
  }
}

export async function callMcpTool(name: string, args: Record<string, unknown> = {}) {
  switch (name) {
    case 'get_full_profile':
      return textResult(await buildProposalProfile());
    case 'get_section':
      return textResult(await getWebsiteSection(String(args.section ?? 'all')));
    case 'search_portfolio': {
      const query = String(args.query ?? '');
      const limit = typeof args.limit === 'number' ? args.limit : 5;
      return textResult(await searchPortfolio(query, limit));
    }
    case 'get_proposal_brief': {
      return textResult(
        await getProposalBrief({
          jobTitle: String(args.job_title ?? ''),
          jobDescription: String(args.job_description ?? ''),
          clientNotes: args.client_notes ? String(args.client_notes) : undefined,
        }),
      );
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
