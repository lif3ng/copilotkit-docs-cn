// Static-export replacement for `next/navigation`'s `redirect()`.
//
// Upstream uses server redirects to canonicalize legacy/react-scoped URLs.
// A static export has no server to answer those hops, and `redirect()`
// throws NEXT_REDIRECT during prerendering, which fails the build. In
// export mode those redirect-only paths collapse to 404: the mirror's
// sitemap only publishes canonical URLs, so no reader ever lands on them.
// Outside export mode this module is never imported — pages import
// `redirect` from next/navigation directly.
import { notFound } from "next/navigation";

export function redirect(..._args: unknown[]): never {
  notFound();
  // notFound() never returns, but TypeScript needs an unreachable exit.
  throw new Error("unreachable");
}
