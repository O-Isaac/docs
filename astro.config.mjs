import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import vercel from "@astrojs/vercel/serverless";
import AutoImport from 'astro-auto-import';
import starlightConfig from "./starlight.config.ts";
import importsConfig from "./imports.config.ts";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.proyectograndorder.es",
  redirects: {
    '/admin': '/keystatic'
  },
  output: "hybrid",
  integrations: [starlight(starlightConfig), tailwind({
    applyBaseStyles: false
  }), AutoImport(importsConfig), react(), keystatic(), mdx(), metaTags()],
  adapter: vercel()
});