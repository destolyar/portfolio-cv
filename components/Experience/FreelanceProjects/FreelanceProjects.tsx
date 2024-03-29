import { motion } from "framer-motion"
import { Project } from "./Project"
import styles from '../../../styles/components/Experience/FreelanceProjects/FreelanceProjects.module.scss'
import projects from '../../../projects.json'

export const FreelanceProjects: React.FC = () => {
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
      {projects.map((item => 
        <Project         
          width={350} 
          height={300}
          label={item.label}
          image={item.image}
          blurImage={item.blurImage}
          id={item.id}
          key={item.id}
          />))}
    </motion.section>
  )
}


