export const mark = ({ colorScheme }: { colorScheme: "light" | "dark" }) => {
    return <a href="/">
        <img 
            style={{ filter: `invert(${colorScheme === "light" ? '0' : '1' })`}}
            src="/assets/bg-logo.svg"
            width={34} 
            height={34} 
            alt='Logo'
        />
    </a>
}