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
      <RealWorkItem 
        companyType='Web Agency' 
        label='CodeLab_'
        date='September 2022 - Present'
        image='/companies/codelab.png'
        cutImage={false}
        workTasks={[
          "Development of eCommerce project in beauty sphere which building with React, Hydrogen, Shopify Storefront API.",
          "Code refactoring and bug fixes in existing code"
      ]}/>
      <RealWorkItem 
        companyType='Telecommunication company' 
        label='Business network'
        date='November 2021 - August 2022'
        image='/companies/buisness-network.jpg'
        cutImage={true}
        workTasks={[
          "Adding new functionality to the admin panel",
          "The layout of new pages", 
          "Bug fixes"
      ]}/>
    </motion.section>
  )
}
