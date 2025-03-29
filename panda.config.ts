import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import cyan from "@park-ui/panda-preset/colors/cyan";
import neutral from "@park-ui/panda-preset/colors/neutral";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	presets: [
		"@pandacss/preset-base",
		createPreset({
			accentColor: cyan,
			grayColor: neutral,
			radius: "sm",
		}),
	],

	// Where to look for your css declarations
	include: ["./app/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Use React
	jsxFramework: "react",

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
