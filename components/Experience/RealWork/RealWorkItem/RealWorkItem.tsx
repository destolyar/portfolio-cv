import styles from  
'../../../../styles/components/Experience/RealWork/RealWorkItem/RealWorkItem.module.scss'
import Image from 'next/image'

export interface RealWorkItemProps {
  label: string,
  date: string,
  position: string,
  image: string,
  companyType: string,
  cutImage: boolean
}

export const RealWorkItem: React.FC<RealWorkItemProps> = ({companyType, label, date, position, image, cutImage}) => {
  return(
    <div className={styles.container}>
      <h3 className={styles.label}>{companyType}<br/>&quot;{label}&quot;</h3>
      <div className={styles.info}>
        <Image 
          className={cutImage ? styles.image : ""} 
          src={image} 
          width={35} height={35} alt={label}/>
        <h4 className={styles.date}>{date}</h4>
      </div>
      <h4 className={styles.tasks}>Position: {position}</h4>
    </div>
  )
}