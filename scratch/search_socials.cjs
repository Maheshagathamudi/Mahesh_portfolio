const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'mahes', '.gemini', 'antigravity', 'brain', '1893a3b0-f689-4925-be30-09acec3ed9ee', '.system_generated', 'steps', '711', 'content.md');
if (!fs.existsSync(filePath)) {
  console.log('No metadata file found.');
  process.exit(0);
}

const fileContent = fs.readFileSync(filePath, 'utf8');
const jsonStartIndex = fileContent.indexOf('[');
const jsonString = fileContent.substring(jsonStartIndex);
const data = JSON.parse(jsonString);

const queries = ['instagram', 'whatsapp', 'gmail', 'linkedin'];
queries.forEach(q => {
  console.log(`\n--- Results for: ${q} ---`);
  const matches = data.filter(el => el.title.toLowerCase().includes(q) || (el.url && el.url.toLowerCase().includes(q)));
  matches.forEach(m => {
    console.log(`  Title: ${m.title}, Route: ${JSON.stringify(m.route)}`);
  });
});
