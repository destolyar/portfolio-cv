import styles from '../../../styles/components/Experience/FreelanceProjects/Project.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ProjectProps {
  width: number,
  height: number,
  image: string,
  blurImage: string,
  label: string,
  id: string
}


export const Project: React.FC<ProjectProps> = ({ width, height, image, blurImage, label, id }) => {
  const router = useRouter()

  return(
    <div className={styles.container} onClick={() => {
      router.push("/project/" + id)
    }}>
      <figure>
        <Image 
          src={image} 
          width={width} 
          height={height}
          placeholder="blur"
          blurDataURL={blurImage}
          quality={70} 
          objectFit="cover"
          alt={label}/>
          <figcaption className={styles.caption}>{label}</figcaption>
      </figure>
    </div>
  )
}