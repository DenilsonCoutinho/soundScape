/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'i.scdn.co',
          },
        ],
        
          domains: ['t.scdn.co','charts-images.scdn.co'],
    
      },
};

export default nextConfig;
