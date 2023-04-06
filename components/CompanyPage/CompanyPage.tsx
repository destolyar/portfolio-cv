import { motion } from "framer-motion"
import Head from "next/head"
import React, { FC, ReactNode } from "react"
import styles from "../../styles/components/CompanyPage.module.scss"
import { CompanyInterface } from "../../utils/interfaces"
import Image from "next/image"
import Link from "next/link"

interface CompanyPageProps {
  children: ReactNode,
  company: CompanyInterface
}

export const CompanyPage: FC<CompanyPageProps> = ({ children, company }) => {
  const { image, label, description, date, position } = company
  const headerVariants = {
    hidden: { opacity: 0, x: 0, y: -150 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }


  const infoVariants = {
    hidden: { opacity: 0, x: "100vw", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -150 },
  }

  return (
    <>
      <Head>
        <title>{label}</title>
      </Head>
      <header className={styles.header}>
        <motion.section
          variants={headerVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.8 }}
          className={styles.nameContainer}
        >
          <Image width={50} height={50} src={image} />
          <h1>{label}</h1>
        </motion.section>
      </header>
      <main className={styles.container}>
        <motion.section
          variants={infoVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.8 }}>
          <h2>Position</h2>
          <p className={styles.info}>{position}</p>
        </motion.section>
        <motion.section
          variants={infoVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.8, delay: 0.05 }}>
          <h2>Date</h2>
          <p className={styles.info}>{date}</p>
        </motion.section>
        <motion.section
          variants={infoVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.8, delay: 0.1 }}>
          <h2>Experience</h2>
          <ul>
            {description.map(fact => <li key={fact} className={styles.listItem}>{fact}</li>)}
          </ul>
        </motion.section>

        <Link href="/">
          <motion.a
            variants={infoVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.8, delay: 0.15 }}
            className={styles.returnButton}>Go back</motion.a>
        </Link>
      </main>
    </>
  )
}