import styles from '../../styles/components/Resume/ResumeFooter.module.scss'
import Image from 'next/image'

export const ResumeFooter = () => {
  return(
    <div className={styles.container}>
      <h3 className={styles.title}>📱Contact me</h3>
      <div className={styles.email}>
        <Image width={18} height={18} src='/icons/email.svg' alt='email'/>
        <p className={styles.text}>vladislavmetik@icloud.com</p>
      </div>
      <div className={styles.links}>
        <a className={styles.icon} href="https://github.com/destolyar" target="_blank" rel="noreferrer">
          <Image width={20} height={20} src='/icons/github.svg' alt='github'/>
        </a>
        <a className={styles.icon} href="https://www.linkedin.com/in/vladislav-metik/" target="_blank" rel="noreferrer">
          <Image width={20} height={20} src='/icons/linkedin.svg' alt='linkedin'/>
        </a>
      </div>
    </div>
  )
}