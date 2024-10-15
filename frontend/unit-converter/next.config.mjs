/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = !!process.env.IS_DEV

const basePath = isDev 
                  ? __dirname.replaceAll("\\", "/").replace("D:/", "/").replace("/frontend/unit-converter", "") + "/docs"
                  : '/unit-converter'

const nextConfig = {
  basePath,
  output: 'export',
  images: {
    unoptimized: true
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  }
};

export default nextConfig;
