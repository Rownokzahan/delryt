/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows images from any hostname
      },
    ],
  },
};

export default nextConfig;
