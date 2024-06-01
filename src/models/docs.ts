import { fields } from "@keystatic/core";

export default {
    title: fields.slug({ name: { label: 'Titulo' } }),
    description: fields.text({ label: 'Descripción' }),
    template: fields.select({
        label: "Tipo",
        description: "Tipo de pagina",
        options: [
            { label: "Documentación", value: "doc" },
            { label: "Especial", value: "splash"}
        ],
        defaultValue: "doc"
    }),
    content: fields.mdx({ label: "Cuerpo" }),
    hero: fields.object({
        title: fields.text({ label: "Titulo" }),
        tagline: fields.text({ label: "Subtitulo" }),
        image: fields.object({
            alt: fields.text({ label: "Alt"}),
            file: fields.text({ label: "src" })
        }),
        actions: fields.array(
            fields.object({
                text: fields.text({ label: "Text" }),
                link: fields.url({ label: "Link" }),
                icon: fields.text({ label: "Icon "}),
                variant: fields.select({ 
                    label: "Variant", 
                    options: [
                        { label: "Primary", value: "primary" }
                    ],
                    defaultValue: "primary"
                }),
                attr: fields.object({
                    rel: fields.text({ label: "Rel" })
                })
            }),
            { label: "Actions" }
        )
    }, { label: "Hero", description: "Esta configuración solo sera efectiva cuando el tipo de pagina sea Especial" }),
    banner: fields.object({
        content: fields.text({
            label: "Contenido",
            defaultValue: "¡Acabamos de lanzar algo genial!\n<a href=\"https://example.com\">Checalo</a>"
        })
    })
}
