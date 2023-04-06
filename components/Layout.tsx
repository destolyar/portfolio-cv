import Head from "next/head"
import React, { ReactNode } from "react"
import styles from '../styles/components/Layout.module.scss'
import resumeStyles from "../styles/components/Resume/Resume.module.scss"
import { Header } from "./Header"
import { Resume } from "./Resume/Resume"
import { motion } from "framer-motion"

interface LayoutProps {
  children: ReactNode,
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <>
      <Head>
        <title>My Porfolio</title>
        <meta property="description" content="Vladislav Metik - Experienced Full-stack Developer: React, Vue, Node.js, Python, Go, and more. Specializing in e-commerce & web platforms with a strong background in frontend & backend technologies, databases, and modern web development tools." />
        <meta name="google-site-verification" content="gICfyg1QrXDtWC3en4dFryHRJd9hfaWAJOQRSMlTTFc" />
      </Head>
      <Header />
      <main className={styles.container}>
        <motion.section
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          className={resumeStyles.container}>
          <Resume />
        </motion.section>
        {children}
      </main>
    </>
  )
}