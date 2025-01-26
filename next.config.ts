import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  exclude: ['docker'],
  output: "standalone",
};

export default nextConfig;
