import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  output: "hybrid",
  integrations: [starlight({
    title: "My Docs",
    customCss: ["./src/tailwind.css"],
    social: {
      github: "https://github.com/withastro/starlight"
    },
    components: {
      PageFrame: "@/layouts/frame.astro",
      Hero: "@/components/hero.astro"
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
  }), react(), markdoc(), keystatic()]
});