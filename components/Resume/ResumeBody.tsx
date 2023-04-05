import styles from '../../styles/components/Resume/ResumeBody.module.scss'

export const ResumeBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a className={styles.hire} href="https://www.upwork.com/freelancers/~0190c44b0a2d8c4d2d" target="_blank" rel="noreferrer">Hire now</a>
        <a className={styles.works} href="https://www.upwork.com/freelancers/~0190c44b0a2d8c4d2d" target="_blank" rel="noreferrer">Recent Work</a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓My Skills</h3>
        <ul className={styles.skillsList}>
          <li className={styles.text}>HTML, CSS, JavaScript, TypeScript, SCSS</li>
          <li className={styles.text}>React (Next, Hydrogen), Vue (Nuxt)</li>
          <li className={styles.text}>Node (Nest), Python, Go</li>
          <li className={styles.text}>MySQL, PostgreSQL, MongoDB</li>
          <li className={styles.text}>Docker, Webpack, Vite</li>
          <li className={styles.text}>Firebase, AWS</li>
          <li className={styles.text}>Git</li>
        </ul>
      </div>
    </div>
  )
}
