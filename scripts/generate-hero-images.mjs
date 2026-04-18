#!/usr/bin/env node
/**
 * generate-hero-images.mjs
 * Generates unique hero images for MCA Guide articles using Gemini image generation.
 *
 * Usage:
 *   node scripts/generate-hero-images.mjs
 *   node scripts/generate-hero-images.mjs --dry-run
 *   node scripts/generate-hero-images.mjs --only=mca-debt-advisors-review
 *   node scripts/generate-hero-images.mjs --only=mca-debt-advisors-review,mca-attorney-complete-guide
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Dynamically import sharp (ESM-compatible)
const { default: sharp } = await import('sharp');

// --- Config ---
const API_KEY = 'AIzaSyCNeCjcvfMr_iPhZ1r3jNTfTrnjDu3sJK8';
const TARGET_DATE = '2026-04-16';
const OUTPUT_DIR = path.join(ROOT, 'public/images/articles');

// Model candidates in order of preference
const MODEL_CANDIDATES = [
  'gemini-2.0-flash-preview-image-generation',
  'gemini-2.5-flash-image',
  'gemini-2.5-flash-image-preview',
  'imagen-3.0-generate-002',
];

// --- CLI args ---
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const ONLY_ARG = args.find(a => a.startsWith('--only='));
const ONLY_SLUGS = ONLY_ARG
  ? ONLY_ARG.replace('--only=', '').split(',').map(s => s.trim())
  : null;

// --- Helpers ---
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    // Remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    fm[key] = val;
  }
  return fm;
}

function slugFromHeroImage(heroImage) {
  // heroImage: "/images/articles/some-slug.webp" → "some-slug"
  return path.basename(heroImage, '.webp');
}

async function collectTargets() {
  const targets = [];

  // Scan articles
  const articleDir = path.join(ROOT, 'content/articles');
  const articleFiles = await fs.readdir(articleDir);
  for (const file of articleFiles) {
    if (!file.endsWith('.mdx')) continue;
    const filePath = path.join(articleDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    if (fm.publishedAt !== TARGET_DATE) continue;
    const slug = fm.heroImage ? slugFromHeroImage(fm.heroImage) : path.basename(file, '.mdx');
    targets.push({ slug, title: fm.title || '', description: fm.description || '', file: filePath });
  }

  // Scan guides
  const guideDir = path.join(ROOT, 'content/guides');
  const guideFiles = await fs.readdir(guideDir);
  for (const file of guideFiles) {
    if (!file.endsWith('.mdx')) continue;
    const filePath = path.join(guideDir, file);
    const content = await fs.readFile(filePath, 'utf8');
    const fm = parseFrontmatter(content);
    if (fm.publishedAt !== TARGET_DATE) continue;
    const slug = fm.heroImage ? slugFromHeroImage(fm.heroImage) : path.basename(file, '.mdx');
    targets.push({ slug, title: fm.title || '', description: fm.description || '', file: filePath });
  }

  return targets;
}

function buildPrompt(title, description) {
  // Derive visual hints from title/description
  const lower = (title + ' ' + description).toLowerCase();

  let iconHint = 'abstract financial symbolism, currency and document stack iconography';
  if (lower.includes('lawsuit') || lower.includes('sued') || lower.includes('complaint')) {
    iconHint = 'scales of justice, legal documents, gavel — abstract legal proceedings concept';
  } else if (lower.includes('attorney') || lower.includes('lawyer')) {
    iconHint = 'scales of justice, legal briefcase, document stack — law and counsel concept';
  } else if (lower.includes('settlement') || lower.includes('negotiate') || lower.includes('negotiat')) {
    iconHint = 'handshake over documents, balance scales, currency — agreement and resolution concept';
  } else if (lower.includes('collector') || lower.includes('collection') || lower.includes('aggressive')) {
    iconHint = 'warning triangle, phone receiver, shield — protection from pressure concept';
  } else if (lower.includes('defense') || lower.includes('defend')) {
    iconHint = 'shield, document stack, protective barrier iconography';
  } else if (lower.includes('ucc') || lower.includes('lien')) {
    iconHint = 'chain links being broken, document seal, filing cabinet iconography';
  } else if (lower.includes('hardship') || lower.includes('template') || lower.includes('letter')) {
    iconHint = 'envelope with document, pen writing, formal correspondence iconography';
  } else if (lower.includes('restructur') || lower.includes('playbook') || lower.includes('strateg')) {
    iconHint = 'organizational chart, chess pieces, roadmap arrows — strategy and planning concept';
  } else if (lower.includes('review') || lower.includes('comparison') || lower.includes('companies')) {
    iconHint = 'magnifying glass over checklist, star ratings, comparison bars iconography';
  } else if (lower.includes('consolidat')) {
    iconHint = 'multiple arrows converging into one, funnel, debt consolidation concept';
  } else if (lower.includes('default') || lower.includes('what happens')) {
    iconHint = 'warning signs, downward trend, broken contract iconography';
  } else if (lower.includes('cost') || lower.includes('fees') || lower.includes('price')) {
    iconHint = 'price tag, currency scales, fee meter iconography';
  } else if (lower.includes('confession of judgment') || lower.includes('confession')) {
    iconHint = 'gavel, document with seal, court authority concept';
  } else if (lower.includes('california') || lower.includes('florida') || lower.includes('new york') || lower.includes('texas') || lower.includes('ny ')) {
    iconHint = 'state outline map silhouette, legal scales, local jurisdiction concept';
  } else if (lower.includes('sales') || lower.includes('selling debt') || lower.includes('sold')) {
    iconHint = 'debt transfer arrow between institutions, financial transaction concept';
  }

  return `Editorial illustration for a small business finance article titled "${title}". ${description}

Style: flat vector editorial illustration, muted blue and slate color palette (primary: #3052FF blue, slate grays #475569, #E2E8F0 light backgrounds), clean geometric shapes, no text or typography anywhere in the image, no photorealism, no humans rendered in realistic detail, professional serious tone matching business media aesthetic. 16:9 landscape aspect ratio.

Visual subject: ${iconHint}

Important: Do not include any text, words, numbers, or typography. Communicate the subject matter purely through abstract iconography, geometric shapes, and symbolism. The illustration should feel at home on a professional financial news site.`;
}

async function callGeminiImage(prompt, modelName) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
  const body = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseModalities: ['IMAGE', 'TEXT'],
    },
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    return { ok: false, status: res.status, error: data?.error?.message || JSON.stringify(data) };
  }

  // Find image part
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find(p => p.inlineData?.data);
  const textPart = parts.find(p => p.text);

  if (imagePart) {
    return {
      ok: true,
      imageBase64: imagePart.inlineData.data,
      mimeType: imagePart.inlineData.mimeType || 'image/png',
    };
  }

  // Model returned text instead of image (likely a refusal)
  return {
    ok: false,
    status: res.status,
    error: 'No image in response',
    text: textPart?.text || JSON.stringify(data),
  };
}

async function generateAndSave(slug, title, description, modelName) {
  const prompt = buildPrompt(title, description);
  const outputPath = path.join(OUTPUT_DIR, `${slug}.webp`);

  if (DRY_RUN) {
    console.log(`\n[DRY RUN] ${slug}`);
    console.log(`  Output: ${outputPath}`);
    console.log(`  Prompt: ${prompt.slice(0, 200)}...`);
    return { success: true, dryRun: true };
  }

  let result;
  let usedModel = modelName;

  // Try the given model
  result = await callGeminiImage(prompt, usedModel);

  if (!result.ok && result.status === 404) {
    // Try other model candidates
    for (const candidate of MODEL_CANDIDATES) {
      if (candidate === usedModel) continue;
      console.log(`  [INFO] ${usedModel} returned 404, trying ${candidate}...`);
      usedModel = candidate;
      result = await callGeminiImage(prompt, usedModel);
      if (result.ok || result.status !== 404) break;
    }
  }

  if (!result.ok) {
    const reason = result.text
      ? `Refusal: ${result.text.slice(0, 200)}`
      : `API error (${result.status}): ${result.error}`;
    return { success: false, reason };
  }

  // Decode base64 → buffer
  const imageBuffer = Buffer.from(result.imageBase64, 'base64');

  // Convert to WebP 16:9 (1280×720) via sharp
  await sharp(imageBuffer)
    .resize(1280, 720, { fit: 'cover', position: 'center' })
    .webp({ quality: 82 })
    .toFile(outputPath);

  const stat = await fs.stat(outputPath);
  return { success: true, model: usedModel, sizeKB: Math.round(stat.size / 1024) };
}

// --- Probe which model works ---
async function probeModel() {
  for (const candidate of MODEL_CANDIDATES) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${candidate}:generateContent?key=${API_KEY}`;
    const body = {
      contents: [{ parts: [{ text: 'A simple blue circle on white background. No text.' }] }],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'] },
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status !== 404) {
      console.log(`[INFO] Using model: ${candidate} (status ${res.status})`);
      return candidate;
    }
    console.log(`[INFO] Model ${candidate} returned 404, skipping...`);
  }
  throw new Error('No working Gemini image model found. Check model names and API key.');
}

// --- Main ---
async function main() {
  console.log('=== MCA Guide Hero Image Generator ===');
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  if (ONLY_SLUGS) console.log(`Only generating: ${ONLY_SLUGS.join(', ')}`);

  const targets = await collectTargets();
  console.log(`Found ${targets.length} articles/guides with publishedAt: ${TARGET_DATE}`);

  // Filter if --only flag used
  const filtered = ONLY_SLUGS
    ? targets.filter(t => ONLY_SLUGS.includes(t.slug))
    : targets;

  if (ONLY_SLUGS && filtered.length < ONLY_SLUGS.length) {
    const found = filtered.map(t => t.slug);
    const missing = ONLY_SLUGS.filter(s => !found.includes(s));
    console.warn(`[WARN] Could not find slugs: ${missing.join(', ')}`);
  }

  console.log(`Generating images for ${filtered.length} files...`);

  // Probe model (skip in dry run)
  let workingModel = MODEL_CANDIDATES[0];
  if (!DRY_RUN) {
    try {
      workingModel = await probeModel();
    } catch (err) {
      console.error(`[FATAL] ${err.message}`);
      process.exit(1);
    }
  }

  const results = { success: [], failed: [] };

  for (let i = 0; i < filtered.length; i++) {
    const { slug, title, description } = filtered[i];
    process.stdout.write(`[${i + 1}/${filtered.length}] ${slug} ... `);

    try {
      const result = await generateAndSave(slug, title, description, workingModel);
      if (result.success) {
        const tag = result.dryRun ? 'DRY-RUN' : `OK ${result.sizeKB}KB (${result.model})`;
        console.log(tag);
        results.success.push(slug);
      } else {
        console.log(`FAILED: ${result.reason}`);
        results.failed.push({ slug, reason: result.reason });
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      results.failed.push({ slug, reason: err.message });
    }

    // Rate limit: sleep 1.5s between requests
    if (i < filtered.length - 1 && !DRY_RUN) {
      await sleep(1500);
    }
  }

  // --- Summary ---
  console.log('\n=== Summary ===');
  console.log(`✓ Success: ${results.success.length}`);
  console.log(`✗ Failed:  ${results.failed.length}`);
  if (results.failed.length > 0) {
    console.log('\nFailed slugs:');
    for (const { slug, reason } of results.failed) {
      console.log(`  ${slug}: ${reason}`);
    }
  }

  if (!DRY_RUN && results.success.length > 0) {
    console.log('\nNext steps:');
    console.log('  git add public/images/articles/');
    console.log('  git commit -m "Generate unique AI hero images for debt-intent batch articles"');
    console.log('  git push origin main');
  }
}

main().catch(err => {
  console.error('[FATAL]', err);
  process.exit(1);
});
