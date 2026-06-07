const fs = require('fs');
const path = require('path');
const https = require('https');

const socials = [
  { name: 'instagram', url: 'https://svgl.app/library/instagram-icon.svg' },
  { name: 'whatsapp', url: 'https://svgl.app/library/whatsapp-icon.svg' },
  { name: 'gmail', url: 'https://svgl.app/library/gmail.svg' },
  { name: 'linkedin', url: 'https://svgl.app/library/linkedin.svg' }
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
  console.log('Downloading social icons...');
  for (const social of socials) {
    const destPath = path.join(destDir, `${social.name}.svg`);
    try {
      await download(social.url, destPath);
      console.log(`✓ Downloaded ${social.name}.svg`);
    } catch (err) {
      console.error(`✗ Failed to download ${social.name}:`, err.message);
    }
  }
}

run();
