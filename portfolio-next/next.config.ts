import path from "path";
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/portfolio" : undefined,
  assetPrefix: isGithubPages ? "/portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
