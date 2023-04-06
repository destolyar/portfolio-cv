import { motion } from 'framer-motion'
import { Company } from './Company'
import styles from '../../../styles/components/Experience/Employment/Employment.module.scss'
import companies from "../../../companies.json"
import Link from 'next/link'

export const Employment = () => {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }

  const epam = [
    "• As a Frontend Developer, I developed an e-commerce platform using the React framework Hydrogen.",
    "• Being the developer in a team of 4 JS engineers on our project, took responsibility on some challenging and business important tasks (new features, support existing functionality, SEO optimization for SPA)",
    "• Personaly developing key features such as the cart, showcase of goods, search by a shop, and the home page.",
    "• I also refactored legacy code, resulting in a 30% reduction in overall code size.",
    "• Worked closely with a UI/UX designer to improve the internal library of UI components.",
    "• In addition, I successfully negotiated with the customer to improve the project and delivered results in sprints.",
    "• Reduced project bundle size, refactored legacy code"
  ]

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={styles.work}>
      {companies.map(company =>
        <Company
          key={company.id}
          companyType={company.companyType}
          label={company.label}
          date={company.date}
          image={company.image}
          cutImage={company.cutImage}
          position={company.position}
          id={company.id} />)}
    </motion.section>
  )
}
