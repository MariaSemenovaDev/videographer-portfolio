/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  typedRoutes: true,
  basePath: isGithubPages ? "/videographer-portfolio" : undefined,
  assetPrefix: isGithubPages ? "/videographer-portfolio/" : undefined,
};

export default nextConfig;
