const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'mahes', '.gemini', 'antigravity', 'brain', '1893a3b0-f689-4925-be30-09acec3ed9ee', '.system_generated', 'steps', '990', 'content.md');

if (!fs.existsSync(filePath)) {
  console.error('File not found:', filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

// We can search for titles by matching blocks
const regex = /title:\s*"([^"]+)"[\s\S]*?route:\s*({[\s\S]*?}|"[^"]+")/gi;
let match;
const results = [];

while ((match = regex.exec(content)) !== null) {
  results.push({
    title: match[1],
    route: match[2].replace(/\s+/g, ' ')
  });
}

const targets = ['aws', 'mysql', 'tensorflow', 'react', 'mongodb', 'github', 'vercel', 'flask', 'nextjs'];

console.log('Search Results:');
for (const target of targets) {
  const matched = results.filter(r => r.title.toLowerCase().includes(target));
  if (matched.length > 0) {
    console.log(`\nTarget: ${target}`);
    matched.forEach(m => console.log(`  - Title: ${m.title}, Route: ${m.route}`));
  } else {
    console.log(`\nTarget: ${target} - No match found.`);
  }
}
