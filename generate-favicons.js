const fs = require('fs');
const path = require('path');

try {
  const sharp = require('sharp');
  const logoPath = path.join('public', 'logomark.png');
  const publicDir = path.join('public');
  
  const sizes = [16, 32, 48, 180, 192, 512];
  
  Promise.all(sizes.map(size => 
    sharp(logoPath)
      .resize(size, size, { fit: 'cover' })
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`))
      .then(() => console.log(`Generated favicon-${size}x${size}.png`))
  )).then(() => {
    console.log('All favicons generated successfully');
  }).catch(err => console.error('Error:', err));
} catch (e) {
  console.log('Sharp not available, skipping favicon generation');
}
