import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true, // optional, generates /about/index.html
  images: { unoptimized: true },
};

export default nextConfig;
