# Better Space Ecommerce

## Purpose
A polished Indonesian furniture ecommerce preview for Better Space, helping home and office shoppers browse contemporary furniture and request larger-order supplier pricing.

## Users and conversion objective
Primary users are Indonesian consumers furnishing living, sleeping, dining, and work spaces. Secondary users are business and project buyers. The primary conversion is browsing a product collection and adding items to a local demo cart. The secondary conversion is a validated B2B enquiry.

## Information architecture and journeys
- Utility bar, branded header with search, and category navigation establish shopping paths.
- Hero introduces modern furniture and leads to the weekly offers collection.
- Weekly offers, category browsing, mattress promotions, and home essentials provide dense editorial-commerce discovery.
- The B2B panel ends the commerce journey with an enquiry flow.
- Footer provides service links, newsletter feedback, and payment context.

## Visual language
Primary reference is the supplied Better Space ecommerce screenshot. The UI uses a white canvas, slate-navy anchors, restrained blue-gray promotional surfaces, compact retail density, lightly rounded surfaces, and cool neutral furniture photography. The wordmark is a two-word editorial serif lockup: `Better Space`, with the exact tagline `FURNITURE FOR A BETTER LIVING.`

### Tokens
- `--brand-stone: #a6a3a3`
- `--brand-silver: #d4d4d1`
- `--brand-ice: #d8e7ff`
- `--brand-dusty: #8e9fb8`
- `--brand-slate: #3b4c66`
- Semantic colors centralize primary, muted, soft-surface, border, text and footer usage.

### Decisions and intent
- Slate navy anchors headlines and checkout-like actions because it establishes readable premium retail hierarchy.
- Dusty and ice blue are reserved for promotions, status labels, and cool surfaces so the palette remains calm rather than uniformly blue.
- The high-contrast serif wordmark gives the header an interiors-editorial character; a neutral sans-serif supports shopping utility text.
- Section compositions vary between a split intro/product rail, circular category rail, banner strip, and B2B form to maintain a dense retail rhythm.
- Images use consistent cool-neutral furniture photography to support the approved palette.
- Motion stays at hover/transition level, with carousel changes driven by user controls rather than automatic distraction.
- Radius and shadow are restrained: cards sit on their own image/white planes, while the hero and B2B form use elevation only to separate layered content.

## Architecture
Next.js 16, App Router, TypeScript and Tailwind 4. The UI is a client-side interactive ecommerce demo rendered from colocated structured data and reusable components. No backend, authentication, checkout, payment, or CMS is included.

## Data and interactions
Product catalogue is a 100-item furniture dataset seeded from EDI's catalogue pack (`/home/ubuntu/aspireomedia/furniture-catalog/`), covering 17 product categories across 6 rooms (Ruang Tamu, Kamar Tidur, Ruang Makan, Ruang Kerja, Penyimpanan, Pencahayaan). Names, descriptions, materials, dimensions, and prices are authored demo content — realistic but not real inventory or real prices. Photography is real, licensed Pexels stock, hotlinked from `images.pexels.com` (whitelisted alongside `images.unsplash.com` in `next.config.ts` remotePatterns); each product has a distinct photo with zero duplicates verified across the full catalogue. Search filters local product names and scrolls to offers. Wishlist and cart state persist to `localStorage`, hydrated after mount with an explicit loading state on `/cart` to avoid SSR/client hydration mismatches. Category items scroll to the category section; product action adds to local cart. Slider controls use keyboard-accessible buttons. Newsletter and B2B forms validate client-side and return visible success/error feedback. Related products on the PDP match by exact category first (falling back to room only if a category has no other members), so a sofa PDP shows other sofas and a desk PDP shows other desks.

## Performance, accessibility, and SEO
Remote imagery uses optimized `next/image` with permitted Unsplash hosts. Semantic landmarks, labeled controls, visible focus states, and responsive controls are required. The metadata identifies Better Space. Mobile is a separate reflow state with a menu and 2-column product grid.

## Integrations and deployment
GitHub repository and a new Vercel project deploy the `main` branch. Production domain: `https://preview7.aspireomedia.com`. Figma Community design is used structurally where MCP permits; supplied Better Space screenshot remains visual priority. No Figma URLs ship in runtime source.

## Exclusions
No real inventory, checkout, payment processing, customer accounts, supplier CRM, or brand partnership claims.

## Dial declaration
Reading this as: a contemporary Indonesian furniture ecommerce storefront for home and office shoppers, in a cool editorial-retail language, dial ENERGY 2 / RHYTHM 3 / MOTION 1.

## Source references
- Figma Community source: https://www.figma.com/community/file/1184498378829556800/ecommerce-website-design
- Supplied Better Space ecommerce screenshot: primary visual target.
- Supplied approved palette and Better Space wordmark: brand sources.

## Figma inspection note
The Community URL was inspected through Figma MCP and direct fetch pathways. It did not expose a valid standard `/design/{fileKey}` key to the available MCP, so no direct Figma asset is used. The implementation follows the requested fallback: Community file as structural inspiration and supplied Better Space screenshot as high-fidelity visual specification.

## Major decisions
- `Better Space`, never Rumaio, is used throughout the project.
- The supplied wordmark is recreated with web typography rather than embedded as a header screenshot, preserving responsive accessibility and avoiding a raster logo dependency.
- Product imagery is served from stable Unsplash sources, not temporary Figma URLs.
- The named mattress brands are presented as category copy only, without fake logos or claims of affiliation.

## Security
No secrets are committed. Forms are demo-only and do not transmit user data.