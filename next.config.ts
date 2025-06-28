import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "http", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "s.gravatar.com" },
      { protocol: "http", hostname: "s.gravatar.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "http", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "http", hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;
