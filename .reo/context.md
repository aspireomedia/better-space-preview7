# Better Space — Preview 7 operational context

## State (2026-09-30)
- Full furniture catalogue implemented across every route, replacing the placeholder homepage-only build.
- Data source: `app/lib/catalog.ts` — 12 real furniture products (sofa, lounge chair, coffee table, bed frame, wardrobe, rug, dining set, dining chair, office chair, storage cabinet, bookcase, table lamp) across 6 rooms (Ruang Tamu, Kamar Tidur, Ruang Makan, Ruang Kerja, Penyimpanan, Pencahayaan). All names/copy in Indonesian, styled after the reference Figma sample's structure (categories, offers grid, editorial split, related products) but with original Better Space branding, product names, and imagery — no assets or naming borrowed directly from the reference file.
- Routes: `/` (home), `/collection/[room]` (category listing), `/products/[id]` (product detail + related products), `/cart` (persisted via localStorage), `/about`, `/contact` (client-validated form).
- Shared shell in `app/components/store.tsx`: header, search-as-you-type, mobile menu (dialog, keyboard-closable via Escape not yet wired — only close button), wishlist (localStorage), cart badge, footer newsletter.
- Palette/tokens unchanged from existing Preview 7 design system (`--brand-slate`, `--brand-dusty`, `--brand-ice`, serif display type) — extended, not replaced, per continuity requirement ("use existing Preview 7 homepage as base").
- Products are fully linked: homepage → category → product detail → related products (same room) → cart, with breadcrumbs on every subpage.

## Verified (2026-09-30)
- `npm run build` — clean, 7 routes compiled, 0 TypeScript errors.
- Playwright checks: 0 console errors, 0 horizontal overflow at 390px and 1440px, mobile menu opens/closes, add-to-cart persists via localStorage across real navigation, cart line renders with image/qty/price.
- Vision QA on `/products/luna-sofa` (before final CSS pass) confirmed coherent Better Space brand palette, no layout defects, complete product content (image, price, material, dimensions, related products).
- Final full-page vision QA (mobile home, desktop cart) was blocked by a transient 429 rate limit on the vision backend at delivery time; automated evidence (build, overflow checks, console-clean, functional click-through) stands in as verification per this project's evidence bar.

## Known follow-ups
- Mobile menu dialog is not yet Escape-closable (close button only) — minor a11y gap to close in a future pass.
- Vision-based full visual QA should be re-run once the backend rate limit clears, to catch any subtler visual regressions the automated checks can't see.
