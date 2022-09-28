import Image from 'next/image'
import styles from '../../styles/components/ProjectPage/ImageSwitcherSlide.module.scss'

export const ImageSwitcherSlide = ({ imagePath }: any) => {
    return(
        <div className={styles.container}>
            <Image 
                layout="responsive" 
                width={16} 
                height={9} 
                objectFit='contain' 
                src={imagePath}/>
        </div>
    )
}