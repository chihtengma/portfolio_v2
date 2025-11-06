import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack to avoid lightningcss native module issues
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
