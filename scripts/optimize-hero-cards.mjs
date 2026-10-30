// Renders the 4K hero card SVG masters (assets-src/hero-cards/<industry>/CARD N - *.svg) into
// small WebP files sized for how they are displayed, and records their dimensions so the
// landing page can reserve space before they load.
//
//   assets-src/hero-cards/oil-and-gas/CARD 1 - ….svg  ->  public/videos-gts/oil-and-gas/card-1.webp
//
// Usage: npm run optimize:images   (skips cards whose WebP is newer than its SVG; add --force to rebuild all)

import { readdir, stat, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = 'assets-src/hero-cards';
const OUTPUT_DIR = 'public/videos-gts';
const DIMENSIONS_FILE = 'src/constants/heroCardDimensions.json';
const force = process.argv.includes('--force');

// Output width per card number: ~2x the largest on-screen width so cards stay sharp on retina displays.
// Cards 1–3 sit in a 3-column row (up to ~280px on phones); cards 4–5 are the large panels (up to ~540px).
const WIDTH_BY_CARD = { 1: 560, 2: 560, 3: 560, 4: 1080, 5: 1080 };
const WEBP_OPTIONS = { quality: 80, effort: 5 };

const isFresh = async (source, target) => {
  try {
    return (await stat(target)).mtimeMs >= (await stat(source)).mtimeMs;
  } catch {
    return false;
  }
};

const dimensions = {};
let converted = 0;
let skipped = 0;

for (const industry of (await readdir(SOURCE_DIR, { withFileTypes: true })).filter((d) => d.isDirectory())) {
  const sourceFolder = path.join(SOURCE_DIR, industry.name);
  const outputFolder = path.join(OUTPUT_DIR, industry.name);
  await mkdir(outputFolder, { recursive: true });

  for (const file of await readdir(sourceFolder)) {
    const match = file.match(/^CARD\s*(\d)\b.*\.svg$/i);
    if (!match) continue;

    const cardNumber = Number(match[1]);
    const source = path.join(sourceFolder, file);
    const target = path.join(outputFolder, `card-${cardNumber}.webp`);

    if (!force && (await isFresh(source, target))) {
      skipped += 1;
    } else {
      await sharp(source, { limitInputPixels: false })
        .resize({ width: WIDTH_BY_CARD[cardNumber] ?? 1080, withoutEnlargement: true })
        .webp(WEBP_OPTIONS)
        .toFile(target);
      converted += 1;
      console.log(`✓ ${target}`);
    }

    const { width, height } = await sharp(target).metadata();
    dimensions[`/${path.relative('public', target).split(path.sep).join('/')}`] = { width, height };
  }
}

const sorted = Object.fromEntries(Object.entries(dimensions).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(DIMENSIONS_FILE, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(`\nConverted ${converted}, up to date ${skipped}. Dimensions written to ${DIMENSIONS_FILE}.`);
