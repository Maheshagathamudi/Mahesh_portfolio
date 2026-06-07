const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'NodeJS-Agent'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('Fetching logos directory contents from gilbarbara/logos...');
    const rawData = await fetchUrl('https://api.github.com/repos/gilbarbara/logos/contents/logos');
    const files = JSON.parse(rawData);
    
    if (!Array.isArray(files)) {
      console.log('API response is not an array:', rawData);
      return;
    }

    const matched = files.filter(f => f.name.toLowerCase().startsWith('s') || f.name.toLowerCase().startsWith('t'));
    console.log(`\nFound ${matched.length} files starting with s or t:`);
    matched.slice(0, 50).forEach(m => console.log(`  - ${m.name}`));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

run();
