/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: "export",

	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	trailingSlash: true,

	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	skipTrailingSlashRedirect: true,

	// Optional: Change the output directory `out` -> `build`
	distDir: "build",

	async rewrites() {
		return [
			{
				source: "/",
				destination: "/home",
			},
			{
				source: "/admin",
				destination: "/admin/index.html",
			},
		];
	},
};

module.exports = nextConfig;
