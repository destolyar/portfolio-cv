import styles from '../../../styles/components/Projects/ProjectsItem/ProjectsItem.module.scss'
import { ProjectsItemProps } from './entities/interfaces/ProjectsItem'
import Image from 'next/image'

export const ProjectsItem: React.FC<ProjectsItemProps> = ({ width, height, image }) => {
  const sizes = {
    width: `${width}px`,
    height: `${height}px`
  }

  return(
    <div className={styles.container} style={sizes}>
      <Image src={image} width={width} height={height} unoptimized priority objectFit="cover"/>
    </div>
  )
}