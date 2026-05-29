/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Enables type-checked links — catches broken nav at build time.
    // Disabled by default to keep the first build green. Re-enable when you're
    // comfortable typing every href as a Route literal.
    // typedRoutes: true,
  },
};

export default nextConfig;
