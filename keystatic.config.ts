import { docs } from '@/database/models/core';
import { mark } from '@/utils/logo';
import { config, collection } from '@keystatic/core';

// Keystatic Config File
export default config({
  storage: {
    kind: 'github',
    repo: `O-Isaac/docs`
  }, 
  collections: {
    rayshift: collection({
      label: 'Rayshift',
      slugField: 'title',
      columns: ['title', 'description'],  
      path: 'src/content/docs/rayshift/**',
      format: { contentField: 'content' },
      entryLayout: "content",
      schema: docs,
    }),
    instalacion: collection({
      label: 'Instalación',
      slugField: 'title',
      columns: ['title', 'description'],
      path: 'src/content/docs/instalacion/**',
      format: { contentField: 'content' },
      entryLayout: "content",
      schema: docs,
    }),
    especial: collection({
      label: 'Paginas especiales',
      slugField: 'title',
      columns: ['title', 'description'],
      path: 'src/content/docs/especial/**',
      format: { contentField: 'content' },
      entryLayout: "content",
      schema: docs,
    }),
    noticias: collection({
      label: 'Noticias',
      slugField: 'title',
      columns: ['title', 'description'],
      path: 'src/content/docs/noticias/**',
      format: { contentField: 'content' },
      entryLayout: "content",
      schema: docs,
    }),
  },
  ui: {
    brand: { name: "Proyecto Grand Order", mark },
    navigation: [
      "instalacion",
      "rayshift",
      "especial",
      "noticias"
    ]
  }
});