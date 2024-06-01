import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [
    starlight({
      title: "My Docs",
      customCss: ["./src/tailwind.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      components: {
        PageFrame: "@/layouts/frame.astro",
        Hero: "@/components/hero.astro"
      },
      sidebar: [
        {
          label: "Rayshift",
          autogenerate: {
            directory: "rayshift",
          },
        },
        {
          label: "Instalacion",
          autogenerate: {
            directory: "instalacion",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
