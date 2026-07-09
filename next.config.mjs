/** @type {import('next').NextConfig} */
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPages = repository.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS && repository && !isUserOrOrgPages
    ? `/${repository}`
    : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  typedRoutes: true,
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
