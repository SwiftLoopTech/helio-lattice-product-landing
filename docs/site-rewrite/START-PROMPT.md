# HelioLattice site rewrite — start prompts

Open project folder: **`C:\Users\Home\HelioLattice`**

Enable models in **Cursor → Settings → Models**: Opus 5.5 (architect), Sonnet 5.5 (orchestrator + builder), Haiku 5.5 (seo-bulk).

---

## A) Fresh project — blueprint only

**Agent:** `site-architect` (Claude Opus 5.5 high)

```
@helio-site-workflow

Step 1 only: read docs/site-rewrite/site-inputs.md, competitor analysis for suryahub.com, ./website and ./website-static if present. Produce docs/site-rewrite/site-blueprint.md.

Before writing, ask genuine blocking questions in one batch with a recommended default each. No page code or copy. Summarize blueprint in ≤15 lines and stop for my approval.
```

---

## B) Blueprint already approved — you want “what’s next?”

**Agent:** `site-orchestrator` (Claude Sonnet 5.5)

```
@helio-site-workflow

Blueprint is approved (docs/site-rewrite/site-blueprint.md). Do not write HTML yourself. Tell me the exact next step and paste the full prompt I should use in a new site-builder chat for the next single page. Mention any partial work in website-static/.
```

---

## C) Build one page (repeat per page, new chat each time if you want clean context)

**Agent:** `site-builder` (Claude Sonnet 5.5)

**First page (Home):**

```
@helio-site-workflow

Blueprint approved: docs/site-rewrite/site-blueprint.md and site-inputs.md.

Build ONE page only: Home (/).

Work in ./website-static (Eleventy → dist/). Finish or fix the partial scaffold. Complete index, CSS/JS passthrough, npm run build.

Rules: blueprint HARD content rules; support@heliolattice.com; anonymous mid-size Indian EPC (qualitative proof only). CTAs to /demo/ and /product/.

Stop after summary and how to run npm run dev — do not build Product or Demo yet.
```

**After I approve Home — Product:**

```
@helio-site-workflow

Home approved. Build ONE page only: Product overview (/product/). website-static only. Stop for my review.
```

**After I approve Product — Demo:**

```
@helio-site-workflow

Product overview approved. Build ONE page only: Demo (/demo/). Demo-led pricing narrative; leave Google Form embed as TODO comment until I supply the form URL. website-static only. Stop for my review.
```

---

## D) Mechanical SEO pass

**Agent:** `seo-bulk` (Claude Haiku 5.5 low)

```
@helio-site-workflow

Mechanical SEO only on website-static: sitemap, robots, llms.txt, meta/canonical consistency, alt text, JSON-LD sanity, internal links. Do not rewrite body copy. List anything that needs site-builder.
```

---

## E) Strategy change only

**Agent:** `site-architect`

```
@helio-site-workflow

Update site-blueprint.md for: [describe change]. No page code. Stop for approval.
```

---

## Status (update as you go)

| Step | Status |
|------|--------|
| Blueprint | Approved |
| website-static scaffold | Partial — builder finishes on Home |
| Home `/` | Not approved |
| Product `/product/` | Not started |
| Demo `/demo/` | Not started |
| Cloudflare → `website-static/dist` | Configure when first deploy |
