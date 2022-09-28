import { motion } from "framer-motion"
import { FC } from "react"

interface StackProps {
    title: string,
    items: string[]
}

const animation = {
    hidden: { opacity: 0, x: "-100vw", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: "-100vh" },
}

export const Stack: FC<StackProps> = ({ title, items }) => {
    return(
        <motion.section
            variants={animation}
        >
            <h2>{title}</h2>
            <ul>
                {items.map(i => <li key={i}>{i}</li>)}
            </ul>
        </motion.section>
    )
}