import starlightPlugin from '@astrojs/starlight-tailwind';
import gradientMaskImagePlugin from 'tailwind-gradient-mask-image';
import colors from 'tailwindcss/colors';

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
			backgroundImage: {
				"hero": "url(/assets/hero.webp)"
			}
		},
	},
	plugins: [
		starlightPlugin(),
		gradientMaskImagePlugin
	],
}
