import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "efood-admin.6amtech.com",
      },
    ],
  },
};

export default nextConfig;
