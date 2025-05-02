import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['media.gucci.com','ik.imagekit.io','images.pexels.com','diorama.dam-broadcast.com','res.cloudinary.com','images.unsplash.com']
  },
};

export default nextConfig;
