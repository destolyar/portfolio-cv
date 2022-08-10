import styles from  
'../../../../styles/components/Experience/RealWork/RealWorkItem/RealWorkItem.module.scss'
import { RealWorkItemProps } from './entities/interfaces/RealWorkItem'
import Image from 'next/image'

export const RealWorkItem: React.FC<RealWorkItemProps> = ({label, date, workTasks}) => {
  return(
    <div className={styles.container}>
      <h3 className={styles.label}>{label}</h3>
      <div className={styles.info}>
        <Image 
          className={styles.image} 
          src='/companies/buisness-network.jpg' 
          width={35} height={35} alt={label}/>
        <h4 className={styles.date}>{date}</h4>
      </div>
      <h4 className={styles.tasks}>Responsibilities</h4>
      <ul>
        {workTasks.map(i => <li className={styles.task} key={i}>{i}</li>)}
      </ul>
    </div>
  )
}