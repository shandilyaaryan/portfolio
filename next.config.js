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
					"https://drive.google.com/file/d/1I4EfUrveLIjdcwRPaZnm5iFrEUGs3sGv/view?usp=drive_link",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
