import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required for static exports
  },
  // UNCOMMENT the line below if your GitHub URL looks like: username.github.io/your-repo-name
  // basePath: '/your-repo-name', 
};

export default nextConfig;
