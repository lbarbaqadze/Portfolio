import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true, 
  output: 'export', 
  assetPrefix: isProd ? '/Portfolio/' : '',
  basePath: isProd ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
