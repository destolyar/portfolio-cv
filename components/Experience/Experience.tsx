import dynamic from "next/dynamic";
import styles from '../../styles/components/Experience/Experience.module.scss'
import { useState } from 'react'
import { FreelanceProjects } from "./FreelanceProjects/FreelanceProjects";
import { motion } from "framer-motion";

const Employment = dynamic(() => import("./Employment/Employment").then((mod) => mod.Employment))
const AboutMe = dynamic(() => import("./AboutMe/AboutMe").then((mod) => mod.AboutMe))

const experienceVariants = {
  "freelance":  <FreelanceProjects />,
  "employment": <Employment />,
  "about": <AboutMe />
}

export const Experience: React.FC = () => {
  const [currentExperience, setCurrentExperience] = useState(experienceVariants.freelance)

  return (
    <motion.section className={styles.container}>
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