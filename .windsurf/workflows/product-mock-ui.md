---
description: Craft responsive product mock UIs for marketing subpages
---

Use this workflow when creating or revising a high-level product UI mock inside a marketing subpage.

## Goal

Create a simplified, high-fidelity-enough dashboard mock that explains the product area at a glance without crowding the marketing page. The mock should feel like a real product surface, but it should not be so detailed that it distracts from the surrounding page copy.

## Inputs to gather

1. Identify the target subpage and feature section.
   - Find the subpage in `src/app/[product]/page.tsx`.
   - Locate the first-feature mock block, usually under `i === 0` and near `NoiseGradient`.

2. Identify product color tokens.
   - Use the page hero `gradientColors` and the page-level `--primary` value.
   - Use the product accent sparingly for active nav items, primary buttons, selected cards, chart bars, and toggles.

3. Study inspiration screenshots.
   - Pick one screenshot for macro layout.
   - Pick one screenshot for a detail panel or secondary peek.
   - Avoid recreating every detail. Extract only the story-critical UI primitives.

## Design principles

- Keep the mock product-like, not decorative.
- Every visible element should communicate product function.
- Use realistic but anonymized names, such as `Nora Ellison`, `Marcus Hale`, `Priya Bennett`, or `Caleb Monroe`.
- Prefer approximate business values over generic placeholders.
- Use skeletal rectangles for low-priority details to reduce cognitive load.
- Preserve a clear hierarchy:
  - outer app/sidebar shell
  - inner list or navigation panel when useful
  - main detail/dashboard area
  - optional side peek/action panel
- Use subtle borders: `border-black/[0.06]` or `border-black/[0.07]`.
- Use white and very light warm gray surfaces: `bg-white`, `bg-[#fbfaf8]`.
- Avoid heavy shadows inside the mock. The outer window can use `shadow-2xl`.

## Recommended mock structure

Use this composition for most product pages:

1. Noise-gradient frame.
2. Fixed mock window with browser chrome.
3. Main grid with two or three columns:
   - blocked-out global sidebar
   - optional inner product list/menu panel
   - main dashboard/detail panel
   - optional right-side side-peek panel

Example wrapper pattern:

```tsx
<div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px] lg:h-[560px]">
  <NoiseGradient colors={[...]} />
  <div className="absolute inset-0 flex items-start justify-start pt-7 pl-7 lg:items-center lg:justify-center lg:p-14">
    <div className="h-[520px] w-[980px] origin-top-left scale-[0.72] shrink-0 overflow-hidden rounded-md bg-white shadow-2xl sm:scale-[0.82] md:scale-[0.9] lg:h-full lg:w-full lg:scale-100">
      {/* Window chrome + product mock */}
    </div>
  </div>
</div>
```

## Responsive behavior

Large-screen experience must stay polished and centered.

For mobile and small tablets:

- Do not let inner columns fluidly squish too early.
- Keep the mock as a fixed-size canvas, usually `w-[980px] h-[520px]`.
- Scale the entire mock canvas down with transforms:
  - base: `scale-[0.72]`
  - `sm`: `scale-[0.82]`
  - `md`: `scale-[0.9]`
  - `lg`: `scale-100`
- Keep `origin-top-left` so the mock grows from the visible top-left corner.
- Keep top and left gradient padding visible with `pt-7 pl-7`.
- Allow the mock to crop off the right and bottom edges on small screens.
- Only switch to `lg:h-full lg:w-full` at large breakpoints to avoid tablet squishing.

## Content fidelity guidelines

Use three levels of fidelity:

1. Real labels for product comprehension.
   - Examples: `Collections Overview`, `Credit Review`, `Triggered Factors`, `Monthly Invoiced`.

2. Realistic anonymized data for the main story.
   - Names: realistic fictitious people or companies.
   - Numbers: close to plausible product metrics.
   - Statuses: `Critical`, `High`, `In Progress`, `Alert`, `Normal`.

3. Skeletal blocks for supporting noise.
   - Search placeholders.
   - Secondary nav items.
   - Long descriptions.
   - Low-value metadata.

## Product-specific patterns

### Collections

Story: collections agents monitor aging, risk, outstanding balances, and automated follow-up.

Useful elements:

- `Collections Overview` header.
- Search bar with real magnifying-glass SVG.
- Metric cards: `At risk`, `Overdue`, `Queued`, `Recovered`.
- Task table with columns like `Task`, `Priority`, `Age`, `Status`, `Risk`, `Outstanding`.
- Right-side peek panel with:
  - `Auto-Process` toggle
  - selected overdue account
  - action card like `Executed` and `Sent outreach`

### Credit

Story: credit teams review risk changes, policy triggers, and customer credit health.

Useful elements:

- global blocked-out sidebar with credit highlighted.
- inner panel titled `Credit Overview` or `Credit Agent`.
- action item list inspired by the credit queue screenshot.
- main detail panel titled `Credit Review: [Name]`.
- risk summary cards: `Avg Days to Pay`, `On-Time Payment`, `Past Due Balance`, `Sales Volume`, `Credit Utilization`.
- triggered factors: `Payment Rate Drop`, `Avg Days Increase`, `Credit Limit Exceeded`.
- compact payment cards beside a chart.
- charts: DSO line chart and monthly invoiced bar chart.

## Implementation checklist

1. Replace only the mock UI block unless the user asks for broader page changes.
2. Use product accent from the current page.
3. Add or preserve browser chrome.
4. Build the mock with Tailwind utilities only.
5. Keep content high-level and marketing-focused.
6. Anonymize all names while keeping them realistic.
7. Test responsive wrapper behavior at small mobile, small tablet, and desktop widths.
8. Run lint for the changed page:

```bash
npm run lint -- src/app/[product]/page.tsx
```

## Common pitfalls

- Do not switch mock canvas to `w-full` at `md`; it causes tablet squishing.
- Do not over-detail every row or panel.
- Do not use generic `Customer A` labels unless specifically requested.
- Do not let small-screen optimization alter `lg` desktop layout.
- Do not make the product accent dominate the entire mock.
