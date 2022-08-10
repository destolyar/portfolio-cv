import { motion } from 'framer-motion'
import styles from 
'../../../styles/components/Experience/RealWork/RealWork.module.scss'
import { RealWorkItem } from './RealWorkItem/RealWorkItem'

export const RealWork = () => {
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
      className={styles.work}>
      <RealWorkItem label='Telecommunication company "Business network"' 
      date='June 2022 - July 2022'
      workTasks={[
        "Adding new functionality to the admin panel",
        "The layout of new pages", 
        "Bug fixes"
      ]}/>
    </motion.section>
  )
}
