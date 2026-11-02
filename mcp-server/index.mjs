#!/usr/bin/env node

/**
 * NGC Library Model Context Protocol (MCP) Server
 * Allows AI coding assistants (Claude Desktop, Cursor, Antigravity, Windsurf, Cline)
 * to search, inspect and generate Angular code using the NGC Component Library.
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load component database & design tokens
const componentsPath = path.join(__dirname, 'data', 'components.json');
const tokensPath = path.join(__dirname, 'data', 'tokens.json');

let components = [];
let tokens = {};

try {
  if (fs.existsSync(componentsPath)) {
    components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));
  }
  if (fs.existsSync(tokensPath)) {
    tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  }
} catch (err) {
  process.stderr.write(`Error loading data: ${err.message}\n`);
}

// Tool definitions
const TOOLS = [
  {
    name: 'list_components',
    description: 'List all available UI components in NGC Library, optionally filtered by category (General, Layout, Navigation, Data Entry, Data Display, Feedback).',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          description: 'Filter category: General, Layout, Navigation, Data Entry, Data Display, Feedback'
        }
      }
    }
  },
  {
    name: 'get_component_doc',
    description: 'Get full API documentation, inputs, outputs, Angular template and TypeScript code snippets for a specific NGC component.',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Component name (e.g. Button, Alert, Card, Data Table, Dialog, Date Picker, Form Field, Tabs)'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'search_components',
    description: 'Search NGC Library components by feature, use-case, or keyword (e.g. modal popup, date selection, toast alerts, dark mode, pagination).',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Keyword, intent, or use-case description'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'get_design_tokens',
    description: 'Get NGC Design System tokens including colors, CSS variables, typography, and dark mode tokens.',
    inputSchema: {
      type: 'object',
      properties: {
        section: {
          type: 'string',
          description: 'Filter token section: all, color, spacing',
          enum: ['all', 'color', 'spacing']
        }
      }
    }
  },
  {
    name: 'generate_screen_template',
    description: 'Generate a complete, copy-pasteable Angular screen template (HTML + TypeScript) composed of NGC Library components.',
    inputSchema: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          description: 'Template type to generate',
          enum: ['login', 'dashboard', 'settings', 'table-crud']
        }
      },
      required: ['type']
    }
  }
];

// Screen template generator helper
function generateScreen(type) {
  switch (type) {
    case 'login':
      return {
        title: 'NGC Login Screen Template',
        html: `<div class="login-container" style="max-width: 400px; margin: 40px auto; padding: 24px;">
  <ngc-card [elevation]="2">
    <div class="ngc-card__header">
      <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Welcome Back</h2>
      <p style="margin: 4px 0 0; color: #71717a; font-size: 13px;">Enter your credentials to continue</p>
    </div>
    
    <div class="ngc-card__body" style="display: flex; flex-direction: column; gap: 16px; padding: 20px 0;">
      <ngc-form-field label="Email Address" [required]="true">
        <input ngcInput type="email" [(ngModel)]="email" placeholder="user@example.com" />
      </ngc-form-field>

      <ngc-form-field label="Password" [required]="true">
        <input ngcInput type="password" [(ngModel)]="password" placeholder="••••••••" />
      </ngc-form-field>

      <div style="display: flex; justify-content: space-between; align-items: center;">
        <ngc-checkbox [(ngModel)]="rememberMe">Remember me</ngc-checkbox>
        <a href="javascript:void(0)" style="font-size: 12px; color: #2563eb; text-decoration: none;">Forgot password?</a>
      </div>
    </div>

    <div class="ngc-card__footer" style="display: flex; flex-direction: column; gap: 10px;">
      <button ngcButton color="primary" style="width: 100%;" (click)="onLogin()">Sign In</button>
      <button ngcOutlineButton color="default" style="width: 100%;" (click)="onGoogleLogin()">
        <ngc-icon name="user" size="16px"></ngc-icon>
        <span style="margin-left: 8px;">Continue with Google</span>
      </button>
    </div>
  </ngc-card>
</div>`,
        ts: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcCardModule, NgcButtonModule, NgcFormFieldModule, NgcCheckboxModule, NgcIconModule, NgcToastService } from 'ngc-library';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NgcCardModule, NgcButtonModule, NgcFormFieldModule, NgcCheckboxModule, NgcIconModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;

  constructor(private toast: NgcToastService) {}

  onLogin() {
    if (!this.email || !this.password) {
      this.toast.show('Warning', 'Please enter email and password', { type: 'warning' });
      return;
    }
    this.toast.show('Success', 'Login successful!', { type: 'success' });
  }

  onGoogleLogin() {
    console.log('Login with Google');
  }
}`
      };

    case 'dashboard':
      return {
        title: 'NGC Analytics Dashboard Screen Template',
        html: `<div class="dashboard-page" style="padding: 24px; max-width: 1200px; margin: 0 auto;">
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
    <div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 700;">Dashboard Overview</h1>
      <p style="margin: 4px 0 0; color: #71717a; font-size: 13px;">Real-time metrics and platform analytics</p>
    </div>
    <div style="display: flex; gap: 10px;">
      <ngc-date-picker [(ngModel)]="dateRange" placeholder="Select period"></ngc-date-picker>
      <button ngcButton color="primary">Export Report</button>
    </div>
  </div>

  <!-- Metric Stat Cards -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
    <ngc-card>
      <div class="ngc-card__body">
        <div style="font-size: 12px; color: #71717a; text-transform: uppercase;">Total Revenue</div>
        <div style="font-size: 28px; font-weight: 700; margin: 6px 0;">$48,290</div>
        <ngc-badge color="success" content="+12.5%"></ngc-badge>
      </div>
    </ngc-card>

    <ngc-card>
      <div class="ngc-card__body">
        <div style="font-size: 12px; color: #71717a; text-transform: uppercase;">Active Subscriptions</div>
        <div style="font-size: 28px; font-weight: 700; margin: 6px 0;">2,410</div>
        <ngc-badge color="primary" content="+8.2%"></ngc-badge>
      </div>
    </ngc-card>

    <ngc-card>
      <div class="ngc-card__body">
        <div style="font-size: 12px; color: #71717a; text-transform: uppercase;">System Storage</div>
        <div style="font-size: 28px; font-weight: 700; margin: 6px 0;">76%</div>
        <ngc-progress-bar [value]="76" mode="determinate"></ngc-progress-bar>
      </div>
    </ngc-card>
  </div>
</div>`,
        ts: `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgcCardModule, NgcButtonModule, NgcBadgeModule, NgcProgressBarModule, NgcDatePickerModule } from 'ngc-library';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NgcCardModule, NgcButtonModule, NgcBadgeModule, NgcProgressBarModule, NgcDatePickerModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  dateRange = null;
}`
      };

    default:
      return {
        title: 'NGC Screen Template',
        html: `<!-- NGC Screen Template for ${type} -->`,
        ts: `// Component definition for ${type}`
      };
  }
}

// Tool execution logic
function executeTool(name, args = {}) {
  switch (name) {
    case 'list_components': {
      const category = args.category?.toLowerCase();
      let filtered = components;
      if (category) {
        filtered = components.filter(c => c.category.toLowerCase() === category);
      }

      const listMarkdown = filtered.map(c => 
        `### ${c.name} (\`${c.category}\`)\n` +
        `- **Module:** \`${c.module}\`\n` +
        `- **Selector:** \`${c.selector}\`\n` +
        `- **Description:** ${c.description}\n`
      ).join('\n');

      return {
        content: [
          {
            type: 'text',
            text: `## NGC Component Catalog (${filtered.length} components)\n\n${listMarkdown}`
          }
        ]
      };
    }

    case 'get_component_doc': {
      const queryName = (args.name || '').trim().toLowerCase();
      const comp = components.find(c => c.name.toLowerCase() === queryName || c.name.toLowerCase().includes(queryName));

      if (!comp) {
        return {
          content: [
            {
              type: 'text',
              text: `Component "${args.name}" not found in NGC Library catalog. Try using \`list_components\` or \`search_components\`.`
            }
          ]
        };
      }

      let doc = `# ${comp.name} Component Documentation\n\n`;
      doc += `**Category:** ${comp.category} | **Module:** \`${comp.module}\`\n`;
      doc += `**Selector:** \`${comp.selector}\`\n\n`;
      doc += `### Description\n${comp.description}\n\n`;

      if (comp.inputs && comp.inputs.length > 0) {
        doc += `### Inputs (@Input)\n| Name | Type | Default | Description |\n|---|---|---|---|\n`;
        comp.inputs.forEach(inp => {
          doc += `| \`${inp.name}\` | \`${inp.type}\` | \`${inp.default}\` | ${inp.description} |\n`;
        });
        doc += '\n';
      }

      if (comp.outputs && comp.outputs.length > 0) {
        doc += `### Outputs (@Output)\n| Name | Type | Description |\n|---|---|---|\n`;
        comp.outputs.forEach(out => {
          doc += `| \`${out.name}\` | \`${out.type}\` | ${out.description} |\n`;
        });
        doc += '\n';
      }

      doc += `### HTML Template Example\n\`\`\`html\n${comp.templateExample}\n\`\`\`\n\n`;
      doc += `### TypeScript Component Example\n\`\`\`typescript\n${comp.tsExample}\n\`\`\`\n`;

      return {
        content: [{ type: 'text', text: doc }]
      };
    }

    case 'search_components': {
      const q = (args.query || '').toLowerCase();
      const matches = components.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.selector.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No components matching query "${args.query}".`
            }
          ]
        };
      }

      const res = matches.map(c => 
        `- **${c.name}** (\`${c.category}\`): ${c.description} (Import: \`${c.module}\`)`
      ).join('\n');

      return {
        content: [
          {
            type: 'text',
            text: `### Found ${matches.length} matching components for "${args.query}":\n\n${res}`
          }
        ]
      };
    }

    case 'get_design_tokens': {
      const section = args.section || 'all';
      let outputTokens = tokens;
      if (section === 'color' && tokens.primitive?.color) {
        outputTokens = tokens.primitive.color;
      }
      return {
        content: [
          {
            type: 'text',
            text: `### NGC Design System Tokens (${section})\n\n\`\`\`json\n${JSON.stringify(outputTokens, null, 2)}\n\`\`\``
          }
        ]
      };
    }

    case 'generate_screen_template': {
      const res = generateScreen(args.type);
      const text = `## ${res.title}\n\n### HTML Template\n\`\`\`html\n${res.html}\n\`\`\`\n\n### TypeScript Component\n\`\`\`typescript\n${res.ts}\n\`\`\``;
      return {
        content: [{ type: 'text', text }]
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// JSON-RPC stdio message processor
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function sendResponse(id, result, error = null) {
  const response = { jsonrpc: '2.0', id };
  if (error) {
    response.error = error;
  } else {
    response.result = result;
  }
  process.stdout.write(JSON.stringify(response) + '\n');
}

rl.on('line', (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  try {
    const msg = JSON.parse(trimmed);

    // Notifications (no id)
    if (msg.id === undefined) {
      if (msg.method === 'notifications/initialized') {
        process.stderr.write('NGC MCP Client initialized successfully\n');
      }
      return;
    }

    switch (msg.method) {
      case 'initialize':
        sendResponse(msg.id, {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {},
            resources: {}
          },
          serverInfo: {
            name: 'ngc-library-mcp',
            version: '1.0.0'
          }
        });
        break;

      case 'ping':
        sendResponse(msg.id, {});
        break;

      case 'tools/list':
        sendResponse(msg.id, { tools: TOOLS });
        break;

      case 'tools/call': {
        const { name, arguments: toolArgs } = msg.params || {};
        try {
          const result = executeTool(name, toolArgs);
          sendResponse(msg.id, result);
        } catch (err) {
          sendResponse(msg.id, {
            content: [{ type: 'text', text: `Error: ${err.message}` }],
            isError: true
          });
        }
        break;
      }

      case 'resources/list':
        sendResponse(msg.id, {
          resources: [
            {
              uri: 'ngc://components/catalog',
              name: 'NGC Component Catalog',
              mimeType: 'application/json'
            },
            {
              uri: 'ngc://tokens/design-system',
              name: 'NGC Design System Tokens',
              mimeType: 'application/json'
            }
          ]
        });
        break;

      case 'resources/read': {
        const uri = msg.params?.uri;
        if (uri === 'ngc://components/catalog') {
          sendResponse(msg.id, {
            contents: [
              {
                uri,
                mimeType: 'application/json',
                text: JSON.stringify(components, null, 2)
              }
            ]
          });
        } else if (uri === 'ngc://tokens/design-system') {
          sendResponse(msg.id, {
            contents: [
              {
                uri,
                mimeType: 'application/json',
                text: JSON.stringify(tokens, null, 2)
              }
            ]
          });
        } else {
          sendResponse(msg.id, null, { code: -32602, message: `Resource not found: ${uri}` });
        }
        break;
      }

      default:
        sendResponse(msg.id, null, { code: -32601, message: `Method not found: ${msg.method}` });
        break;
    }
  } catch (e) {
    process.stderr.write(`Failed to parse line: ${line} (${e.message})\n`);
  }
});

process.stderr.write('NGC Library MCP Server running on stdio...\n');

