import docs from '@/models/docs';

import { mark } from '@/utils/logo';
import { config, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: `Proyecto-Grand-Order-Oficial/docs`
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
  },
  ui: {
    brand: {
        name: "Proyecto Grand Order",
        mark
    },
  }
});