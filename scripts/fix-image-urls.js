const fs = require('fs');
const path = require('path');

// Fix components.ts - replace CDN URLs with local paths
const componentsFile = path.join(__dirname, '../src/data/components.ts');
let content = fs.readFileSync(componentsFile, 'utf-8');

// Map of slug to local image path
const slugToImage = {
  'mq-2': '/images/components/mq-2.jpg',
  'pir-hc-sr501': '/images/components/pir-hc-sr501.jpg',
  'lcd1602-i2c': '/images/components/lcd1602-i2c.jpg',
  'l298n': '/images/components/l298n.jpg',
  'hc-05': '/images/components/hc-05.jpg',
  'ldr-photoresistor': '/images/components/ldr-photoresistor.jpg',
};

// Replace multi-line CDN URLs in components.ts
// Pattern: imageUrl: 'https://cdn4.telesco.pe/...' (may span multiple lines with newlines in string)
// Also handle unsplash
const telescopePattern = /imageUrl:\s*'https:\/\/cdn4\.telesco\.pe\/file\/[^']*'/gs;
const unsplashPattern = /imageUrl:\s*'https:\/\/images\.unsplash\.com\/[^']+'/gs;

// Find all blocks with slug + imageUrl to determine which slug maps to which URL
const slugImagePattern = /slug:\s*'([^']+)'[\s\S]*?imageUrl:\s*'(https:\/\/cdn4\.telesco\.pe\/file\/[^']*|https:\/\/images\.unsplash\.com\/[^']*)'/g;

let match;
const replacements = [];

while ((match = slugImagePattern.exec(content)) !== null) {
  const slug = match[1];
  const oldUrl = match[2];
  if (slugToImage[slug]) {
    replacements.push({ slug, oldUrl, newUrl: slugToImage[slug] });
    console.log(`Found: ${slug} -> will use ${slugToImage[slug]}`);
  } else {
    console.log(`No mapping for slug: ${slug}`);
  }
}

// Now do the replacements
for (const { slug, oldUrl, newUrl } of replacements) {
  // Escape for regex, handle the multi-line URLs
  const escapedUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\n/g, '\\n');
  // Try to find the imageUrl line(s) for this slug
  const lines = content.split('\n');
  let inSlugBlock = false;
  let replaced = false;
  const newLines = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.includes(`slug: '${slug}'`)) {
      inSlugBlock = true;
      newLines.push(line);
      i++;
      continue;
    }
    
    if (inSlugBlock && !replaced && line.includes(`imageUrl:`) && line.includes('cdn4.telesco.pe')) {
      // Replace this and possibly subsequent lines
      newLines.push(`    imageUrl: '${newUrl}',`);
      // Skip continuation lines (lines that don't start with spaces+key and are part of the multi-line string)
      i++;
      while (i < lines.length && !lines[i].trim().endsWith("',") && !lines[i].trim().endsWith("'") && lines[i].includes('.jpg')) {
        i++;
      }
      // Skip the ending line
      if (i < lines.length && lines[i].trim().endsWith("',")) i++;
      replaced = true;
      inSlugBlock = false;
      continue;
    }
    
    if (inSlugBlock && !replaced && line.includes(`imageUrl:`) && line.includes('unsplash')) {
      newLines.push(`    imageUrl: '${newUrl}',`);
      replaced = true;
      inSlugBlock = false;
      i++;
      continue;
    }
    
    newLines.push(line);
    i++;
  }
  
  if (replaced) {
    content = newLines.join('\n');
    console.log(`Replaced: ${slug}`);
  } else {
    console.log(`Not replaced: ${slug}`);
  }
}

fs.writeFileSync(componentsFile, content, 'utf-8');
console.log('components.ts updated!');

// Fix components_extra.ts - replace Unsplash URLs with local paths
const extraFile = path.join(__dirname, '../src/data/components_extra.ts');
let extraContent = fs.readFileSync(extraFile, 'utf-8');

const extraMappings = {
  'a4988-stepper-driver': '/images/components/a4988-stepper-driver.jpg',
  'neo-6m-gps': '/images/components/neo-6m-gps.jpg',
  'hx711-load-cell': '/images/components/hx711-load-cell.jpg',
  'dfplayer-mini': '/images/components/dfplayer-mini.jpg',
  'ws2812b-rgb': '/images/components/ws2812b-rgb.jpg',
  'pca9685-pwm-driver': '/images/components/pca9685-pwm-driver.jpg',
  'tb6612fng': '/images/components/tb6612fng.jpg',
  'l293d-ic': '/images/components/l293d-ic.jpg',
  'lm2596-step-down': '/images/components/lm2596-step-down.jpg',
  'mt3608-step-up': '/images/components/mt3608-step-up.jpg',
  'apds-9960': '/images/components/apds-9960.jpg',
};

for (const [slug, localPath] of Object.entries(extraMappings)) {
  // Simple single-line replacement for unsplash URLs
  const regex = new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?imageUrl:\\s*')(https://images\\.unsplash\\.com/[^']+)'`, '');
  if (regex.test(extraContent)) {
    extraContent = extraContent.replace(regex, `$1${localPath}'`);
    console.log(`Extra: replaced ${slug}`);
  } else {
    console.log(`Extra: not found or already local: ${slug}`);
  }
}

fs.writeFileSync(extraFile, extraContent, 'utf-8');
console.log('components_extra.ts updated!');
