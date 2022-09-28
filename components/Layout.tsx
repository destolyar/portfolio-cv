import { motion } from "framer-motion"
import React, { FC, ReactNode } from "react"
import styles from '../styles/components/Layout.module.scss'
import { Header } from "./Header"

interface LayoutProps {
  children: ReactNode,
  key: any
}

export const Layout: FC<LayoutProps> = ({ children, key }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return(
    <>
      <Header/>
      <motion.main 
        variants={variants}
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{type: "linear"}}
        className={styles.container}
      >
      {children}
    </motion.main>
  </>
  )
}