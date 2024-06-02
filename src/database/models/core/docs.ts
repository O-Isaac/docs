import { fields } from "@keystatic/core";

import * as components from "@/database/models/components";
import { markdown, select } from "@/database/models/fields";

export default {
    title: fields.slug({ name: { label: 'Titulo' } }),
    description: fields.text({ label: 'Descripción' }),
    content: markdown("Body", components),
    template: select(
        "Tipo de documento", 
        "Documentación:doc,Especial:especial,Noticias:news", 
        "doc"
    ),
    image: fields.image({
        label: 'Image',
        directory: 'public/images/docs',
        publicPath: '/images/docs/'
    })
}
