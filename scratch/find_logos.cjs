const https = require('https');

const targets = ['amazon', 'next', 'scikit', 'pytorch', 'pandas', 'numpy', 'learn', 'open', 'mysql', 'tensorflow', 'mongodb', 'github', 'vercel', 'flask'];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Status ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching raw svgs.ts from GitHub...');
    const content = await fetchUrl('https://raw.githubusercontent.com/pheralb/svgl/main/src/data/svgs.ts');
    
    const regex = /title:\s*"([^"]+)"[\s\S]*?route:\s*({[\s\S]*?}|"[^"]+")/gi;
    let match;
    const results = [];

    while ((match = regex.exec(content)) !== null) {
      results.push({
        title: match[1],
        route: match[2].replace(/\s+/g, ' ')
      });
    }

    console.log('\nSearch results for target logos:');
    for (const target of targets) {
      const matched = results.filter(r => r.title.toLowerCase().includes(target.toLowerCase()));
      if (matched.length > 0) {
        console.log(`\nTarget: ${target}`);
        matched.forEach(m => console.log(`  - Title: ${m.title}, Route: ${m.route}`));
      } else {
        console.log(`\nTarget: ${target} - No match found.`);
      }
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
