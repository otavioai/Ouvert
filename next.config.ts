import type { NextConfig } from "next";

const usingGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath =
  usingGitHubPages && process.env.NEXT_PUBLIC_BASE_PATH !== ""
    ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "/Ouvert")
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1", "localhost", "::1"],
  ...(pagesBasePath
    ? { basePath: pagesBasePath, assetPrefix: pagesBasePath }
    : {}),
};

export default nextConfig;
