#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "cwd=$(pwd)"
echo "node=$(command -v node || true)"
echo "npm=$(command -v npm || true)"
# Prefer Linux node if available via nvm
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1090
  . "$HOME/.nvm/nvm.sh"
fi
# Strip Windows PATH npm if Linux node exists
if command -v node >/dev/null 2>&1 && [[ "$(command -v node)" != /mnt/c/* ]]; then
  echo "Using Linux node: $(command -v node) $(node -v)"
else
  echo "WARNING: may be using Windows node via /mnt/c"
fi
npm install @modelcontextprotocol/sdk@1.12.1 zod@3.24.2 --save
test -f node_modules/@modelcontextprotocol/sdk/package.json
echo "SDK_OK"
test -f node_modules/zod/package.json
echo "ZOD_OK"
ls node_modules/@modelcontextprotocol/sdk/dist/esm/server/mcp.js
echo "DONE"
