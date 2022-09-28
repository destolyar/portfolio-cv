import { FC } from "react"
import { Stack } from "./Stack"
import styles from '../../styles/components/ProjectPage/Info.module.scss'
import { motion } from "framer-motion"

interface InfoProps {
    description: string,
    stack: string[],
    deployLink: string
}

const variants = {
    hidden: { opacity: 0, x: "100vw", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
}

export const Info: FC<InfoProps> = ({ description, stack, deployLink  }) => {
    return(
        <motion.section 
            className={styles.info}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 1.5 }}>
            <p>{description}</p>
            <Stack title="Stack" items={stack}/>
            <a href={deployLink} target="_blank">Click to check it on your device</a>
        </motion.section>
    )
}