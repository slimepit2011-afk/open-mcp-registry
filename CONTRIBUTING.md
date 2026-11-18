# Contributing to the Open MCP Registry

Thank you for listing your Model Context Protocol server in this community directory!

---

### Step-by-Step Submission Guide

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git checkout -b add-my-server
   ```
3. **Open `registry.json`** and append your server object to the array:
   ```json
   {
     "id": "unique-kebab-case-id",
     "name": "Human Friendly Name",
     "category": "developer-tools",
     "description": "Clear 1-2 sentence description of available tools and resources.",
     "repository": "https://github.com/your-username/repo-name",
     "protocol": "stdio"
   }
   ```
4. **Run the local validation check**:
   ```bash
   npm run validate
   ```
5. **Commit and open a Pull Request**:
   ```bash
   git commit -am "feat: add [Server Name] to registry"
   git push origin add-my-server
   ```

---

### Acceptance Criteria

- The repository must contain functioning MCP code or documentation.
- The `id` must be unique and lowercase.
- Automated CI checks (`npm run validate`) must pass cleanly.
