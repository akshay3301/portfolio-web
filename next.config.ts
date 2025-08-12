/** @type {import('next').NextConfig} */
const nextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", // enables static export
  images: {
    unoptimized: true, // needed for static export with Next/Image
  },
};

module.exports = nextConfig;
