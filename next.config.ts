import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root: a stray package-lock.json in the user folder otherwise makes
  // Turbopack treat C:\Users\<name> as the root and miss file changes in this project
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
