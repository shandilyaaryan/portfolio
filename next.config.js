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
					"https://drive.google.com/file/d/1dfBnh0rm-m-mX1Z1CZuSHQ-NAflUTYTo/view?usp=sharing",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
