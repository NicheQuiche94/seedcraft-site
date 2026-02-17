import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/escapage', destination: '/escapage.html' },
    ];
  },
};

export default nextConfig;