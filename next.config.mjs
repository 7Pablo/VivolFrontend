console.log("Base path:", process.env.NEXT_PUBLIC_BASE_PATH);  // Add this line

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
