/** @type {import('next').NextConfig} */

// Capacitorビルド時はbasePathを無効化（アプリ内でルート相対パスを使用するため）
const isCapacitorBuild = process.env.CAPACITOR_BUILD === 'true';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isCapacitorBuild ? "" : (isProduction ? "/csm-exab" : ""),
  assetPrefix: isCapacitorBuild ? "" : (isProduction ? "/csm-exab/" : ""),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
