import docs from '@/models/docs';

import { mark } from '@/utils/logo';
import { config, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: `Proyecto-Grand-Order-Oficial/docs`
  }, 
  collections: {
    docs: collection({
      label: 'Documentación',
      slugField: 'title',
      columns: ['title', 'description'],
      path: 'src/content/docs/**',
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