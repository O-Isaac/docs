import { fields } from "@keystatic/core"

const createSelect = (label: string, inputOptions: string, defaultValue: string, description?: string) => {
    const options = inputOptions.split(",").map((e) => {
        const [label, value] = e.trim().split(":")
        return { label, value }
    })

    return fields.select({ label, options, defaultValue, description })
} 

export default createSelect