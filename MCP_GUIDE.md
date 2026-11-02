# 🚀 NGC Library Model Context Protocol (MCP) Server Guide

> **The Model Context Protocol (MCP)** is an open standard that enables AI coding assistants (such as Cursor IDE, Claude Desktop, Google Antigravity, Windsurf, and Cline) to integrate directly with the **NGC Component Library**.
>
> When connected via MCP, AI assistants understand the full suite of **63+ UI components, Angular inputs, outputs, HTML templates, TypeScript examples, and Design Tokens** to generate 100% accurate, hallucination-free code.

---

## 📌 1. Built-in Tools Provided by the MCP Server

The NGC MCP Server exposes 5 standardized tools:

| Tool Name | Description | Parameters |
|---|---|---|
| `list_components` | Lists all 63 UI components categorized by functional groups | `category` *(optional)*: `General`, `Layout`, `Navigation`, `Data Entry`, `Data Display`, `Feedback` |
| `get_component_doc` | Retrieves complete API spec, inputs, outputs, HTML template, and TypeScript examples | `name` *(required)*: component name (e.g., `Button`, `Dialog`, `Data Table`, `Card`, `Date Picker`, ...) |
| `search_components` | Intelligently queries components by functional intent or keyword | `query` *(required)*: e.g., `"modal popup"`, `"calendar date"`, `"toast notification"` |
| `get_design_tokens` | Returns CSS custom properties, primitive palettes, and semantic tokens | `section` *(optional)*: `all`, `color`, `spacing` |
| `generate_screen_template` | Generates complete, production-ready Angular screens | `type` *(required)*: `login`, `dashboard`, `settings`, `table-crud` |

---

## 🛠 2. Quick Local Verification

The MCP server is located at `mcp-server/index.mjs`. It is built with zero external dependencies and runs natively on Node.js 18+:

```bash
# Test starting the server in terminal
node mcp-server/index.mjs
```
*When you see `NGC Library MCP Server running on stdio...`, the server is running and awaiting JSON-RPC messages.*

---

## 🔌 3. Setup Instructions for AI Clients

### 🅰️ Cursor IDE Integration

#### Option 1: Workspace Configuration (Recommended)
This repository already includes `.cursor/mcp.json`. Cursor will automatically detect and activate the MCP server when opening this project directory:

```json
{
  "mcpServers": {
    "ngc-library": {
      "command": "node",
      "args": ["/Users/congphu2210/Desktop/Phu/ngc-library-v22/mcp-server/index.mjs"]
    }
  }
}
```

#### Option 2: Global Configuration via Cursor Settings
1. Open **Cursor Settings** (`Cmd + ,` on macOS, or `Ctrl + ,` on Windows).
2. Go to **Features** -> **MCP Servers**.
3. Click **+ Add New MCP Server**:
   - **Name**: `ngc-library`
   - **Type**: `command`
   - **Command**: `node /Users/congphu2210/Desktop/Phu/ngc-library-v22/mcp-server/index.mjs`
4. The green status light (🟢 Connected) indicates 5 tools are successfully loaded!

---

### 🅱️ Claude Desktop Integration

1. Open your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the following entry:
```json
{
  "mcpServers": {
    "ngc-library": {
      "command": "node",
      "args": [
        "/Users/congphu2210/Desktop/Phu/ngc-library-v22/mcp-server/index.mjs"
      ]
    }
  }
}
```
3. Restart Claude Desktop. The 🔨 (Tools) icon will appear in the chat interface.

---

### 🅲 Google Antigravity / Gemini CLI Integration

Add the server definition to `~/.gemini/antigravity/mcp_servers.json`:

```json
{
  "mcpServers": {
    "ngc-library": {
      "command": "node",
      "args": [
        "/Users/congphu2210/Desktop/Phu/ngc-library-v22/mcp-server/index.mjs"
      ]
    }
  }
}
```

---

### 🅳 Windsurf IDE (Codeium) Integration

Add the server configuration to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "ngc-library": {
      "command": "node",
      "args": [
        "/Users/congphu2210/Desktop/Phu/ngc-library-v22/mcp-server/index.mjs"
      ]
    }
  }
}
```

---

## 💬 4. Sample Prompts

Once connected, ask the AI assistant directly using natural language:

### Prompt 1: Component Discovery
> *"Does NGC Library have a component to display tabular data with sorting and pagination? Show me code examples."*
👉 *The AI automatically invokes `search_components` and `get_component_doc` to produce exact `ngc-table` code.*

### Prompt 2: Screen Generation
> *"Generate an Angular authentication screen using NGC Library with Email, Password, Remember Me checkbox, and a Submit button."*
👉 *The AI invokes `generate_screen_template` or assembles verified snippets from `ngc-form-field`, `ngc-card`, and `ngc-button`.*

### Prompt 3: Design Tokens & Styling
> *"What are the primary color palette and spacing variables defined in the NGC Library design tokens?"*
👉 *The AI invokes `get_design_tokens` and returns verified CSS variables (`--ngc-color-...`, `--ngc-spacing-...`).*

---

## 📦 5. (Optional) Publishing as a Global npm Package

To let collaborators use the MCP server via `npx` without cloning this repository:

```bash
cd mcp-server

# Log in to npm registry
npm login

# Publish publicly
npm publish --access public
```

After publishing, the MCP client configuration becomes simply:
```json
{
  "mcpServers": {
    "ngc-library": {
      "command": "npx",
      "args": ["-y", "ngc-library-mcp"]
    }
  }
}
```

---

## 📁 MCP File Structure

```text
ngc-library-v22/
├── MCP_GUIDE.md           <-- This documentation guide
├── .cursor/mcp.json       <-- Cursor IDE integration manifest
└── mcp-server/            <-- Zero-dependency MCP server
    ├── package.json       <-- npm package & binary configuration
    ├── index.mjs          <-- JSON-RPC stdio protocol handler
    └── data/
        ├── components.json <-- Component definitions, inputs, outputs, snippets
        └── tokens.json     <-- Design system tokens & CSS variables
```
