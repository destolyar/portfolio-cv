import { motion } from "framer-motion"
import { ProjectsItem } from "./ProjectsItem.tsx/ProjectsItem"
import styles from '../../../styles/components/Experience/Projects/Projects.module.scss'

export const Projects: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }

  return(
    <motion.section 
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{type: "linear"}}
      className={styles.projects}>
      <ProjectsItem 
        width={350} 
        height={300}
        label={"Next auth pages"}
        image={"/previewed/mocup"}/>
      <ProjectsItem 
        width={350} 
        height={300}
        label={"Adventure landing"}
        image={"/previewed/adventure-landing"}/>
    </motion.section>
  )
}


