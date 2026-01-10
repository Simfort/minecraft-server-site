import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.minecraftrating.ru",
        pathname: "/**", // или конкретная маска
      },
    ],
  },
};

export default nextConfig;
