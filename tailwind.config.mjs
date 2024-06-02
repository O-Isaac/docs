import starlightPlugin from '@astrojs/starlight-tailwind';
import gradientMaskImagePlugin from 'tailwind-gradient-mask-image';
import typographyPlugin from "@tailwindcss/typography"
import colors from 'tailwindcss/colors';
import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: colors.indigo,
				gray: colors.zinc,
			},
			fontFamily: {
				sans: ['"Atkinson Hyperlegible"'],
				mono: ['"IBM Plex Mono"'],
			},
			content: {
				"chr-dark": "url(/assets/chr-dark.webp)"
			},
			backgroundImage: {
				"hero": "url(/assets/hero.webp)",
				"hero-dark": "url(/assets/hero-dark.webp)",
			}
		},
	},
	plugins: [
		starlightPlugin(),
		gradientMaskImagePlugin,
		typographyPlugin,
		animations
	],
}
