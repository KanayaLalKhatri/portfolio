import type { NextConfig } from "next";

// Repo name → used as the GitHub Pages base path (https://<user>.github.io/<repo>)
const repo = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // static site, deployable to GitHub Pages
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
