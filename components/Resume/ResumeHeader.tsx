import styles from '../../styles/components/Resume/ResumeHeader.module.scss'
import Image from 'next/image'

export const ResumeHeader = () => {
  return (
    <header className={styles.container}>
      <Image className={styles.avatar} width={110} height={110} src='/avatar.jpg'/>
      <div className={styles.info}>
        <h2 className={styles.title}>Vladislav Metik</h2>
        <h3 className={styles.subtitle}>Frontend developer</h3>
        <div className={styles.location}>
          <Image width={15} height={15} src='/icons/location.svg'/>
          <h4 className={styles.description}>Georgia</h4>
        </div>
        <div className={styles.availability}>
          <span className={styles.avaible}></span>
          <h4 className={styles.description}>Open to work</h4>
        </div>
      </div>
    </header>
  )
}