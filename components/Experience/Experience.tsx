import dynamic from "next/dynamic";
import styles from '../../styles/components/Experience/Experience.module.scss'
import { useState } from 'react'
import { motion } from "framer-motion";
import { AboutMe } from "./AboutMe/AboutMe";

const FreelanceProjects = dynamic<React.FC>(() => import("./FreelanceProjects/FreelanceProjects").then((mod) => mod.FreelanceProjects)) as React.FC
const Employment = dynamic<React.FC>(() => import("./Employment/Employment").then((mod) => mod.Employment)) as React.FC

const experienceVariants = {
  "freelance": <FreelanceProjects />,
  "employment": <Employment />,
  "about": <AboutMe />
}

export const Experience: React.FC = () => {
  const [currentExperience, setCurrentExperience] = useState(experienceVariants.about)

  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={styles.container}>
      <nav className={styles.nav}>
        <span className={styles.link} onClick={() => setCurrentExperience(experienceVariants.freelance)}>
          Freelance projects
        </span>
        <span className={styles.link} onClick={() => setCurrentExperience(experienceVariants.employment)}>
          Employment
        </span>
        <span className={styles.link} onClick={() => setCurrentExperience(experienceVariants.about)}>
          About Me
        </span>
      </nav>
      <>
        {currentExperience}
      </>
    </motion.section>
  )
}