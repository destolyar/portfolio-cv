import styles from '../styles/components/Header.module.scss'

export const Header = () => {
  return(
    <header className={styles.container}>
      <h1 className={styles.text}>Hi, I'm Vlad - Frontend dev.</h1>
    </header>
  )
}