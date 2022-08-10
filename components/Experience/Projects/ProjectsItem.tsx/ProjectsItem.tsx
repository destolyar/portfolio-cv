import styles from 
'../../../../styles/components/Experience/Projects/ProjectsItem/ProjectsItem.module.scss'
import { ProjectsItemProps } from './entities/interfaces/ProjectsItem'
import Image from 'next/image'

export const ProjectsItem: React.FC<ProjectsItemProps> = ({ width, height, image, label }) => {
  const sizes = {
    width: `${width}px`,
    height: `${height}px`
  }

  return(
    <div className={styles.container} style={sizes}>
      <figure>
        <Image 
          src={image + ".png"} 
          width={width} 
          height={height}
          placeholder="blur"
          blurDataURL={image + "-blur.png"}
          quality={70} 
          objectFit="cover"
          alt={label}/>
          <figcaption className={styles.caption}>{label}</figcaption>
      </figure>
    </div>
  )
}