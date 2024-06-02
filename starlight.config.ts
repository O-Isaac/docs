import type { StarlightUserConfig } from "@astrojs/starlight/types";

export default {
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
} as StarlightUserConfig