// Static-export mode switch (Chinese mirror deployment).
//
// The upstream site is a dynamic Next.js app (force-dynamic catch-alls,
// runtime redirects, middleware-driven SEO rewrites) served from Railway.
// The Chinese mirror is deployed as a static export to GitHub Pages, which
// cannot run any of that machinery. Setting NEXT_STATIC_EXPORT=1 at build
// time flips every export-incompatible behavior in one place:
//
//   - next.config.ts opts into `output: "export"` and drops rewrites/redirects
//   - catch-all routes prerender every sitemap URL instead of rendering on demand
//   - runtime redirects collapse to notFound() (the mirror only exposes
//     canonical URLs, so redirect-only paths have no audience)
//   - runtime-config skips `unstable_noStore()` (no request-time env to read)
//
// The env var is read at module-eval time, which for prerendering happens
// during `next build` — exactly when the flag needs to be observable.
export const STATIC_EXPORT = process.env.NEXT_STATIC_EXPORT === "1";
