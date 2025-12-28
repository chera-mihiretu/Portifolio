import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO Optimizations */
  
  // Enable image optimization for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compress output for faster loading
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,

  // Enable React Strict Mode for better development
  reactStrictMode: true,

  // Optimize production builds
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Add trailing slash for consistent URLs
  trailingSlash: false,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
