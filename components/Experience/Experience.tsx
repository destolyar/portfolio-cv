import Link from 'next/link'
import styles from '../../styles/components/Experience/Experience.module.scss'

interface ExperienceProps {
  children: React.ReactNode
}

export const Experience: React.FC<ExperienceProps> = ({ children }) => {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/freelance">
          <a className={styles.link}>Freelance projects</a>
        </Link>
        <Link className={styles.link} href="/employment">
          <a className={styles.link}>Employment</a>
        </Link>
        <Link className={styles.link} href="/about">
          <a className={styles.link}>About Me</a>
        </Link>
      </nav>
      <>
        {children}
      </>
    </section>
  )
}