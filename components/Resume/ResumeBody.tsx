import styles from '../../styles/components/Resume/ResumeBody.module.scss'

export const ResumeBody = () => {
  const aboutMe = "2 years of experience in frontend development. As main frontend technologies, I have experience with React and Vue on commercial projects. The largest projects I worked on were a beauty e-commerce website built with the React framework Hydrogen, and a platform for connecting businesses to the internet and managing subscriptions built with Vue. I also have experience in backend development using Node.js (Nest), testing with Python (Selenium), and working with SQL and NoSQL databases. Additionally, I'm familiar with Golang."
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <a className={styles.hire} href="https://www.upwork.com/freelancers/~0190c44b0a2d8c4d2d" target="_blank" rel="noreferrer">Hire now</a>
        <a className={styles.works} href="https://www.upwork.com/freelancers/~0190c44b0a2d8c4d2d" target="_blank" rel="noreferrer">Recent Work</a>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.title}>🎓My Skills</h3>
        <ul>
          <li className={styles.text}>HTML, CSS, JavaScript, TypeScript, SCSS</li>
          <li className={styles.text}>React (Next, Hydrogen), Vue</li>
          <li className={styles.text}>Node (Nest), Python, Go</li>
          <li className={styles.text}>MySQL, PostgreSQL, MongoDB</li>
          <li className={styles.text}>Docker, Webpack, Vite</li>
          <li className={styles.text}>Firebase</li>
          <li className={styles.text}>Git</li>
        </ul>
      </div>
      <div className={styles.about}>
        <h3 className={styles.title}>💁‍♂️About me</h3>
        <p className={styles.text}>{aboutMe}</p>
      </div>
    </div>
  )
}
