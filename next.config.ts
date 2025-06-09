import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages:
    process.env.NODE_ENV === "development" ? ["@stagewise/toolbar-next"] : [],
};

export default nextConfig;
