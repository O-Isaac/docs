import { repeating } from "@keystatic/core/content-components";

const Carousel = repeating({
    label: "Carousel",
    children: ["Image"],
    schema: {},
})

export default Carousel