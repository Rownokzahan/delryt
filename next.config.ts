import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "efood-admin.6amtech.com",
      },
      {
        protocol: "https",
        hostname: "rp-media.faasos.io",
      },
    ],
  },
};

export default nextConfig;
