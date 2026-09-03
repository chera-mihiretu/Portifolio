/** Shared MCP auth: Bearer token from env (local default for Cursor). */

export const MCP_AUTH_TOKEN =
  process.env.MCP_AUTH_TOKEN?.trim() || 'portfolio-mcp-local-dev-token';

export function extractBearerToken(request: Request): string | null {
  const header = request.headers.get('authorization') || request.headers.get('Authorization');
  if (!header) return null;
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

export function isAuthorized(request: Request): boolean {
  const token = extractBearerToken(request);
  return Boolean(token && token === MCP_AUTH_TOKEN);
}

export function unauthorizedResponse() {
  return new Response(
    JSON.stringify({
      error: 'unauthorized',
      message: 'Missing or invalid Bearer token. Add Authorization: Bearer <MCP_AUTH_TOKEN> in mcp.json headers.',
    }),
    {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
        'WWW-Authenticate': 'Bearer realm="portfolio-mcp"',
        'Cache-Control': 'no-store',
      },
    },
  );
}
