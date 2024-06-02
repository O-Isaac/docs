import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import AutoImport from 'astro-auto-import';
import react from "@astrojs/react";
import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://v2.proyectograndorder.es",
  devToolbar: {
    enabled: false
  },
  output: "hybrid",
  integrations: [starlight({
    title: "Proyecto Grand Order",
    customCss: ["./src/tailwind.css"],
    social: {
      github: "https://github.com/withastro/starlight"
    },
    components: {
      PageFrame: "@/layouts/main.astro",
      Hero: "@/components/core/hero.astro",
      Head: "@/components/core/head.astro"
    },
    sidebar: [{
      label: "Rayshift",
      autogenerate: {
        directory: "rayshift"
      }
    }, {
      label: "Instalacion",
      autogenerate: {
        directory: "instalacion"
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), AutoImport({
    imports: ['@components/extended/Carousel.astro', '@components/extended/Image.astro']
  }), react(), keystatic(), mdx()],
  adapter: vercel()
});