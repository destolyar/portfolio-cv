import { motion } from 'framer-motion'
import { ResumeBody } from './ResumeBody'
import { ResumeFooter } from './ResumeFooter'
import { ResumeHeader } from './ResumeHeader'
import { FC } from 'react'

import styles from '../../styles/components/Resume/Resume.module.scss'

export const Resume: FC = () => {
  return (
    <>
      <div className={styles.layout}>
        <ResumeHeader />
        <ResumeBody />
        <ResumeFooter />
      </div>
    </>
  )
}