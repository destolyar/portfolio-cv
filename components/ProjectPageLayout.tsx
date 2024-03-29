import { motion } from "framer-motion"
import Head from "next/head"
import React, { FC, ReactNode } from "react"
import styles from '../styles/components/ProjectPageLayout.module.scss'

interface ProjectPageLayoutProps {
  children: ReactNode,
  label: string
}

export const ProjectPageLayout: FC<ProjectPageLayoutProps> = ({ children, label }) => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: -150 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }

  return(
    <>
      <Head>
        <title>{label}</title>
      </Head>
      <header className={styles.header}>
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 1 }}
        >{label}</motion.h1>
      </header>
      <main className={styles.container}>
      {children}
    </main>
  </>
  )
}