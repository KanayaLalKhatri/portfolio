// Prefixes public-folder asset paths with the GitHub Pages base path.
// next/image does NOT auto-add basePath to public assets when images are
// unoptimized, so we add it manually wherever we render such assets.
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const asset = (p: string): string =>
  p.startsWith("/") ? `${BASE_PATH}${p}` : p;
