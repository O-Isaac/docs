import { fields } from "@keystatic/core";

export default {
    title: fields.slug({ name: { label: 'Titulo' } }),
    description: fields.text({ label: 'Descripción' }),
    content: fields.mdx({ 
        label: "Cuerpo",
        options: {
            image: {
                directory: 'src/assets/images/docs/inline',
                publicPath: '@assets/images/docs/inline/'
            }
        } 
    }),
    image: fields.image({
        label: 'Image',
        directory: 'src/assets/images/docs/feature',
        publicPath: '@assets/images/docs/feature/'
    })
}
