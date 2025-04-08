import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    workerThreads: true,
  },
};

export default nextConfig;
