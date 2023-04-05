import { motion } from 'framer-motion'
import styles from '../../../styles/components/Experience/Employment/Employment.module.scss'

export const AboutMe: React.FC = () => {
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
      className={styles.work}>
      <p>2 years of experience in frontend development. As main frontend technologies, I have experience with React and Vue on commercial projects. The largest projects I worked on were a beauty e-commerce website built with the React framework Hydrogen, and a platform for connecting businesses to the internet and managing subscriptions built with Vue. I also have experience in backend development using Node.js (Nest), testing with Python (Selenium), and working with SQL and NoSQL databases. Additionally, I&apos;m familiar with Golang.</p>
    </motion.section>
  )
}
