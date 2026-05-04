---
description: Repeatable full-pass SEO, AI discoverability, accessibility, and route hygiene audit/fix workflow
---

# SEO, AI Discoverability, Accessibility, and Route Hygiene Audit/Fix

Use this workflow when asked to do a comprehensive website/project quality pass, especially for marketing sites, product pages, Next.js App Router projects, or route/metadata cleanup.

## 1. Establish scope and protect existing work

1. Confirm the user's goal in one sentence.
2. Identify whether the task is audit-only or audit-plus-fix.
3. Check current changed files before editing:
   - `git status --short`
4. Do not overwrite unrelated user changes.
5. If a file is already modified and not clearly part of the request, inspect before editing and mention the risk.

## 2. Inventory framework, routes, and public assets

1. Identify framework/version from dependency files.
2. Map route files and public URLs:
   - Next.js App Router: `src/app/**/page.tsx`
   - Metadata routes: `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`
3. List public assets relevant to SEO/social:
   - favicons
   - manifest
   - Open Graph images
   - logo files
   - `llms.txt`
4. Compare route names to actual product/page names.
5. Flag stale or misleading routes, e.g. a product named “Invoice Upload” living at `/payments-portal`.

## 3. Audit site configuration and metadata

1. Inspect shared site config for:
   - canonical domain
   - site description
   - social links
   - Open Graph image path
2. Verify canonical URL fallback is production-safe, not a preview/staging URL.
3. Inspect metadata helper or per-page metadata.
4. Ensure metadata supports:
   - unique title
   - unique description
   - canonical URL
   - Open Graph URL
   - Open Graph site name
   - social image dimensions and alt text
   - explicit robots directives
5. Add or update metadata for important pages missing route-specific titles/descriptions.

## 4. Audit sitemap, robots, and legacy routes

1. Compare all public routes against the sitemap.
2. Add all canonical marketing/product/legal routes to the sitemap.
3. Exclude stale, test, private, or legacy routes from the sitemap.
4. Update `robots.ts`/robots.txt to:
   - allow public routes
   - point to the sitemap
   - disallow obvious legacy/private sections when appropriate
5. Add `noIndex` metadata to legacy routes if they must remain available.
6. Prefer redirects or deletion for old routes if the canonical route is known.

## 5. Normalize route names to product names

1. Identify URLs that do not match product names.
2. Rename route folders/files to the preferred canonical path.
3. Update all internal references:
   - nav
   - footer
   - product data/content files
   - CTAs
   - sitemap
   - metadata paths
   - `llms.txt`
4. Add permanent redirects from stale URLs to canonical URLs.
5. Re-run search for stale route strings until only intended redirect rules remain.

## 6. Create or update `/llms.txt`

1. If missing, create `public/llms.txt`.
2. Use factual, concise Markdown/plain text.
3. Include:
   - company name
   - concise company description
   - primary audience
   - product/service list
   - canonical important URLs
   - page summaries
   - preferred brand language
   - claims/terms to avoid
   - canonical source URL
4. Do not claim pricing, customers, certifications, integrations, metrics, or compliance unless source pages state them.
5. Keep product names consistent with route and metadata updates.

## 7. Audit and fix stale/conflicting copy

1. Search for stale brand, product, domain, app, or business-model references.
2. Pay special attention to:
   - legal pages
   - old pages
   - metadata descriptions
   - `llms.txt`
   - social copy
3. Replace conflicting copy with current factual positioning.
4. If legal text requires counsel review, make minimal factual corrections and flag remaining legal review needs.

## 8. Add baseline accessibility and UX safeguards

1. Add a skip link if missing.
2. Ensure the main content target exists.
3. Add visible global `:focus-visible` styling if missing.
4. Add or verify `prefers-reduced-motion` support.
5. Check fake product mockups for accidental focusable controls.
6. Ensure `not-found.tsx` exists.
7. Ensure `error.tsx` exists and is a client component when required by the framework.
8. For forms, ensure labels, success states, and error states are accessible.

## 9. Add structured data when requested or in a full SEO implementation pass

1. Add a small reusable JSON-LD component.
2. Add `Organization` and `WebSite` schema globally/home.
3. Add `WebPage` and `BreadcrumbList` schema for core pages.
4. Add `SoftwareApplication` schema for product pages.
5. Only add `FAQPage`, `Review`, `AggregateRating`, or customer proof schema if the matching visible content exists and is factual.

## 10. Validate aggressively

1. Search for stale references:
   - old route names
   - preview domains
   - stale product/app names
   - outdated legal/business language
2. Run lint.
3. Fix lint errors introduced by the workflow.
4. Warnings may remain if unrelated, but list them clearly.
5. Run production build.
6. Verify route table or generated routes include canonical routes and exclude removed route pages.
7. Re-check final key files:
   - site config
   - metadata helper
   - sitemap
   - robots
   - redirect config
   - `llms.txt`
   - renamed route folder

## 11. Final response checklist

Summarize:

1. What changed.
2. Which routes were renamed and redirected.
3. Which files were created.
4. Validation results:
   - lint status
   - build status
5. Any remaining warnings or strategic gaps.
6. Any unrelated modified files noticed in `git status`.

## Common implementation patterns

### Canonical metadata helper

For a shared metadata helper, support at least:

- `title`
- `description`
- `image`
- `path`
- `noIndex`

Return canonical alternates, Open Graph URL, site name, social image metadata, and explicit robots behavior.

### Route migration pattern

When renaming a page URL:

1. Move the route directory to the canonical URL.
2. Update all internal links and data references.
3. Add a permanent redirect from the old URL to the new URL.
4. Update sitemap and `llms.txt`.
5. Search for the old string until only the redirect rule remains.

### Validation commands

Use the project's package manager from its project root. Common examples:

```bash
pnpm lint
pnpm build
```

If lint output is too noisy, use direct ESLint JSON output and summarize only errors:

```bash
pnpm exec eslint . --format json > /tmp/project-eslint.json
```

Then parse the JSON safely without shell interpolation issues.
