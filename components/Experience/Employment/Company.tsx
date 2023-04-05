import styles from '../../../styles/components/Experience/Employment/Company.module.scss'
import Image from 'next/image'

export interface CompanyProps {
  label: string,
  date: string,
  position: string,
  image: string,
  companyType: string,
  cutImage: boolean
}

export const Company: React.FC<CompanyProps> = ({ companyType, label, date, position, image, cutImage }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{companyType}<br />&quot;{label}&quot;</h3>
      <div className={styles.info}>
        <Image
          className={cutImage ? styles.image : ""}
          src={image}
          width={35} height={35} alt={label} />
        <h4 className={styles.date}>{date}</h4>
      </div>
      <h4 className={styles.tasks}>Position: {position}</h4>
    </div>
  )
}