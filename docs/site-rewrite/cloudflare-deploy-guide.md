# Cloudflare deployment guide for the new site

Read this before pushing. It describes what was found, what changed in the repo, what to set in the Cloudflare dashboard, and how to go live and roll back.

## 1. What the live deployment is today

Found in the repo (commit `93d8271`, "Fix Cloudflare Workers deploy for Vite site in website/"):

| Item | Value |
|---|---|
| Repo | `https://github.com/SwiftLoopTech/helio-lattice-product-landing` (branch `main`) |
| Cloudflare product | **Workers with static assets** (not Pages). Worker name `helio-lattice-product-landing` |
| Old build | root `npm run build` builds the React/Vite app in `website/` into `website/dist` |
| Old asset config | `wrangler.jsonc` with `not_found_handling: single-page-application` (every unknown URL served the React app) |
| Domain | `heliolattice.com`, attached to that Worker |

Decision: **keep the same Worker and domain** and change only what it builds and serves. That avoids creating a Pages project, moving DNS, or re-attaching the domain.

## 2. What was changed in the repo (branch `site-rewrite`)

| File | Change | Why |
|---|---|---|
| `wrangler.jsonc` | assets directory `./website-static/dist`; `html_handling: auto-trailing-slash`; `not_found_handling: 404-page` | Serve the Eleventy output, serve `/about/` correctly, and return a real 404 status with a branded page |
| `package.json` (root) | `build` = `npm --prefix website-static ci && npm --prefix website-static run build` | The dashboard build command stays `npm run build` |
| `.node-version` | `20` | Eleventy 3 needs Node 18 or newer. Pins the build image |
| `website-static/wrangler.toml` | removed | It was a Pages-style file and would confuse the Worker setup |
| `website-static/public/_headers` | already present | Security headers and cache rules are applied by Workers assets |
| `website-static/public/_redirects` | 7 rules: no-slash to slash, 301, for the 8 URLs Google already indexed (home needs none) | Without them the platform answers 307 (temporary) |
| `website-static/src/404.njk` | new, `noindex` | Output `404.html`, used by `404-page` handling |

The old React app in `website/` is left untouched. It is no longer built or deployed. Delete it later, once the new site has been live for a while.

## 3. What was tested locally

Using the same `wrangler.jsonc`, `npx wrangler dev`:

- `/about/` returns 200, `/about` returns 301 to `/about/` (also `/pricing`, `/product/finance`, `/legal/privacy`, `/solutions/residential`, `/solutions/channel`)
- an unlisted path such as `/roles/owner` returns 307 to the slash version
- an unknown path returns **404** with the branded "That page is not here" page
- `sitemap.xml`, `robots.txt`, `llms.txt` return 200
- security headers and the one-year cache on `/fonts/*` are applied
- `verify.cjs` and `seo-audit.cjs` are clean on 64 pages

Not tested locally (needs Cloudflare itself): the actual dashboard build, the preview URL, and the live domain.

## 4. Dashboard settings to check (Workers and Pages, project `helio-lattice-product-landing`, Settings, Build)

Labels may differ slightly between dashboard versions. Match the values.

| Setting | Value |
|---|---|
| Git repository | `SwiftLoopTech/helio-lattice-product-landing` |
| Production branch | `main` |
| Root directory | `/` (leave empty) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variables (build) | optional `NODE_VERSION=20` (the `.node-version` file already covers it) |
| Non-production branch builds | **On**. Set the non-production deploy command to `npx wrangler versions upload` so branches get a preview URL instead of replacing production |

Notes:
- The root `package.json` already lists `wrangler` as a dev dependency, so no extra install step is needed.
- Do not set a "build output directory" for a Worker. The folder comes from `wrangler.jsonc`.
- If the build fails on `npm ci`, check that `website-static/package-lock.json` is committed (it is).

## 5. Go-live sequence

1. Push the branch, not `main`:
   `git push -u origin site-rewrite`
   Do not force-push.
2. In the dashboard, open the build for `site-rewrite` and wait for green. Open its preview URL.
3. On the preview URL check: home, one product page, one guide, `/pricing`, `/legal/privacy/`, an unknown path (404), view source for the GA4 and Clarity snippets, and the footer links.
4. Tag the old site first so rollback is easy:
   `git tag old-react-site 93d8271` then `git push origin old-react-site`. (The tag already exists locally.)
5. Merge to `main` when satisfied:
   `git checkout main`, `git merge site-rewrite`, `git push origin main`.
   The production build runs and replaces the React site on `heliolattice.com`.

## 6. After going live

| Task | Where |
|---|---|
| Submit `https://heliolattice.com/sitemap.xml` | Google Search Console, Sitemaps |
| Request indexing for the 8 known URLs and the new top pages (`/product/`, `/pricing/`, `/demo/`, `/guides/`) | Search Console, URL Inspection |
| Confirm GA4 sees traffic | GA4, Realtime (measurement ID `G-KZ63LNXQ6J`) |
| Confirm Clarity records sessions | Clarity dashboard (project `yw0wg6sifl`) |
| Paste the Google Form URL | `website-static/src/_data/site.json`, field `demoFormUrl` (see `google-form-setup.md`) |
| Check share previews | Paste a URL into a chat app. The card should show the HelioLattice image |
| Confirm tenant subdomains are `noindex` | ERP side, outside this repo |

## 7. Rollback

Fastest, no git: Cloudflare dashboard, the Worker, **Deployments** (or Version history), pick the previous version, roll back.

Via git: `git revert -m 1 <merge commit>` on `main` and push, or redeploy tag `old-react-site`.

## 8. Things to know

- Old `/guides/*` URLs from the previous generated cluster return 404. They were never indexed.
- The root `wrangler.jsonc` points at `website-static/dist`. If you ever need to deploy the old React site again, restore it from tag `old-react-site`.
- `npm audit` reports advisories in Eleventy's build-time dependencies. They do not ship to visitors. Review them when upgrading Eleventy.
- A change to `site.json` (form URL, IDs) needs a rebuild, which happens on every push.

## Redirects file

`website-static/public/_redirects` must contain only rules, one per line (`/old /new 301`). Cloudflare's parser rejects `#` comment lines (build failed with "Expected exactly 2 or 3 whitespace-separated tokens"). Why the rules exist: `html_handling` is auto-trailing-slash, so `/about` would otherwise 307 to `/about/`; the 301s keep already-indexed URLs permanent. The old `/guides/*` cluster was never indexed and is intentionally not redirected.

