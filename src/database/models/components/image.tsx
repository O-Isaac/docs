import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

const Image = block({
    label: "Image",
    schema: {
        src: fields.conditional(
            fields.select({ 
                label: "Fuente de la imagen", 
                options: [
                    { label: "Local", value: "local" },
                    { label: "Internet", value: "internet"}
                ],
                defaultValue: "local",
            }),
            {
                internet: fields.text({ label: "URL" }),
                local: fields.image({ label: "src", directory: 'public/images/docs',publicPath: '/images/docs/' })
            }
        ),
        alt: fields.text({ label: "alt"}),
        className: fields.text({ label: "class", defaultValue: "panel" })
    },
    ContentView(props) {
        let src = ""

        if (props.value.src.discriminant === "local" && props.value.src.value) {
            src =  URL.createObjectURL(new Blob([props.value.src.value.data]))
        } else if (props.value.src.discriminant === "internet" && props.value.src.value) {
            src = props.value.src.value
        }

        return <img src={src} alt={props.value.alt} />
    },
})

export default Image