const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\mahes\\.gemini\\antigravity\\brain\\1893a3b0-f689-4925-be30-09acec3ed9ee\\.system_generated\\steps\\711\\content.md');
const fileContent = fs.readFileSync(filePath, 'utf8');

const jsonStartIndex = fileContent.indexOf('[');
const jsonString = fileContent.substring(jsonStartIndex);
const data = JSON.parse(jsonString);

const queries = ["pytorch", "scikit", "opencv", "numpy", "pandas", "aws", "visual", "vscode"];

queries.forEach(q => {
  console.log(`--- Results for query: ${q} ---`);
  const matches = data.filter(el => el.title.toLowerCase().includes(q) || (el.url && el.url.toLowerCase().includes(q)));
  matches.forEach(m => {
    console.log(`  Title: ${m.title}, Route: ${JSON.stringify(m.route)}`);
  });
});
