# Open MCP Registry

A lightweight, community-maintained registry and index of Model Context Protocol (MCP) servers.

[![Validate Registry](https://github.com/slimepit2011-afk/open-mcp-registry/actions/workflows/validate-pr.yml/badge.svg)](https://github.com/slimepit2011-afk/open-mcp-registry/actions)
[![Contributors Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 Purpose

As the Model Context Protocol (MCP) rapidly becomes the standard for connecting LLM agents (Claude Code, Cursor, Roo Code, etc.) with external developer tools, discovery remains scattered.

This repository serves as an open, machine-readable JSON index (`registry.json`) and human-friendly directory for discovering and submitting community MCP servers.

---

## 📋 Registry Entries

| Name | Category | Transport | Repository |
| :--- | :--- | :--- | :--- |
| **Playwright Browser** | Browser Automation | stdio | [executeautomation/playwright-mcp-server](https://github.com/executeautomation/playwright-mcp-server) |
| **PostgreSQL Server** | Database | stdio | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) |
| **SQLite Inspector** | Database | stdio | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) |
| **Context Memory Graph** | Persistent State | stdio | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) |
| **Secure Filesystem** | System Tools | stdio | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) |

---

## 🚀 How to Add Your MCP Server

Adding your server takes less than 2 minutes:

1. Fork this repository.
2. Add your server object into `registry.json`:
   ```json
   {
     "id": "your-server-id",
     "name": "Your MCP Server Name",
     "category": "database | developer-tools | web | ai",
     "description": "Short summary of what your server does.",
     "repository": "https://github.com/your-username/your-repo",
     "protocol": "stdio"
   }
   ```
3. Test locally: `npm run validate`
4. Submit a Pull Request. Our CI will automatically verify your JSON syntax, and maintainers will merge within 24 hours!

Detailed instructions can be found in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📄 License

Distributed under the MIT License.
