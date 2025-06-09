/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable the @/ path alias
  experimental: {
    appDir: true,
  },
  // Configure webpack to handle the @/ alias
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname + '/src';
    return config;
  },
  // Add support for importing CSS files
  webpack: (config) => {
    // Handle non-JavaScript/TypeScript files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  // Enable static exports for static site generation
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Configure base path if your app is not served from the root
  // basePath: '/your-base-path',
  // Optional: Configure image domains if you're using next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
