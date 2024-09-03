/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'c4.wallpaperflare.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'c1.wallpaperflare.com',
                port: '',
            }
        ],
    },
};

export default nextConfig;
