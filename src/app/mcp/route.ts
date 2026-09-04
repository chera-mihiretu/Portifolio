import { isAuthorized, MCP_AUTH_TOKEN, unauthorizedResponse } from '@/mcp/auth';
import {
  callMcpTool,
  MCP_RESOURCES,
  MCP_SERVER_INFO,
  MCP_TOOLS,
  readMcpResource,
} from '@/mcp/portfolio-mcp';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type JsonRpcId = string | number | null;

type JsonRpcRequest = {
  jsonrpc?: string;
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
};

function jsonResponse(body: unknown, status = 200, extraHeaders?: HeadersInit) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}

function ok(id: JsonRpcId | undefined, result: unknown) {
  return { jsonrpc: '2.0', id: id ?? null, result };
}

function fail(id: JsonRpcId | undefined, code: number, message: string) {
  return { jsonrpc: '2.0', id: id ?? null, error: { code, message } };
}

function requireAuth(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorizedResponse();
  }
  return null;
}

async function handleRpc(message: JsonRpcRequest) {
  const { id, method, params = {} } = message;

  if (id === undefined && method?.startsWith('notifications/')) {
    return null;
  }

  if (!method) {
    return fail(id, -32600, 'Invalid Request: missing method');
  }

  try {
    switch (method) {
      case 'initialize':
        return ok(id, {
          protocolVersion:
            typeof params.protocolVersion === 'string'
              ? params.protocolVersion
              : '2025-03-26',
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false },
          },
          serverInfo: MCP_SERVER_INFO,
          instructions:
            'Use get_proposal_brief with an Upwork job title and description to draft proposal-ready briefs grounded in Chera Mihiretu’s portfolio. Prefer search_portfolio for keyword matching.',
        });

      case 'ping':
        return ok(id, {});

      case 'tools/list':
        return ok(id, { tools: MCP_TOOLS });

      case 'tools/call': {
        const name = String(params.name ?? '');
        const args =
          params.arguments && typeof params.arguments === 'object'
            ? (params.arguments as Record<string, unknown>)
            : {};
        const result = await callMcpTool(name, args);
        return ok(id, result);
      }

      case 'resources/list':
        return ok(id, { resources: MCP_RESOURCES });

      case 'resources/read': {
        const uri = String(params.uri ?? '');
        const result = await readMcpResource(uri);
        return ok(id, result);
      }

      default:
        return fail(id, -32601, `Method not found: ${method}`);
    }
  } catch (error) {
    const messageText = error instanceof Error ? error.message : String(error);
    return fail(id, -32000, messageText);
  }
}

export async function GET(request: Request) {
  const denied = requireAuth(request);
  if (denied) return denied;

  return jsonResponse({
    name: MCP_SERVER_INFO.name,
    version: MCP_SERVER_INFO.version,
    transport: 'streamable-http',
    authenticated: true,
    token: MCP_AUTH_TOKEN,
    endpoints: {
      mcp: '/mcp',
    },
    tools: MCP_TOOLS.map((t) => t.name),
    resources: MCP_RESOURCES.map((r) => r.uri),
    cursorMcpJson: {
      mcpServers: {
        portfolio: {
          url: 'http://localhost:3000/mcp',
          headers: {
            Authorization: `Bearer ${MCP_AUTH_TOKEN}`,
          },
        },
      },
    },
  });
}

export async function POST(request: Request) {
  const denied = requireAuth(request);
  if (denied) return denied;

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse(fail(null, -32700, 'Parse error: invalid JSON'), 400);
  }

  const messages = Array.isArray(payload) ? payload : [payload];
  const results: unknown[] = [];

  for (const message of messages) {
    if (!message || typeof message !== 'object') {
      results.push(fail(null, -32600, 'Invalid Request'));
      continue;
    }
    const result = await handleRpc(message as JsonRpcRequest);
    if (result !== null) {
      results.push(result);
    }
  }

  if (results.length === 0) {
    return new Response(null, { status: 202 });
  }

  const body = Array.isArray(payload) ? results : results[0];
  return jsonResponse(body);
}

export async function DELETE(request: Request) {
  const denied = requireAuth(request);
  if (denied) return denied;
  return jsonResponse({ ok: true });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Accept, Authorization, MCP-Protocol-Version, Mcp-Session-Id',
    },
  });
}
