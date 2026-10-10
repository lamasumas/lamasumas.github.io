import sharp from "sharp";
import { fileURLToPath } from "node:url";

const out = fileURLToPath(
  new URL("../public/og-image.png", import.meta.url),
);

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0c"/>
      <stop offset="55%" stop-color="#141417"/>
      <stop offset="100%" stop-color="#0c0c0f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="600" y="300" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="86" fill="#f4f4f5">Eduardo Lamas Suárez</text>
  <text x="600" y="372" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" letter-spacing="10" fill="#fcd34d">FULL STACK ENGINEER</text>
  <line x1="470" y1="420" x2="730" y2="420" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="2"/>
  <text x="600" y="500" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#a1a1aa">Tokyo · lamasumas.github.io</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`Wrote ${out}`);
