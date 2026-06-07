const https = require('https');

function checkStatus(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', (err) => {
      resolve(err.message);
    });
  });
}

async function run() {
  const urls = [
    'https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/scikit-learn.svg',
    'https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/scikit-learn.svg',
    'https://cdn.jsdelivr.net/gh/gilbarbara/logos@master/logos/scikit-learn.svg'
  ];
  for (const url of urls) {
    const status = await checkStatus(url);
    console.log(`URL: ${url} -> Status: ${status}`);
  }
}

run();
