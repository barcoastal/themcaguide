# MCA Debt-Intent Content Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship 57 SEO-optimized pages across 7 debt-intent keyword clusters + 3 link-bait tools, with hub-spoke internal linking, authority-source external citations, and a parallel backlink outreach workstream to raise DR from 1.8 toward 5+.

**Architecture:** Pages are MDX files in `content/articles/` (or `content/guides/` for pillars) rendered by the existing `/articles/[slug]` and `/guides/[slug]` dynamic routes. Link-bait tools are standard Next.js pages under `src/app/tools/`. A new shared `EditorialCTA` component replaces per-page CTA markup. Sitemap auto-rebuilds on `npm run build` via `next-sitemap` postbuild hook.

**Tech Stack:**
- Next.js 16 (app router) — `AGENTS.md` warns this has breaking changes from training data; check `node_modules/next/dist/docs/` before writing framework code
- MDX via `next-mdx-remote/rsc`
- Tailwind CSS v3
- TypeScript
- Recharts for tool visualizations
- Jest + ts-jest for lib tests (`__tests__/lib/*.test.ts`)
- Deploys on push to `main` (Cloudflare auto-deploys)

**Spec reference:** `docs/superpowers/specs/2026-04-16-mca-debt-intent-content-batch-design.md`

---

## Global Conventions (applies to every content task)

Every new MDX file in this plan follows this skeleton:

```mdx
---
title: "{Primary KW}: {Benefit hook} ({Year})"
description: "{Pain point lead + primary KW in first 120 chars + credibility signal}"
publishedAt: "2026-04-16"
updatedAt: "2026-04-16"
author: "Bar Alezrah"
pillar: "{cluster-pillar-slug}"
category: "getting-out"
heroImage: "/images/articles/{slug}.webp"
tags: ["{tag1}", "{tag2}", "{tag3}"]
---

<div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 not-prose">
<h2 id="key-takeaways" className="text-lg font-bold text-slate-900 mb-3 mt-0">Key Takeaways</h2>
<ul className="space-y-2 text-slate-800 text-sm">
<li><strong>{Point 1 bolded lead}:</strong> {1 sentence}</li>
<li><strong>{Point 2}:</strong> {1 sentence}</li>
<li><strong>{Point 3}:</strong> {1 sentence}</li>
<li><strong>{Point 4}:</strong> {1 sentence}</li>
<li><strong>{Point 5}:</strong> {1 sentence}</li>
</ul>
</div>

{100-word direct-answer paragraph — primary KW in first sentence}

<h2 id="section-1-slug">{H2 that includes semantic variant of KW}</h2>

{Body content with 2–3 markdown paragraphs. At least one external authority link per major section. Link to related internal pages with descriptive anchors.}

<h3 id="subsection-slug">{H3}</h3>

...

<FAQ items={[
  { question: "{Question matching People Also Ask}", answer: "{Direct answer}" },
  { question: "...", answer: "..." },
  { question: "...", answer: "..." },
  { question: "...", answer: "..." }
]} />

<EditorialCTA variant="{diy-first|attorney-first|review-roundup|collection-default}" />
```

**Infrastructure note (added post-Task 4):** `src/app/articles/[slug]/page.tsx` and `src/app/guides/[slug]/page.tsx` now pass `options={{ blockJS: false }}` to `MDXRemote`. This lets MDX files use JSX array props like `items={[...]}` on `FAQ` and `AuthorityCitations`. `blockDangerousJS` continues to protect the render pipeline from `eval`/`Function`/etc. Trust boundary: all MDX is authored and committed to git, never user-submitted.

**Rules enforced every page:**
- Word count ≥ 1,500 (pillars ≥ 2,500)
- ≥ 3 internal links, with varied anchor text
- ≥ 2 external authority links (.gov, .edu, court records, or trade publications)
- ≥ 1 tool or calculator link where contextually natural
- FAQ section with 4–6 Q&As (for FAQ schema)
- No em dashes (site-wide ban per memory)
- No fabricated case citations (public court records only)
- Disclaimer rendered automatically by article layout

---

## File Structure

**Created:**
- `src/components/mdx/EditorialCTA.tsx` — shared CTA with 4 variants
- `src/components/content/AuthorityCitations.tsx` — reusable citations block
- `content/articles/{57 new slugs}.mdx`
- `content/guides/{2 new pillar guides}.mdx` — `mca-debt-relief-2026-guide`, `mca-attorney-complete-guide`
- `src/app/tools/mca-debt-relief-cost-calculator/page.tsx`
- `src/app/tools/mca-debt-relief-cost-calculator/Calculator.tsx`
- `src/app/tools/mca-lawsuit-tracker/page.tsx`
- `src/app/tools/mca-lawsuit-tracker/tracker-data.ts`
- `src/app/templates/page.tsx` — downloadable templates landing
- `src/app/templates/mca-hardship-letter/page.tsx`
- `src/app/templates/mca-settlement-letter/page.tsx`
- `src/app/templates/mca-coj-defense-response/page.tsx`
- `__tests__/lib/mca-debt-relief-calculator.test.ts`
- `__tests__/lib/lawsuit-tracker-data.test.ts`
- `public/downloads/mca-hardship-letter.pdf`
- `public/downloads/mca-settlement-letter.pdf`
- `public/downloads/mca-coj-defense-response.pdf`

**Modified:**
- `src/components/mdx/mdx-components.tsx` — register `EditorialCTA` and `AuthorityCitations`
- `public/llms.txt` — append all 57 new URLs + tools + templates
- `src/app/sitemap.ts` (if exists) or rely on `next-sitemap` postbuild

---

## Phase 1: Shared Infrastructure

### Task 1: Create `EditorialCTA` component with 4 variants

**Files:**
- Create: `src/components/mdx/EditorialCTA.tsx`
- Modify: `src/components/mdx/mdx-components.tsx`

- [ ] **Step 1: Create component**

