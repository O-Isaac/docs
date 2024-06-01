import { fields } from "@keystatic/core";

export default {
    title: fields.slug({ name: { label: 'Titulo' } }),
    description: fields.text({ label: 'Descripción' }),
    content: fields.mdx({ label: "Cuerpo" }),
}
