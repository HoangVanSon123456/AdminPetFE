import type { NextConfig } from "next";

const { i18n } = require("./next-i18next.config.js");

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/pet",
  i18n,
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
};

export default nextConfig;
