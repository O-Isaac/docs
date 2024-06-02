import { fields } from "@keystatic/core";
import type { ContentComponent } from "@keystatic/core/content-components";

interface Options {
    image: {
        directory: string
        publicPath: string
    }
}

const createMarkdownField = (name: string, components: Record<string, ContentComponent>, opts?: Options) => fields.mdx({ 
    label: name,
    options: {
        ...opts,
        image: {
            directory: 'src/assets/images/docs/inline',
            publicPath: '@assets/images/docs/inline/'
        },
        blockquote: true,
        heading: true,
        bold: true,
        code: true,
        codeBlock: true,
        divider: true,
        italic: true,
        link: true,
        orderedList: true,
        strikethrough: true,
        table: true,
        unorderedList: true
    },
    components: {
        ...components
    }
})

export default createMarkdownField