```tsx
// src/components/mdx/EditorialCTA.tsx
import Link from "next/link";

type Variant = "diy-first" | "attorney-first" | "review-roundup" | "collection-default";

const VARIANTS: Record<Variant, { heading: string; intro: string; options: Array<{ label: string; body: string; href: string }> }> = {
  "diy-first": {
    heading: "Your next step",
    intro: "If you're dealing with MCA debt, these are the three paths that actually work. Start with the cheapest option that fits your situation.",
    options: [
      { label: "DIY negotiation", body: "Free and the most common starting point. Use our negotiation playbook first.", href: "/articles/how-to-negotiate-mca-settlement" },
      { label: "MCA debt relief company", body: "Paid service that handles negotiation for you. See our side-by-side comparison. Our disclosure: we work with Coastal Debt Resolve, details on /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "MCA attorney", body: "Needed when lawsuits are filed or contracts are legally defective. See the attorney guide.", href: "/guides/mca-attorney-complete-guide" },
    ],
  },
  "attorney-first": {
    heading: "Your next step",
    intro: "Lawsuits have deadlines. If you've been served, act in days not weeks. Here are the three paths, ordered by urgency for your situation.",
    options: [
      { label: "Talk to an MCA attorney", body: "If you've been served with a lawsuit or COJ, this is the first call. See what an MCA attorney does and what it costs.", href: "/guides/mca-attorney-complete-guide" },
      { label: "MCA debt relief company", body: "If no lawsuit has been filed yet, a debt relief company can often settle before litigation. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "DIY negotiation", body: "Works best before default. Full playbook here.", href: "/articles/how-to-negotiate-mca-settlement" },
    ],
  },
  "review-roundup": {
    heading: "How to evaluate any MCA debt relief company",
    intro: "Names matter less than process. These six criteria matter more than any star rating.",
    options: [
      { label: "Compare the top options", body: "Our full side-by-side of debt relief companies. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
      { label: "Read the evaluation checklist", body: "Six things to verify before signing any debt relief agreement.", href: "/articles/how-to-choose-mca-debt-relief-company" },
      { label: "Try DIY first", body: "Most small MCA debts can be settled without paying a company. Start here.", href: "/articles/how-to-negotiate-mca-settlement" },
    ],
  },
  "collection-default": {
    heading: "Your next step",
    intro: "Collection calls and default are scary. Free options exist. Start with those before paying anyone.",
    options: [
      { label: "Know your rights", body: "What an MCA debt collector can and cannot legally do.", href: "/articles/mca-debt-collection-rules-rights" },
      { label: "DIY negotiation", body: "Free playbook that works before the lawsuit stage.", href: "/articles/how-to-negotiate-mca-settlement" },
      { label: "Get a professional evaluation", body: "If the debt is too big to DIY, compare debt relief options. Disclosure: /how-we-make-money.", href: "/articles/best-mca-debt-relief-companies" },
    ],
  },
};

interface EditorialCTAProps {
  variant?: Variant;
}

export default function EditorialCTA({ variant = "diy-first" }: EditorialCTAProps) {
  const { heading, intro, options } = VARIANTS[variant];
  return (
    <div className="not-prose my-12 rounded-2xl border-2 border-slate-200 p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{heading}</h3>
      <p className="text-slate-700 mb-6">{intro}</p>
      <ul className="space-y-4">
        {options.map((opt) => (
          <li key={opt.label}>
            <Link href={opt.href} className="block rounded-xl bg-slate-50 hover:bg-blue-50 p-5 transition-colors">
              <strong className="block text-blue-900 text-lg">{opt.label}</strong>
              <span className="text-slate-700 text-sm block mt-1">{opt.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Register in MDX components**

Add these lines to `src/components/mdx/mdx-components.tsx`:

```tsx
import EditorialCTA from "./EditorialCTA";
import AuthorityCitations from "../content/AuthorityCitations";
```

And add `EditorialCTA` and `AuthorityCitations` to the exported `mdxComponents` object.

- [ ] **Step 3: Build and verify component compiles**

Run: `npm run build`
Expected: build succeeds with 0 errors. Any TypeScript/MDX errors must be fixed before moving on.

- [ ] **Step 4: Commit**

```bash
git add src/components/mdx/EditorialCTA.tsx src/components/mdx/mdx-components.tsx
git commit -m "Add EditorialCTA component with 4 variants for debt-intent content batch"
```

### Task 2: Create `AuthorityCitations` component

**Files:**
- Create: `src/components/content/AuthorityCitations.tsx`

- [ ] **Step 1: Create component**

```tsx
// src/components/content/AuthorityCitations.tsx
interface Citation {
  label: string;
  href: string;
  source: string;
}

interface AuthorityCitationsProps {
  items: Citation[];
  title?: string;
}

