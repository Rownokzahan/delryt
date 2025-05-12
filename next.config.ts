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
        hostname: "admin.delryt.com",
      },

      //TODO: These should be removed
      {
        protocol: "https",
        hostname: "rp-media.faasos.io",
      },
      {
        protocol: "https",
        hostname: "assets.faasos.io",
      },
      {
        protocol: "https",
        hostname: "product-assets.faasos.io",
      },
    ],
  },
};

export default nextConfig;
