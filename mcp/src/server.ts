#!/usr/bin/env node
/**
 * Optional stdio MCP server for clients that don't use HTTP.
 * Requires: cd mcp && npm install
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

import {
  callMcpTool,
  MCP_RESOURCES,
  MCP_SERVER_INFO,
  readMcpResource,
} from '../../src/mcp/portfolio-mcp.ts';

const server = new McpServer({
  name: MCP_SERVER_INFO.name,
  version: MCP_SERVER_INFO.version,
});

for (const resource of MCP_RESOURCES) {
  server.resource(
    resource.name,
    resource.uri,
    {
      description: resource.description,
      mimeType: resource.mimeType,
    },
    async () => readMcpResource(resource.uri),
  );
}

server.tool(
  'get_full_profile',
  'Return ALL website content as JSON.',
  {},
  async () => callMcpTool('get_full_profile', {}),
);

server.tool(
  'get_section',
  'Return one website section: hero | expertise | services | process | projects | skills | education | achievements | testimonials | contact | proposal-guide | all.',
  {
    section: z.string(),
  },
  async ({ section }) => callMcpTool('get_section', { section }),
);

server.tool(
  'search_portfolio',
  'Search projects, services, skills, education, achievements, and testimonials by keyword.',
  {
    query: z.string().describe('Keywords from the Upwork job post or client brief'),
    limit: z.number().int().min(1).max(10).optional(),
  },
  async ({ query, limit }) => callMcpTool('search_portfolio', { query, limit }),
);

server.tool(
  'get_proposal_brief',
  'Build a structured Upwork proposal brief from a job title and description.',
  {
    job_title: z.string(),
    job_description: z.string(),
    client_notes: z.string().optional(),
  },
  async (args) => callMcpTool('get_proposal_brief', args),
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error('Portfolio MCP server failed:', error);
  process.exit(1);
});
