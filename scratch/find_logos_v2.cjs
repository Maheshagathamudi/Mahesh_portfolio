const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\mahes\\.gemini\\antigravity\\brain\\1893a3b0-f689-4925-be30-09acec3ed9ee\\.system_generated\\steps\\711\\content.md');
const fileContent = fs.readFileSync(filePath, 'utf8');

const jsonStartIndex = fileContent.indexOf('[');
const jsonString = fileContent.substring(jsonStartIndex);
const data = JSON.parse(jsonString);

const searchList = [
  { name: "Python", query: "python" },
  { name: "JavaScript", query: "javascript" },
  { name: "TypeScript", query: "typescript" },
  { name: "C", query: "c-language" }, // or "c"
  { name: "C++", query: "c-plusplus" },
  { name: "Kotlin", query: "kotlin" },
  { name: "HTML5", query: "html5" },
  { name: "CSS3", query: "css" },
  { name: "Bash", query: "bash" },
  { name: "React", query: "react" },
  { name: "Next.js", query: "nextjs" },
  { name: "Bootstrap", query: "bootstrap" },
  { name: "Node.js", query: "nodejs" },
  { name: "Django", query: "django" },
  { name: "Flask", query: "flask" },
  { name: "FastAPI", query: "fastapi" },
  { name: "TensorFlow", query: "tensorflow" },
  { name: "PyTorch", query: "pytorch" },
  { name: "Scikit-learn", query: "scikitlearn" },
  { name: "OpenCV", query: "opencv" },
  { name: "NumPy", query: "numpy" },
  { name: "Tailwind CSS", query: "tailwindcss" },
  { name: "Pandas", query: "pandas" },
  { name: "MySQL", query: "mysql" },
  { name: "PostgreSQL", query: "postgresql" },
  { name: "MongoDB", query: "mongodb" },
  { name: "Firebase", query: "firebase" },
  { name: "Redis", query: "redis" },
  { name: "Docker", query: "docker" },
  { name: "Azure", query: "azure" },
  { name: "Git", query: "git" },
  { name: "GitHub", query: "github" },
  { name: "Linux", query: "linux" },
  { name: "AWS", query: "aws" },
  { name: "VS Code", query: "vscode" },
  { name: "Vercel", query: "vercel" }
];

const results = {};
searchList.forEach(item => {
  let match = data.find(el => el.title.toLowerCase() === item.name.toLowerCase());
  if (!match) {
    match = data.find(el => el.title.toLowerCase() === item.query.toLowerCase());
  }
  if (!match) {
    match = data.find(el => el.title.toLowerCase().includes(item.query.toLowerCase()));
  }
  if (match) {
    results[item.name] = { title: match.title, route: match.route };
  } else {
    results[item.name] = null;
  }
});

console.log(JSON.stringify(results, null, 2));
