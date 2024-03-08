/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'techcrunch.com',
				pathname: '/wp-content/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'cdn.hashnode.com',
			},
		],
	},
};

export default nextConfig;
