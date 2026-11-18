const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, '..', 'registry.json');

try {
  const content = fs.readFileSync(registryPath, 'utf8');
  const data = JSON.parse(content);

  if (!Array.isArray(data)) {
    throw new Error('registry.json must contain a top-level array of server entries.');
  }

  const ids = new Set();
  const requiredFields = ['id', 'name', 'category', 'description', 'repository'];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    for (const field of requiredFields) {
      if (!item[field] || typeof item[field] !== 'string') {
        throw new Error(`Entry at index ${i} missing required string field: "${field}"`);
      }
    }

    if (ids.has(item.id)) {
      throw new Error(`Duplicate entry id detected: "${item.id}"`);
    }
    ids.add(item.id);
  }

  console.log(`Validation passed! All ${data.length} MCP registry entries are valid.`);
  process.exit(0);
} catch (err) {
  console.error(`Validation error:`, err.message);
  process.exit(1);
}
