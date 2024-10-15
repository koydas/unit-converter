/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "https://github.com/koydas/unit-converter/tree/main/docs/",
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
