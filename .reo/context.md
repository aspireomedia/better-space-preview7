# Better Space — Preview 7 operational context

## State (2026-09-30)
- Full furniture catalogue implemented across every route, replacing the placeholder homepage-only build.
- Data source: `app/lib/catalog.ts` — 24 real furniture products (2 per category) across 6 rooms (Ruang Tamu, Kamar Tidur, Ruang Makan, Ruang Kerja, Penyimpanan, Pencahayaan) and 12 categories (Sofa, Kursi Santai, Meja Tamu, Tempat Tidur, Lemari, Dekorasi, Meja Makan, Kursi Makan, Kursi Kerja, Penyimpanan, Rak Buku, Lampu Meja). All names/copy in Indonesian, styled after the reference Figma sample's structure (categories, offers grid, editorial split, related products) but with original Better Space branding, product names, and imagery — no assets or naming borrowed directly from the reference file.
- Routes: `/` (home), `/collection/[room]` (category listing), `/products/[id]` (product detail + related products), `/cart` (persisted via localStorage), `/about`, `/contact` (client-validated form).
- Shared shell in `app/components/store.tsx`: header, search-as-you-type, mobile menu (dialog, keyboard-closable via Escape not yet wired — only close button), wishlist (localStorage), cart badge, footer newsletter.
- Palette/tokens unchanged from existing Preview 7 design system (`--brand-slate`, `--brand-dusty`, `--brand-ice`, serif display type) — extended, not replaced, per continuity requirement ("use existing Preview 7 homepage as base").
- Products are fully linked: homepage → category → product detail → related products (same room) → cart, with breadcrumbs on every subpage.

## Related-products category fix (2026-09-30)
- **Bug found and fixed:** `relatedProducts()` originally filtered by `room` (e.g. "Ruang Tamu"), not `category` — a sofa PDP could recommend a coffee table or lounge chair since all three share the living-room. J Kal flagged this explicitly.
- Fix: `relatedProducts()` now filters by `category` first (sofa → sofa, meja kerja → meja kerja), falling back to same-room only if a category genuinely has zero other members.
- Catalog doubled from 12 to 24 products (2 per category) so category-only filtering always has real items to show.
- Homepage sections previously used fragile `products.slice(0,5)` / `.slice(8)` array-index picks, which silently shifted when the catalog grew — replaced with explicit curated product-ID lists (`weeklyOfferIds`, `dailyDetailIds`).
- Verified via real-browser Playwright click-through across all 24 products: every PDP's related section matches its own category (all PASS, zero cross-category leakage).

## Branded domain fix (2026-09-30)
- **Bug found and fixed:** `preview7.aspireomedia.com` had no dedicated DNS record, so it fell through to the `*.aspireomedia.com → 64.177.83.24` wildcard (this VPS itself), serving the wrong TLS cert (`kanban.aspireomedia.com`) instead of routing to Vercel.
- Vercel's project alias for `preview7.aspireomedia.com` was already correctly configured on Vercel's side — only the DNS record was missing.
- First attempt: added a generic `A → 76.76.21.21` record — routing worked (HTTP 200) but TLS cert issuance stalled.
- Fix: compared against working sibling previews (`preview5`, `preview6`), which use Vercel's per-project CNAME target rather than the generic A record. Pulled the correct rank-1 recommended CNAME via the Vercel domain-config API (`5e34f358d2c9a83d.vercel-dns-017.com`) and switched the Cloudflare record to CNAME. Cert issued within ~60s.
- Verified live: valid cert (`CN=preview7.aspireomedia.com`, expires Dec 29 2026), all routes return HTTP 200.
- Cloudflare zone: `3b835a1bfc6d77f1d1f45abfa91d18d7`. Cloudflare API token is sourced from `~/.zshrc` (`CLOUDFLARE_API_TOKEN`), not stored elsewhere.

## Repo rename (2026-09-30)
- GitHub repo `aspireomedia/preview7-better-space` renamed to `aspireomedia/better-space-preview7` at J Kal's explicit request.
- Local directory path is unchanged: `/home/ubuntu/aspireomedia/preview7-better-space`.
- Local git remote updated to the new URL (`git remote set-url origin https://github.com/aspireomedia/better-space-preview7.git`).
- Vercel's Git integration links by GitHub's immutable `repoId` (1395426315), not by name — verified via the Vercel Projects API that the link survived the rename; a real push after the rename still needs to be confirmed as triggering auto-deploy before this is considered fully closed.

## Verified (2026-09-30)
- `npm run build` — clean, 7 routes compiled, 0 TypeScript errors.
- Playwright checks: 0 console errors, 0 horizontal overflow at 390px and 1440px, mobile menu opens/closes, add-to-cart persists via localStorage across real navigation, cart line renders with image/qty/price.
- All 24 products' related-products sections verified same-category via real browser automation (not code inspection).
- Branded domain `preview7.aspireomedia.com` verified live with valid TLS and all routes returning HTTP 200.

## Known follow-ups
- Mobile menu dialog is not yet Escape-closable (close button only) — minor a11y gap to close in a future pass.
- Repo rename: confirm the very next push still auto-deploys on Vercel (metadata says it should, but hasn't been proven with a live push since the rename).
- Full-page vision QA (mobile home, desktop cart) was blocked earlier by a transient 429 on the vision backend — worth a re-run to catch any subtler visual regressions the automated checks can't see.
