const fs = require('fs');
const path = require('path');
const https = require('https');

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION AT:', promise, 'REASON:', reason);
  process.exit(1);
});

const icons = [
  { name: 'python', source: 'svgl', slug: 'python.svg' },
  { name: 'javascript', source: 'svgl', slug: 'javascript.svg' },
  { name: 'typescript', source: 'svgl', slug: 'typescript.svg' },
  { name: 'c', source: 'svgl', slug: 'c.svg' },
  { name: 'cplusplus', source: 'svgl', slug: 'c-plusplus.svg' },
  { name: 'kotlin', source: 'svgl', slug: 'kotlin.svg' },
  { name: 'html5', source: 'svgl', slug: 'html5.svg' },
  { name: 'css3', source: 'svgl', slug: 'css.svg' },
  { name: 'bash', source: 'svgl', slug: 'bash.svg' },
  { name: 'react', source: 'svgl', slug: 'react_dark.svg' },
  { name: 'nextjs', source: 'svgl', slug: 'nextjs_icon_dark.svg' },
  { name: 'bootstrap', source: 'svgl', slug: 'bootstrap.svg' },
  { name: 'nodejs', source: 'svgl', slug: 'nodejs.svg' },
  { name: 'django', source: 'svgl', slug: 'django.svg' },
  { name: 'flask', source: 'svgl', slug: 'flask.svg' },
  { name: 'fastapi', source: 'svgl', slug: 'fastapi.svg' },
  { name: 'tensorflow', source: 'svgl', slug: 'tensorflow-icon-dark.svg' },
  { name: 'pytorch', source: 'gilbarbara', slug: 'pytorch.svg' },
  { name: 'scikitlearn', source: 'custom', slug: 'https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo-without-subtitle.svg' },
  { name: 'opencv', source: 'gilbarbara', slug: 'opencv.svg' },
  { name: 'numpy', source: 'gilbarbara', slug: 'numpy.svg' },
  { name: 'tailwindcss', source: 'svgl', slug: 'tailwindcss.svg' },
  { name: 'pandas', source: 'gilbarbara', slug: 'pandas.svg' },
  { name: 'mysql', source: 'svgl', slug: 'mysql-icon-dark.svg' },
  { name: 'postgresql', source: 'svgl', slug: 'postgresql.svg' },
  { name: 'mongodb', source: 'svgl', slug: 'mongodb-icon-dark.svg' },
  { name: 'firebase', source: 'svgl', slug: 'firebase.svg' },
  { name: 'redis', source: 'svgl', slug: 'redis.svg' },
  { name: 'docker', source: 'svgl', slug: 'docker.svg' },
  { name: 'azure', source: 'svgl', slug: 'azure.svg' },
  { name: 'git', source: 'svgl', slug: 'git.svg' },
  { name: 'github', source: 'svgl', slug: 'github_dark.svg' },
  { name: 'linux', source: 'svgl', slug: 'linux.svg' },
  { name: 'aws', source: 'svgl', slug: 'aws_dark.svg' },
  { name: 'vscode', source: 'svgl', slug: 'vscode.svg' },
  { name: 'vercel', source: 'svgl', slug: 'vercel.svg' }
];

const destDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading official SVGs...');
  for (const icon of icons) {
    const url = icon.source === 'svgl' 
      ? `https://svgl.app/library/${icon.slug}` 
      : icon.source === 'custom'
        ? icon.slug
        : `https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/${icon.slug}`;
    const destPath = path.join(destDir, `${icon.name}.svg`);
    try {
      await download(url, destPath);
      console.log(`✓ Downloaded ${icon.name}.svg`);
    } catch (err) {
      console.error(`✗ Failed to download ${icon.name}:`, err.message);
      
      // Fallback strategies for known quirks
      if (icon.name === 'nextjs') {
        try {
          await download('https://svgl.app/library/nextjs.svg', destPath);
          console.log(`✓ Downloaded nextjs.svg (fallback)`);
          continue;
        } catch (_) {}
      }
      if (icon.name === 'flask') {
        try {
          await download('https://svgl.app/library/flask-dark.svg', destPath);
          console.log(`✓ Downloaded flask.svg (dark fallback)`);
          continue;
        } catch (_) {}
      }
      if (icon.name === 'github') {
        try {
          await download('https://svgl.app/library/github-icon.svg', destPath);
          console.log(`✓ Downloaded github.svg (fallback)`);
          continue;
        } catch (_) {}
      }
      if (icon.name === 'mongodb') {
        try {
          await download('https://svgl.app/library/mongodb.svg', destPath);
          console.log(`✓ Downloaded mongodb.svg (fallback)`);
          continue;
        } catch (_) {}
      }
    }
  }
  console.log('Finished downloading all official icons!');
}

run();
