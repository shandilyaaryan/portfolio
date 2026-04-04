import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.simpleicons.org/**"),
      new URL("https://assets.chanhdai.com/**"),
    ],
  },
};

export default nextConfig;