export default function AuthorityCitations({ items, title = "Sources" }: AuthorityCitationsProps) {
  return (
    <div className="not-prose my-10 border-l-4 border-slate-400 bg-slate-50 p-5 rounded-r-lg">
      <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 mb-3">{title}</h3>
      <ol className="space-y-2 text-sm text-slate-800 list-decimal list-inside">
        {items.map((c, i) => (
          <li key={i}>
            <a href={c.href} target="_blank" rel="noopener" className="text-blue-700 underline">
              {c.label}
            </a>
            <span className="text-slate-600 ml-2">— {c.source}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
```

- [ ] **Step 2: Build to verify**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit**

```bash
git add src/components/content/AuthorityCitations.tsx
git commit -m "Add AuthorityCitations component for E-E-A-T source citations"
```

### Task 3: Create content style-check script

**Files:**
- Create: `scripts/check-content.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write script**

```js
// scripts/check-content.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["content/articles", "content/guides"];
const failures = [];

function wordCount(s) {
  return s.trim().split(/\s+/).length;
}

function checkFile(path) {
  const raw = readFileSync(path, "utf8");
  const body = raw.replace(/^---[\s\S]*?---/, "");

  // Rule: no em dashes
  if (/\u2014/.test(body)) {
    failures.push(`${path}: contains em dash (U+2014). Use hyphens or rewording.`);
  }

  // Rule: min word count
  const words = wordCount(body.replace(/<[^>]+>/g, " "));
  const min = path.includes("content/guides/") ? 2500 : 1500;
  if (words < min) {
    failures.push(`${path}: word count ${words} < required ${min}.`);
  }

  // Rule: must have at least one external authority link
  const externalAuthorityRe = /\]\(https?:\/\/[^)]*\.(gov|edu|federalreserve\.org|cfpb\.gov|sba\.gov)/i;
  const hasAuthority = externalAuthorityRe.test(body) || /href="https?:\/\/[^"]*\.(gov|edu)/i.test(body);
  if (!hasAuthority) {
    failures.push(`${path}: no .gov/.edu external authority link found.`);
  }

  // Rule: must have Key Takeaways block OR KeyTakeaways component
  if (!/Key Takeaways|<KeyTakeaways/.test(body)) {
    failures.push(`${path}: missing Key Takeaways block.`);
  }

  // Rule: must have at least 3 internal links
  const internalLinks = body.match(/\]\(\/(articles|guides|tools|templates|glossary)\//g) || [];
  const hrefInternalLinks = body.match(/href="\/(articles|guides|tools|templates|glossary)\//g) || [];
  if (internalLinks.length + hrefInternalLinks.length < 3) {
    failures.push(`${path}: fewer than 3 internal links.`);
  }
}

for (const root of ROOTS) {
  for (const name of readdirSync(root)) {
    if (!name.endsWith(".mdx")) continue;
    checkFile(join(root, name));
  }
}

if (failures.length) {
  console.error(`Content check failed:\n${failures.map(f => "  - " + f).join("\n")}`);
  process.exit(1);
}
console.log("Content check passed.");
```

- [ ] **Step 2: Add npm script**

Edit `package.json` scripts block to add:

```json
"check:content": "node scripts/check-content.mjs"
```

- [ ] **Step 3: Run script against existing content to confirm baseline**

Run: `npm run check:content`
Expected: either passes or fails with a list. **Do not** fix pre-existing failures; note them. Existing articles predate these rules and can be remediated in a separate pass.

- [ ] **Step 4: Commit**

```bash
git add scripts/check-content.mjs package.json
git commit -m "Add content style-check script (word count, em dash, links, takeaways)"
```

---

## Phase 2: Cluster A — Debt Relief Hub (5 pages + 1 guide)

**Pillar:** `content/guides/mca-debt-relief-2026-guide.mdx` (new, replaces existing `mca-debt-relief.mdx` pillar role)
**Category:** `getting-out`
**Internal hub:** pillar links down to all 4 spoke articles; each spoke links up.

### Task 4: Write pillar guide `mca-debt-relief-2026-guide.mdx`

**Files:**
- Create: `content/guides/mca-debt-relief-2026-guide.mdx`

- [ ] **Step 1: Write MDX file**

Primary KW: `mca debt relief` (900 vol, KD 1, $17 CPC)
Word count target: 2,800
Structure (each section ~300–400 words):

1. Key Takeaways (6 bullets)
2. TL;DR — What MCA Debt Relief Actually Is (100 words)
3. H2: Why MCA Debt Is Different From Regular Business Debt (cite Federal Reserve Small Business Credit Survey)
4. H2: The 7 Paths to MCA Debt Relief (one H3 per path with 1-paragraph summary + link to deep-dive)
5. H2: How to Choose Between DIY, Debt Relief Company, or Attorney (decision tree table)
6. H2: Red Flags When Evaluating Debt Relief Companies (cite CFPB consumer warnings on debt settlement industry)
7. H2: Cost Comparison — What Each Path Costs (include `/tools/mca-debt-relief-cost-calculator` CTA)
8. H2: Timeline — How Long Each Path Takes
9. H2: What Happens If You Do Nothing (cite published MCA lawsuit case examples from PACER)
10. FAQ component (6 Q&As)
11. `<AuthorityCitations />` block with 5 sources
12. `<EditorialCTA variant="diy-first" />`

Internal links to include:
- `/articles/best-mca-debt-relief-companies`
- `/articles/mca-debt-relief-reviews`
- `/articles/how-to-choose-mca-debt-relief-company`
- `/articles/mca-debt-relief-vs-diy-settlement`
- `/articles/how-to-negotiate-mca-settlement`
- `/guides/mca-attorney-complete-guide`
- `/tools/mca-debt-relief-cost-calculator`
- `/articles/mca-lawsuit-being-sued-playbook`

External links (minimum):
- Federal Reserve Small Business Credit Survey: https://www.federalreserve.gov/publications/small-business-lending.htm
- CFPB debt settlement consumer guide: https://www.consumerfinance.gov/ask-cfpb/what-is-debt-settlement-en-1457/
- SBA 7(a) loan program: https://www.sba.gov/funding-programs/loans/7a-loans

- [ ] **Step 2: Run content check**

Run: `npm run check:content`
Expected: no failures for this new file. If failures appear, fix them (usually word count, missing internal link, or em dash).

- [ ] **Step 3: Start dev server and visit the page**

Run: `npm run dev`
Visit: `http://localhost:3000/guides/mca-debt-relief-2026-guide`
Verify:
- Page renders without error
- Key Takeaways block appears
- EditorialCTA renders at bottom with 3 options
- Breadcrumbs work
- No broken internal links (click 2–3)

Kill dev server after check.

- [ ] **Step 4: Commit**

```bash
git add content/guides/mca-debt-relief-2026-guide.mdx
git commit -m "Add MCA Debt Relief 2026 pillar guide (Cluster A)"
```

### Task 5: Write `best-mca-debt-relief-companies.mdx`

**Files:**
- Create: `content/articles/best-mca-debt-relief-companies.mdx`

- [ ] **Step 1: Write MDX**

Primary KW: `best mca debt relief companies` (100 vol, KD 0, $16 CPC)
Pillar frontmatter: `mca-debt-relief-2026-guide`
Word count target: 2,200

Structure:
1. Key Takeaways (5 bullets)
2. TL;DR paragraph naming the top 3 with 1-line differentiators
3. H2: How We Evaluated (6-criteria methodology: track record, fee structure, transparency, licensing, complaints with state AGs, client outcomes)
4. H2: Top MCA Debt Relief Companies 2026 — one H3 per company:
   - Coastal Debt Resolve (with `/how-we-make-money` disclosure inline)
   - MCA Debt Advisors
   - MCA Debt Relief Pros
   - Second Wind Consultants
   - Distressed Capital Resources
   - Reliant Account Management
   Each H3 includes: fees disclosed, service model, reviews summary (public sources only), state licensing status, red-flag screening
5. H2: Alternatives to Debt Relief Companies (link to DIY and attorney paths)
6. H2: Red Flags — What Disqualifies a Company
7. FAQ (5 Q&As)
8. `<AuthorityCitations />` with BBB, state AG press releases, CFPB complaints data
9. `<EditorialCTA variant="review-roundup" />`

External links required:
- https://www.bbb.org
- https://www.consumerfinance.gov/complaint/
- At least one state AG press release

- [ ] **Step 2: Content check**

Run: `npm run check:content`
Expected: pass.

- [ ] **Step 3: Verify in dev**

Run: `npm run dev`
Visit: `http://localhost:3000/articles/best-mca-debt-relief-companies`
Verify renders correctly.

- [ ] **Step 4: Commit**

```bash
git add content/articles/best-mca-debt-relief-companies.mdx
git commit -m "Add Best MCA Debt Relief Companies 2026 listicle (Cluster A)"
```

### Task 6: Write `mca-debt-relief-reviews.mdx`

**Files:**
- Create: `content/articles/mca-debt-relief-reviews.mdx`

- [ ] **Step 1: Write MDX**

Primary KW: `mca debt relief reviews` (150 vol, KD 0, $9 CPC)
Word count target: 1,800
Unique angle: this page reviews the REVIEW SOURCES themselves (BBB vs Trustpilot vs Google vs Reddit) and explains how to weight each. Not a duplicate of the listicle.

Structure:
1. Key Takeaways
2. H2: Where to Read MCA Debt Relief Reviews (BBB, Trustpilot, Google Business, Reddit r/smallbusiness, state AG complaints)
3. H2: How to Spot Fake or Paid Reviews (concrete signals)
4. H2: What Real Reviews Look Like — 3 anonymized examples
5. H2: Sample Due-Diligence Checklist for Any Company
6. H2: Our Top Picks Based on Public Reviews (link to listicle)
7. FAQ
8. Citations
9. EditorialCTA review-roundup variant

- [ ] **Step 2: Content check**

Run: `npm run check:content`

- [ ] **Step 3: Verify in dev**

Run: `npm run dev`
Visit: `http://localhost:3000/articles/mca-debt-relief-reviews`

- [ ] **Step 4: Commit**

```bash
git add content/articles/mca-debt-relief-reviews.mdx
git commit -m "Add MCA Debt Relief Reviews guide (Cluster A)"
```

### Task 7: Write `how-to-choose-mca-debt-relief-company.mdx`

**Files:**
- Create: `content/articles/how-to-choose-mca-debt-relief-company.mdx`

- [ ] **Step 1: Write MDX**

Primary KW long-tail: `how to choose mca debt relief company`
Word count target: 1,700
Structure: decision framework — 10 questions every owner should ask before signing. Include a printable checklist box. Link to evaluation page and listicle.

- [ ] **Step 2: Content check, verify, commit**

```bash
git add content/articles/how-to-choose-mca-debt-relief-company.mdx
git commit -m "Add How to Choose MCA Debt Relief Company (Cluster A)"
```

### Task 8: Write `mca-debt-relief-vs-diy-settlement.mdx`

**Files:**
- Create: `content/articles/mca-debt-relief-vs-diy-settlement.mdx`

- [ ] **Step 1: Write MDX**

Primary KW: long-tail comparison
Word count target: 1,800
Structure: head-to-head comparison table. When DIY works, when it doesn't, break-even math (link to `/tools/mca-debt-relief-cost-calculator`).

- [ ] **Step 2: Content check, verify, commit**

```bash
git add content/articles/mca-debt-relief-vs-diy-settlement.mdx
git commit -m "Add MCA Debt Relief vs DIY Settlement (Cluster A)"
```

### Task 9: Cluster A deploy + index

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

- [ ] **Step 2: Wait for Cloudflare deploy (check themcaguide.com)**

- [ ] **Step 3: Ping IndexNow**

Run the existing IndexNow script if one exists in `scripts/` or `webhook/`; otherwise, submit the 5 new URLs via Bing Webmaster Tools IndexNow API manually. URLs:
- https://themcaguide.com/guides/mca-debt-relief-2026-guide
- https://themcaguide.com/articles/best-mca-debt-relief-companies
- https://themcaguide.com/articles/mca-debt-relief-reviews
- https://themcaguide.com/articles/how-to-choose-mca-debt-relief-company
- https://themcaguide.com/articles/mca-debt-relief-vs-diy-settlement

- [ ] **Step 4: Update `public/llms.txt` with 5 new URLs**

- [ ] **Step 5: Commit llms.txt update and push**

---

## Phase 3: Cluster B — Competitor Reviews (8 pages)

**Pillar frontmatter:** `mca-debt-relief-2026-guide`
**Category:** `getting-out`

**Common template for every review page:**

```
1. Key Takeaways (5 bullets — company name, service model, fee structure, pros, cons)
2. TL;DR — 1-paragraph verdict
3. H2: Who {Company} Is (founding, location, business model — cite company website and state registry)
4. H2: What They Offer (services, model — flat fee, % of savings, hybrid)
5. H2: Pricing & Fees (what's disclosed publicly, what's hidden)
6. H2: Reviews Snapshot (BBB rating, Trustpilot, Google, Reddit — quote real public reviews with links)
7. H2: Complaints, Lawsuits, or Regulatory Actions (search CFPB, state AG, PACER)
8. H2: Who It's Good For / Who Should Skip
9. H2: Alternatives (link to comparison roundup)
10. FAQ (5 Q&As)
11. AuthorityCitations (BBB link, Trustpilot link, state registration lookup, any regulatory actions)
12. EditorialCTA review-roundup variant
```

Word count per page: 1,800. Every company named with public-source facts only. No defamation — frame criticisms as "based on public reviews" or "per CFPB complaints database" with citation.

### Task 10: Write `mca-debt-advisors-review.mdx`

**Files:**
- Create: `content/articles/mca-debt-advisors-review.mdx`

- [ ] **Step 1: Research public sources (BBB, state registry, CFPB)**
- [ ] **Step 2: Write MDX using the template above**
- [ ] **Step 3: Content check, verify, commit**

```bash
git commit -m "Add MCA Debt Advisors review (Cluster B)"
```

### Task 11: Write `mca-debt-relief-pros-review.mdx`

Same structure. Primary KW: `mca debt relief pros` (150 vol, KD 0, $17 CPC).

```bash
git commit -m "Add MCA Debt Relief Pros review (Cluster B)"
```

### Task 12: Write `second-wind-consultants-review.mdx`

```bash
git commit -m "Add Second Wind Consultants review (Cluster B)"
```

### Task 13: Write `distressed-capital-resources-review.mdx`

```bash
git commit -m "Add Distressed Capital Resources review (Cluster B)"
```

### Task 14: Write `bench-bar-associates-review.mdx`

```bash
git commit -m "Add Bench Bar & Associates review (Cluster B)"
```

### Task 15: Write `corporate-turnaround-group-review.mdx`

```bash
git commit -m "Add Corporate Turnaround Group review (Cluster B)"
```

### Task 16: Write `reliant-account-management-review.mdx`

```bash
git commit -m "Add Reliant Account Management review (Cluster B)"
```

### Task 17: Write `mca-debt-advisors-alternatives.mdx`

Primary KW long-tail. Same template but frame as comparison ("If you're considering MCA Debt Advisors, here are 4 alternatives worth evaluating").

```bash
git commit -m "Add MCA Debt Advisors alternatives (Cluster B)"
```

### Task 18: Cluster B deploy + llms.txt + IndexNow

Same procedure as Task 9 but with 8 new URLs.

---

## Phase 4: Cluster C — MCA Attorney Hub (12 pages)

**Pillar:** `content/guides/mca-attorney-complete-guide.mdx` (new)

### Task 19: Write pillar guide `mca-attorney-complete-guide.mdx`

**Files:**
- Create: `content/guides/mca-attorney-complete-guide.mdx`

- [ ] **Step 1: Write MDX**

Primary KW: `mca attorney` (300 vol, KD 0, $15 CPC)
Word count: 2,800

Structure:
1. Key Takeaways
2. TL;DR — When you need one, what they do, what they cost
3. H2: What MCA Attorneys Actually Do (contract review, defense, negotiation, settlement, bankruptcy)
4. H2: When You Need an MCA Attorney (served with lawsuit, COJ frozen your accounts, UCC lien filed, personal guarantee being enforced)
5. H2: When You Don't Need One Yet (can self-negotiate, haven't defaulted, small balance)
6. H2: How MCA Attorneys Charge (flat fee, hourly, contingency, hybrid)
7. H2: What to Expect in an MCA Legal Case (discovery, motion practice, settlement timeline)
8. H2: How to Find a Qualified MCA Attorney (state bar search, NY/CA/TX/FL deep-dive with links to geo pages)
9. H2: Questions to Ask Before Hiring
10. H2: Red Flags in MCA Attorney Selection
11. FAQ
12. AuthorityCitations (American Bar Association, state bar associations, case law database)
13. EditorialCTA attorney-first variant

Internal links:
- `/articles/mca-defense-attorney`
- `/articles/mca-lawyer-cost`
- `/articles/mca-attorney-near-me`
- `/articles/mca-lawsuit-attorney`
- `/articles/mca-attorney-new-york`
- `/articles/mca-attorney-california`
- `/articles/mca-attorney-texas`
- `/articles/mca-attorney-florida`
- `/articles/mca-lawsuit-being-sued-playbook`

External authority links:
- https://www.americanbar.org
- https://www.nycourts.gov (for NY-specific)
- State bar association search pages

- [ ] **Step 2: Content check, verify, commit**

```bash
git commit -m "Add MCA Attorney Complete Guide pillar (Cluster C)"
```

### Task 20: Write `mca-defense-attorney.mdx`

Primary KW: `mca defense attorney` (200 vol)
Word count: 2,000
Pillar: `mca-attorney-complete-guide`
Focus: defensive work — responding to lawsuits, motions to dismiss, affirmative defenses (usury, unconscionability, TILA violations where applicable).

Cite: actual federal/state court decisions dismissing MCA claims (e.g., NY Champion Auto Sales v. Pearl Beta Funding if applicable; use PACER-verifiable case names only).

```bash
git commit -m "Add MCA Defense Attorney article (Cluster C)"
```

### Task 21: Write `mca-lawyer-cost.mdx`

Primary KW: `mca lawyer cost`
Word count: 1,700
Focus: fee structures with ranges, what drives cost up/down, how to negotiate retainer.

```bash
git commit -m "Add MCA Lawyer Cost guide (Cluster C)"
```

### Task 22: Write `mca-attorney-near-me.mdx`

Primary KW: `mca attorney near me` (150 vol)
Word count: 1,700
Focus: how to find a local MCA attorney — NOT a listing page (legal risk, avoid referral fees implications). Instead: state bar directory search walkthrough, how to vet credentials, interview script.

```bash
git commit -m "Add MCA Attorney Near Me guide (Cluster C)"
```

### Task 23: Write `mca-loan-attorney.mdx`

Primary KW: `mca loan attorney` (150 vol)
Word count: 1,700
Angle: clarifying that MCAs are not technically loans, what that means legally, and when you need an attorney who specifically knows MCA vs. regular commercial lending law.

```bash
git commit -m "Add MCA Loan Attorney article (Cluster C)"
```

### Task 24: Write `mca-lawsuit-attorney.mdx`

Primary KW: `mca lawsuit attorney` (100 vol)
Word count: 1,700
Focus: attorney role once litigation starts — answer/pleading deadlines, discovery, motion practice, summary judgment defense.

```bash
git commit -m "Add MCA Lawsuit Attorney article (Cluster C)"
```

### Task 25: Write `mca-debt-settlement-lawyer.mdx`

Primary KW: `mca debt settlement lawyer` (100 vol)
Word count: 1,700
Focus: attorney-led settlement vs. debt relief company. Legal advantages (attorney-client privilege, litigation leverage). Cost trade-off.

```bash
git commit -m "Add MCA Debt Settlement Lawyer article (Cluster C)"
```

### Task 26: Write `mca-agreement-lawyer-contract-review.mdx`

Primary KW: `mca agreement lawyer` (80 vol)
Word count: 1,700
Focus: pre-signing contract review — what a lawyer looks for (confession of judgment clauses, personal guarantees, reconciliation rights, factor rate disclosures).

```bash
git commit -m "Add MCA Agreement Lawyer Contract Review article (Cluster C)"
```

### Task 27: Write `mca-attorney-new-york.mdx`

Primary KW: `mca attorney new york` (100 vol, KD 5)
Word count: 2,000
Angle: NY COJ ban (Dec 2019), NY AG enforcement actions, NY usury law application to MCAs post-Davis v. Richmond Capital. Cite NY AG press releases.

External authority must include NY AG site, NY courts, and at least one NY-decided case.

```bash
git commit -m "Add MCA Attorney New York article (Cluster C)"
```

### Task 28: Write `mca-attorney-california.mdx`

Primary KW: `mca attorney california`
Word count: 1,700
Angle: California's Commercial Financing Disclosures Law (CFDL, effective 2022), DFPI enforcement. Include Spanish-language resource note (memory: `mca attorney speaks spanish` = 60 vol).

```bash
git commit -m "Add MCA Attorney California article (Cluster C)"
```

### Task 29: Write `mca-attorney-texas.mdx`

Primary KW: `mca attorney texas`
Word count: 1,700
Angle: TX has no MCA-specific regulation yet; focus on TX common-law usury claims, TX Finance Code applicability, TX business court system.

```bash
git commit -m "Add MCA Attorney Texas article (Cluster C)"
```

### Task 30: Write `mca-attorney-florida.mdx`

Primary KW: `mca attorney florida`
Word count: 1,700
Angle: FL Commercial Financing Disclosure Law, FL usury cap, typical FL circuit court process.

```bash
git commit -m "Add MCA Attorney Florida article (Cluster C)"
```

### Task 31: Cluster C deploy + llms.txt + IndexNow

12 URLs pushed to main, llms.txt updated, IndexNow pinged.

---

## Phase 5: Cluster G — New York Deep-dive (6 pages)

Why before Clusters D–F: NY queries have concentrated vol (~800 cumulative) and the COJ ban is a defining topic that other pages link to. Building this first lets later lawsuit pages reference it.

**Pillar frontmatter:** `mca-attorney-complete-guide`
**Category:** `getting-out`

### Task 32: Write `ny-confession-of-judgment-ban-mca.mdx`

**Files:** `content/articles/ny-confession-of-judgment-ban-mca.mdx`

Primary KW: `ny confession of judgment` (cluster of related queries)
Word count: 2,200
Structure: what COJ is, pre-2019 MCA abuse (cite Bloomberg series, NYT coverage), Dec 2019 NY law change, what it means for existing COJs, what it doesn't cover (CA/FL/other states), practical implications for business owners sued today.

External authority:
- NY Senate bill S2154 text: https://www.nysenate.gov/
- Bloomberg MCA investigation series (cite article URLs)
- NY AG press releases on MCA enforcement

```bash
git commit -m "Add NY Confession of Judgment Ban MCA article (Cluster G)"
```

### Task 33: Write `new-york-mca-attorney.mdx`

Primary KW: `new york mca attorney` (80 vol)
Word count: 1,800
Differentiation from `mca-attorney-new-york.mdx`: this one is more practical/directory-style — what NY-specific expertise to look for, where to search (NY bar association).

```bash
git commit -m "Add New York MCA Attorney article (Cluster G)"
```

### Task 34: Write `new-york-mca-defense-attorney.mdx`

Primary KW: `new york mca defense attorney` (80 vol)
Word count: 1,800
Focus: defense-specific — responding to NY court summons, motion to vacate COJ (for pre-2019 COJs still on file), NY affirmative defenses.

```bash
git commit -m "Add New York MCA Defense Attorney article (Cluster G)"
```

### Task 35: Write `new-york-mca-debt-attorney.mdx`

Primary KW: `new york mca debt attorney` (80 vol)
Word count: 1,800
Focus: debt-focused work — negotiation, settlement, restructuring with NY lenders.

```bash
git commit -m "Add New York MCA Debt Attorney article (Cluster G)"
```

### Task 36: Write `new-york-mca-loan-attorney.mdx`

Primary KW: `new york mca loan attorney` (70 vol)
Word count: 1,800
Angle: NY court decisions on when an MCA is recharacterized as a loan (Davis v. Richmond Capital line of cases).

```bash
git commit -m "Add New York MCA Loan Attorney article (Cluster G)"
```

### Task 37: Write `new-york-mca-loan-restructure-attorney.mdx`

Primary KW: `new york mca loan restructure attorney` (100 vol)
Word count: 1,800
Focus: restructuring existing MCAs with NY lenders — reconciliation rights, renegotiation leverage post-2019, when to litigate vs. restructure.

```bash
git commit -m "Add New York MCA Loan Restructure Attorney article (Cluster G)"
```

### Task 38: Cluster G deploy + llms.txt + IndexNow

---

## Phase 6: Cluster D — Lawsuit Pages (10 pages)

**Pillar:** existing `content/articles/mca-lawsuit.mdx` (do not replace)
**Category:** `getting-out`

### Task 39: Write `mca-lawsuit-being-sued-playbook.mdx`

Primary KW: `mca lawsuit` (200 vol, KD 2) — re-target existing article may be outranked; this is a specific playbook version
Word count: 2,400
Structure: step-by-step what to do in the first 7/30/60 days after being served. Checklist format. Link to attorney guide.

```bash
git commit -m "Add MCA Lawsuit Being Sued Playbook (Cluster D)"
```

### Task 40: Write `mca-lawsuit-defense-strategies.mdx`

Primary KW: `mca lawsuit defense` (70 vol)
Word count: 1,800
Focus: affirmative defenses, procedural motions, when to fight vs. settle.

```bash
git commit -m "Add MCA Lawsuit Defense Strategies (Cluster D)"
```

### Task 41: Write `forward-financing-lawsuit-guide.mdx`

Primary KW: `forward financing lawsuit` (100 vol, KD 0)
Word count: 1,800
Structure: who Forward Financing is, known public litigation (search PACER, state court dockets), common patterns in their contracts, defenses typically raised.

**Critical:** Facts only from public court records. No speculation. Cite case numbers and courts.

```bash
git commit -m "Add Forward Financing Lawsuit Guide (Cluster D)"
```

### Task 42: Write `fora-financial-lawsuit-guide.mdx`

Primary KW: `fora financial lawsuit` (80 vol)
Same template as Task 41.

```bash
git commit -m "Add Fora Financial Lawsuit Guide (Cluster D)"
```

### Task 43: Write `kabbage-lawsuit-guide.mdx`

Primary KW: `kabbage lawsuit` (20 vol)
Same template. Include Kabbage-specific context (Amex acquisition, wind-down status).

```bash
git commit -m "Add Kabbage Lawsuit Guide (Cluster D)"
```

### Task 44: Write `kapitus-lawsuit-guide.mdx`

Primary KW: `kapitus lawsuit` (20 vol)

```bash
git commit -m "Add Kapitus Lawsuit Guide (Cluster D)"
```

### Task 45: Write `bluevine-lawsuit-guide.mdx`

Primary KW: `bluevine lawsuit` (20 vol)
Note: BlueVine pivoted away from MCA to checking products; frame accordingly.

```bash
git commit -m "Add Bluevine Lawsuit Guide (Cluster D)"
```

### Task 46: Write `national-funding-lawsuit-guide.mdx`

Primary KW: `national funding lawsuit` (20 vol)

```bash
git commit -m "Add National Funding Lawsuit Guide (Cluster D)"
```

### Task 47: Write `ondeck-lawsuit-guide.mdx`

Primary KW: `ondeck lawsuit` (10 vol)

```bash
git commit -m "Add OnDeck Lawsuit Guide (Cluster D)"
```

### Task 48: Write `responding-to-mca-lawsuit-complaint.mdx`

Long-tail. Word count: 1,700. Step-by-step: reading the complaint, answer vs. motion to dismiss, drafting affirmative defenses, deadlines by state.

```bash
git commit -m "Add Responding to MCA Lawsuit Complaint (Cluster D)"
```

### Task 49: Cluster D deploy + llms.txt + IndexNow

---

## Phase 7: Cluster E — Settlement & Restructuring (10 pages)

**Pillar:** existing `content/guides/mca-debt-settlement.mdx`

### Task 50: Write `mca-settlement-complete-guide.mdx`

Primary KW: `mca settlement` (150 vol, KD 0, $7 CPC)
Word count: 2,200
Structure: settlement process end-to-end, typical percentages by lender size, negotiation leverage points, case studies (anonymized, public).

```bash
git commit -m "Add MCA Settlement Complete Guide (Cluster E)"
```

### Task 51: Write `mca-debt-settlement-2026.mdx`

Primary KW: `mca debt settlement` (200 vol, KD 0, $12 CPC)
Word count: 2,200
Angle: 2026 market update — settlement rates trending up/down? Lender behavior changes? Post-CFDL enforcement landscape.

```bash
git commit -m "Add MCA Debt Settlement 2026 Update (Cluster E)"
```

### Task 52: Write `mca-debt-restructuring.mdx`

Primary KW: `mca debt restructuring` (150 vol, KD 0, $15 CPC)
Word count: 2,000
Differentiation from settlement: restructuring = keeps relationship, changes terms. Settlement = pays discounted lump sum, ends relationship.

```bash
git commit -m "Add MCA Debt Restructuring (Cluster E)"
```

### Task 53: Write `mca-restructuring-playbook.mdx`

Primary KW: `mca restructuring` (150 vol)
Word count: 2,000
Practical playbook version — scripts, templates, timelines.

```bash
git commit -m "Add MCA Restructuring Playbook (Cluster E)"
```

### Task 54: Write `mca-debt-consolidation-guide.mdx`

Primary KW: `mca debt consolidation` (200 vol, KD 35, $30 CPC)
Word count: 2,500 (KD higher, needs more depth)
Structure: realistic options — SBA loan consolidation, reverse consolidation, traditional debt consolidation loans, line of credit. Cost comparison with calculator links.

```bash
git commit -m "Add MCA Debt Consolidation Guide (Cluster E)"
```

### Task 55: Write `how-to-negotiate-mca-settlement.mdx`

Long-tail. Word count: 2,000. Scripts, voicemail templates, email templates, what to concede, what to hold on.

```bash
git commit -m "Add How to Negotiate MCA Settlement (Cluster E)"
```

### Task 56: Write `mca-settlement-letter-template.mdx`

Long-tail. Word count: 1,700. Live settlement letter template with fill-in fields, plus link to PDF download (`/downloads/mca-settlement-letter.pdf` — built in Phase 8).

```bash
git commit -m "Add MCA Settlement Letter Template (Cluster E)"
```

### Task 57: Write `mca-hardship-letter-template.mdx`

Long-tail. Word count: 1,700. Hardship letter template + PDF download.

```bash
git commit -m "Add MCA Hardship Letter Template (Cluster E)"
```

### Task 58: Write `mca-settlement-success-rates.mdx`

Long-tail. Word count: 2,200. **LINK-BAIT ASSET** — aggregated settlement data from public sources (CFPB enforcement actions, court settlements on PACER, trade publication reporting). Original analysis chart (Recharts).

```bash
git commit -m "Add MCA Settlement Success Rates (link-bait) (Cluster E)"
```

### Task 59: Write `when-to-settle-mca-debt.mdx`

Long-tail. Word count: 1,800. Timing decision framework — before default, after default, after lawsuit filed, during judgment execution.

```bash
git commit -m "Add When to Settle MCA Debt (Cluster E)"
```

### Task 60: Cluster E deploy + llms.txt + IndexNow

---

## Phase 8: Cluster F — Collection & Default (6 pages)

**Pillar:** existing `content/guides/how-to-get-out-of-mca-debt.mdx`

### Task 61: Write `mca-debt-collector-guide.mdx`

Primary KW: `mca debt collector` (150 vol)
Word count: 1,900
Cite FDCPA (noting it doesn't apply to commercial debt — but UCC and state consumer protection laws may).

```bash
git commit -m "Add MCA Debt Collector Guide (Cluster F)"
```

### Task 62: Write `mca-debt-collection-rules-rights.mdx`

Primary KW: `mca debt collection` (90 vol, KD 1)
Word count: 1,800

```bash
git commit -m "Add MCA Debt Collection Rules & Rights (Cluster F)"
```

### Task 63: Write `mca-default-what-happens-next.mdx`

Primary KW: `mca default` (20 vol, KD 0)
Word count: 1,700
Timeline: day 1 default → UCC filing → lawsuit → judgment → execution.

```bash
git commit -m "Add MCA Default What Happens Next (Cluster F)"
```

### Task 64: Write `mca-loan-debt-sales.mdx`

Primary KW: `mca loan debt sales` (60 vol)
Word count: 1,700
What happens when your MCA debt is sold to a third-party collector — your rights, how it changes negotiation dynamics.

```bash
git commit -m "Add MCA Loan Debt Sales (Cluster F)"
```

### Task 65: Write `dealing-with-aggressive-mca-collectors.mdx`

Long-tail. Word count: 1,700. Scripts for phone calls, how to document harassment, when behavior crosses into actionable misconduct under state law.

```bash
git commit -m "Add Dealing with Aggressive MCA Collectors (Cluster F)"
```

### Task 66: Write `mca-ucc-lien-removal.mdx`

Primary KW: `mca ucc lien` (10 vol)
Word count: 1,700
UCC-1 filing basics, termination statements, when to demand removal, how liens affect future financing.

```bash
git commit -m "Add MCA UCC Lien Removal (Cluster F)"
```

### Task 67: Cluster F deploy + llms.txt + IndexNow

---

## Phase 9: Link-Bait Tools

### Task 68: Build MCA Debt Relief Cost Calculator

**Files:**
- Create: `src/app/tools/mca-debt-relief-cost-calculator/page.tsx`
- Create: `src/app/tools/mca-debt-relief-cost-calculator/Calculator.tsx`
- Create: `src/lib/mca-debt-relief-calculator.ts`
- Create: `__tests__/lib/mca-debt-relief-calculator.test.ts`

- [ ] **Step 1: Write calculator logic test**

```ts
// __tests__/lib/mca-debt-relief-calculator.test.ts
import { calculateDebtReliefCost } from "@/lib/mca-debt-relief-calculator";

describe("calculateDebtReliefCost", () => {
  test("DIY: no fees, just the settlement amount", () => {
    const r = calculateDebtReliefCost({ totalOwed: 100000, path: "diy", settlementPercent: 0.5 });
    expect(r.outOfPocket).toBe(50000);
    expect(r.totalFees).toBe(0);
    expect(r.savings).toBe(50000);
  });

  test("Debt relief company: percentage of savings fee", () => {
    const r = calculateDebtReliefCost({
      totalOwed: 100000,
      path: "debt-relief-company",
      settlementPercent: 0.5,
      feePercentOfSavings: 0.3,
    });
    // savings before fee = 50000; fee = 15000; total out of pocket = 50000 + 15000 = 65000
    expect(r.outOfPocket).toBe(65000);
    expect(r.totalFees).toBe(15000);
    expect(r.savings).toBe(35000);
  });

  test("Attorney: flat retainer + hourly", () => {
    const r = calculateDebtReliefCost({
      totalOwed: 100000,
      path: "attorney",
      settlementPercent: 0.5,
      retainer: 5000,
      hourlyRate: 400,
      estimatedHours: 20,
    });
    // settlement 50000 + retainer 5000 + 8000 hours = 63000
    expect(r.outOfPocket).toBe(63000);
    expect(r.totalFees).toBe(13000);
    expect(r.savings).toBe(37000);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- mca-debt-relief-calculator`
Expected: FAIL with "cannot find module '@/lib/mca-debt-relief-calculator'".

- [ ] **Step 3: Write calculator logic**

```ts
// src/lib/mca-debt-relief-calculator.ts
export type DebtReliefPath = "diy" | "debt-relief-company" | "attorney";

export interface CalcInput {
  totalOwed: number;
  path: DebtReliefPath;
  settlementPercent: number;
  feePercentOfSavings?: number;
  retainer?: number;
  hourlyRate?: number;
  estimatedHours?: number;
}

export interface CalcResult {
  outOfPocket: number;
  totalFees: number;
  savings: number;
}

export function calculateDebtReliefCost(input: CalcInput): CalcResult {
  const settlementAmount = input.totalOwed * input.settlementPercent;
  const savingsBeforeFees = input.totalOwed - settlementAmount;

  if (input.path === "diy") {
    return { outOfPocket: settlementAmount, totalFees: 0, savings: savingsBeforeFees };
  }

  if (input.path === "debt-relief-company") {
    const fee = savingsBeforeFees * (input.feePercentOfSavings ?? 0);
    return {
      outOfPocket: settlementAmount + fee,
      totalFees: fee,
      savings: savingsBeforeFees - fee,
    };
  }

  // attorney
  const legalFees = (input.retainer ?? 0) + (input.hourlyRate ?? 0) * (input.estimatedHours ?? 0);
  return {
    outOfPocket: settlementAmount + legalFees,
    totalFees: legalFees,
    savings: savingsBeforeFees - legalFees,
  };
}
```

- [ ] **Step 4: Run test to verify pass**

Run: `npm test -- mca-debt-relief-calculator`
Expected: all 3 tests pass.

- [ ] **Step 5: Build calculator UI**

```tsx
// src/app/tools/mca-debt-relief-cost-calculator/Calculator.tsx
"use client";
import { useState } from "react";
import { calculateDebtReliefCost, DebtReliefPath } from "@/lib/mca-debt-relief-calculator";

function NumberInput({ label, value, onChange, prefix, suffix, step = 100 }: {
  label: string; value: number; onChange: (n: number) => void;
  prefix?: string; suffix?: string; step?: number;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1">{label}</span>
      <div className="flex items-center rounded-lg border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-blue-500">
        {prefix && <span className="pl-3 text-slate-500">{prefix}</span>}
        <input
          type="number"
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full px-3 py-2 bg-transparent outline-none"
        />
        {suffix && <span className="pr-3 text-slate-500">{suffix}</span>}
      </div>
    </label>
  );
}

export default function Calculator() {
  const [totalOwed, setTotalOwed] = useState(100000);
  const [settlementPercent, setSettlementPercent] = useState(50);
  const [path, setPath] = useState<DebtReliefPath>("diy");
  const [feePercentOfSavings, setFeePercentOfSavings] = useState(30);
  const [retainer, setRetainer] = useState(5000);
  const [hourlyRate, setHourlyRate] = useState(400);
  const [estimatedHours, setEstimatedHours] = useState(20);

  const result = calculateDebtReliefCost({
    totalOwed,
    path,
    settlementPercent: settlementPercent / 100,
    feePercentOfSavings: feePercentOfSavings / 100,
    retainer,
    hourlyRate,
    estimatedHours,
  });

  return (
    <div className="space-y-6 p-6 bg-white rounded-2xl shadow border border-slate-200">
      <div className="grid md:grid-cols-2 gap-4">
        <NumberInput label="Total MCA debt owed" value={totalOwed} onChange={setTotalOwed} prefix="$" step={1000} />
        <NumberInput label="Expected settlement percent" value={settlementPercent} onChange={setSettlementPercent} suffix="%" step={5} />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-2">Path</span>
        <div className="grid grid-cols-3 gap-2">
          {(["diy", "debt-relief-company", "attorney"] as DebtReliefPath[]).map((p) => (
            <button
              key={p}
              onClick={() => setPath(p)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition ${
                path === p ? "border-blue-600 bg-blue-50 text-blue-900" : "border-slate-200 text-slate-700 hover:border-slate-400"
              }`}
            >
              {p === "diy" ? "DIY" : p === "debt-relief-company" ? "Debt relief company" : "Attorney"}
            </button>
          ))}
        </div>
      </div>

      {path === "debt-relief-company" && (
        <NumberInput label="Company fee (% of savings)" value={feePercentOfSavings} onChange={setFeePercentOfSavings} suffix="%" step={5} />
      )}

      {path === "attorney" && (
        <div className="grid md:grid-cols-3 gap-4">
          <NumberInput label="Retainer" value={retainer} onChange={setRetainer} prefix="$" step={500} />
          <NumberInput label="Hourly rate" value={hourlyRate} onChange={setHourlyRate} prefix="$" step={50} />
          <NumberInput label="Estimated hours" value={estimatedHours} onChange={setEstimatedHours} step={1} />
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-slate-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-slate-500">Out of pocket</div>
          <div className="text-2xl font-bold text-slate-900">${result.outOfPocket.toLocaleString()}</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-red-700">Total fees</div>
          <div className="text-2xl font-bold text-red-900">${result.totalFees.toLocaleString()}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-xs uppercase text-green-700">Your savings</div>
          <div className="text-2xl font-bold text-green-900">${result.savings.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Build page wrapper**

```tsx
// src/app/tools/mca-debt-relief-cost-calculator/page.tsx
import Calculator from "./Calculator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCA Debt Relief Cost Calculator — Compare DIY, Company, Attorney",
  description: "Compare the real out-of-pocket cost of settling MCA debt yourself vs using a debt relief company vs hiring an attorney. Free calculator.",
  alternates: { canonical: "https://themcaguide.com/tools/mca-debt-relief-cost-calculator" },
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">MCA Debt Relief Cost Calculator</h1>
      <p className="text-lg text-slate-700 mb-8">
        Compare the true out-of-pocket cost of each MCA debt relief path — DIY, debt relief company, or attorney.
      </p>
      <Calculator />
      <div className="prose mt-12">
        <h2>How this calculator works</h2>
        <p>{/* 400-word explainer of methodology, definitions, and common pitfalls */}</p>
        <h2>Related resources</h2>
        <ul>
          <li><a href="/articles/mca-debt-relief-vs-diy-settlement">MCA Debt Relief vs DIY Settlement</a></li>
          <li><a href="/articles/best-mca-debt-relief-companies">Best MCA Debt Relief Companies</a></li>
          <li><a href="/guides/mca-attorney-complete-guide">MCA Attorney Complete Guide</a></li>
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Run build, visit in dev, commit**

```bash
npm run build
npm run dev
# visit http://localhost:3000/tools/mca-debt-relief-cost-calculator
git add src/lib/mca-debt-relief-calculator.ts src/app/tools/mca-debt-relief-cost-calculator/ __tests__/lib/mca-debt-relief-calculator.test.ts
git commit -m "Add MCA Debt Relief Cost Calculator tool + tests"
```

### Task 69: Build MCA Lawsuit Tracker

**Files:**
- Create: `src/app/tools/mca-lawsuit-tracker/page.tsx`
- Create: `src/app/tools/mca-lawsuit-tracker/tracker-data.ts`
- Create: `src/app/tools/mca-lawsuit-tracker/Tracker.tsx`
- Create: `__tests__/lib/lawsuit-tracker-data.test.ts`

- [ ] **Step 1: Define data shape and seed data**

```ts
// src/app/tools/mca-lawsuit-tracker/tracker-data.ts
export interface LawsuitRecord {
  caseName: string;
  lender: string;
  court: string;
  caseNumber: string;
  filingDate: string;
  status: "pending" | "dismissed" | "settled" | "judgment" | "appeal";
  summary: string;
  sourceUrl: string;
}

export const lawsuits: LawsuitRecord[] = [
  // populate with 15–30 PACER-verified records. Each record must have a real caseNumber and sourceUrl.
  // Example structure (replace with real data during implementation):
  // {
  //   caseName: "Richmond Capital Group v. Davis",
  //   lender: "Richmond Capital",
  //   court: "N.Y. Sup. Ct.",
  //   caseNumber: "XXX/XXXX",
  //   filingDate: "2019-...",
  //   status: "judgment",
  //   summary: "NY court recharacterized MCA as loan, applied usury cap.",
  //   sourceUrl: "https://...",
  // },
];
```

**Implementation note:** The engineer MUST populate this array with 15–30 real, verifiable MCA lawsuit records from PACER (federal) and state court dockets before shipping. Placeholder shipping = plan violation.

- [ ] **Step 2: Write test**

```ts
// __tests__/lib/lawsuit-tracker-data.test.ts
import { lawsuits } from "@/app/tools/mca-lawsuit-tracker/tracker-data";

describe("lawsuit tracker data", () => {
  test("has minimum record count", () => {
    expect(lawsuits.length).toBeGreaterThanOrEqual(15);
  });
  test("every record has required fields populated", () => {
    for (const r of lawsuits) {
      expect(r.caseName).toBeTruthy();
      expect(r.caseNumber).toBeTruthy();
      expect(r.sourceUrl).toMatch(/^https?:\/\//);
      expect(["pending", "dismissed", "settled", "judgment", "appeal"]).toContain(r.status);
    }
  });
});
```

- [ ] **Step 3: Run test, see it fail until records populated**

- [ ] **Step 4: Populate records, re-run test until green**

- [ ] **Step 5: Build Tracker UI (filter by lender, status, year) + page wrapper matching existing tool pattern**

- [ ] **Step 6: Run build, visit in dev, commit**

```bash
git commit -m "Add MCA Lawsuit Tracker tool with PACER-verified records"
```

### Task 70: Build downloadable template pages + PDFs

**Files:**
- Create: `src/app/templates/page.tsx`
- Create: `src/app/templates/mca-hardship-letter/page.tsx`
- Create: `src/app/templates/mca-settlement-letter/page.tsx`
- Create: `src/app/templates/mca-coj-defense-response/page.tsx`
- Create: `public/downloads/mca-hardship-letter.pdf`
- Create: `public/downloads/mca-settlement-letter.pdf`
- Create: `public/downloads/mca-coj-defense-response.pdf`

- [ ] **Step 1: Write template text (Markdown) for each template**

For each of the 3 templates: write a complete, fillable letter with `[FIELDS IN BRACKETS]` for the user to replace. Review for legal soundness against public templates available on law firm websites and SBA resources.

- [ ] **Step 2: Generate PDF versions**

Use any available PDF toolchain. Since the repo is content-focused, one acceptable approach: use a Node script (`scripts/generate-template-pdfs.mjs`) with `puppeteer` or `pdfkit`. Another: create the PDFs in Google Docs → export, manually place in `public/downloads/`. Either is fine; document which was used in the commit message.

- [ ] **Step 3: Build `/templates` index page listing all 3 templates**

Landing page at `/templates` — grid of 3 cards, each linking to the individual template page. Metadata title: "Free MCA Debt Templates — Hardship Letters, Settlement Letters, and Legal Responses".

- [ ] **Step 4: Build individual template pages**

Each page shows the template inline (in a `<pre>` or styled div) + download button for the PDF + brief guidance on how to use it + `<EditorialCTA variant="diy-first" />` at bottom.

- [ ] **Step 5: Run build, visit all 4 pages in dev, commit**

```bash
git add src/app/templates/ public/downloads/
git commit -m "Add free MCA templates (hardship, settlement, COJ response) as link-bait assets"
```

### Task 71: Phase 9 deploy + llms.txt + IndexNow

---

## Phase 10: Sitemap & Indexing Finalization

### Task 72: Update `llms.txt` with every new URL

**Files:**
- Modify: `public/llms.txt`

- [ ] **Step 1: Generate new URL list**

Run: `node -e "const p = require('path'); const fs = require('fs'); const arts = fs.readdirSync('content/articles').filter(f=>f.endsWith('.mdx')).map(s=>'https://themcaguide.com/articles/'+s.replace(/\\.mdx$/,'')); const gds = fs.readdirSync('content/guides').filter(f=>f.endsWith('.mdx')).map(s=>'https://themcaguide.com/guides/'+s.replace(/\\.mdx$/,'')); console.log([...arts, ...gds].join('\\n'))"`

- [ ] **Step 2: Merge against existing `public/llms.txt`** and add tool + template URLs:
  - https://themcaguide.com/tools/mca-debt-relief-cost-calculator
  - https://themcaguide.com/tools/mca-lawsuit-tracker
  - https://themcaguide.com/templates
  - https://themcaguide.com/templates/mca-hardship-letter
  - https://themcaguide.com/templates/mca-settlement-letter
  - https://themcaguide.com/templates/mca-coj-defense-response

- [ ] **Step 3: Commit and push**

```bash
git add public/llms.txt
git commit -m "Update llms.txt with all new debt-intent pages, tools, and templates"
git push origin main
```

### Task 73: Rebuild sitemap and submit to GSC

- [ ] **Step 1: Run build locally to regenerate sitemap**

Run: `npm run build`
Expected: `public/sitemap.xml` updated, URL count increased by ~66 (57 content + 3 tools + 4 templates + 2 tool = 66 or close).

- [ ] **Step 2: Push to main, wait for Cloudflare deploy**

- [ ] **Step 3: Verify new URLs appear at https://themcaguide.com/sitemap.xml**

- [ ] **Step 4: Resubmit sitemap in Google Search Console**

Use Search Console UI. (Out of scope for code; document as a manual step.)

- [ ] **Step 5: Ping IndexNow for all new URLs (bulk)**

If `scripts/indexnow.mjs` or similar exists, use it. Otherwise manually submit in batches to https://www.bing.com/indexnow.

### Task 74: Backlink outreach kickoff

This is not code but belongs in the plan per the spec's DR workstream.

- [ ] **Step 1: Update `docs/backlink-targets-2026-04.md`** → rename to `docs/backlink-targets-2026-Q2.md` with refreshed list focused on the newly-shipped cluster topics (attorney directory sites for Cluster C, small business legal blogs for Cluster D, etc.)

- [ ] **Step 2: Draft 5 HARO/Qwoted pitches** from Bar's perspective as an MCA industry expert — save to `docs/outreach-drafts-2026-04.md`

- [ ] **Step 3: Submit 3 directory listings** from Tier 2 of the backlink targets doc (Crunchbase, Clutch, Trustpilot)

- [ ] **Step 4: Commit outreach tracking doc**

```bash
git add docs/backlink-targets-2026-Q2.md docs/outreach-drafts-2026-04.md
git commit -m "Kickoff Q2 backlink outreach — pitches and directory list"
```

---

## Verification Checklist (run before declaring the batch complete)

- [ ] `npm run build` passes with zero errors
- [ ] `npm test` passes (calculator + lawsuit tracker tests green)
- [ ] `npm run check:content` passes for every new file
- [ ] `npm run lint` passes
- [ ] Every new URL returns 200 in dev
- [ ] Every new page has ≥ 3 internal links and ≥ 2 external authority links
- [ ] `public/sitemap.xml` includes every new URL after build
- [ ] `public/llms.txt` includes every new URL
- [ ] No broken internal links (run a link-check against `public/` after build)
- [ ] IndexNow pinged for all new URLs
- [ ] Search Console sitemap resubmitted
- [ ] All 74 tasks committed with conventional messages
- [ ] Pushed to `main` (Cloudflare auto-deploys)

## Success Metrics (per spec)

Check at days 30 / 60 / 90 after each cluster's deploy:
- New pages indexed in GSC: target 45+/57 by day 30
- Impressions: target 2,000+/month cumulative by day 60
- Clicks: target 250+/month by day 90
- DR trajectory: 1.8 → 3.0 (day 30) → 5.0 (day 60) → 7.0 (day 90)
- Average position on pillar KWs (`mca debt relief`, `mca attorney`): top 20 by day 60
