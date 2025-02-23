/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	async redirects() {
		return [
			{
				source: "/resume",
				destination:
					"resume.pdf",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
