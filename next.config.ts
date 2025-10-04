import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  reactStrictMode: true,
};

export default nextConfig;
