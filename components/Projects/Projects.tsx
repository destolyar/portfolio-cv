import styles from '../../styles/components/Projects/Projects.module.scss'
import { ProjectsItem } from './ProjectsItem.tsx/ProjectsItem'

export const Projects: React.FC = () => {
  return(
    <section className={styles.container}>
      <nav className={styles.nav}>
        <h2>Projects</h2>
      </nav>
      <section className={styles.projects}>
        <ProjectsItem 
          width={350} 
          height={300}
          image={"/previewed/mocup-min.png"}
          />
                  <ProjectsItem 
          width={350} 
          height={300}
          image={"/previewed/mocup-min.png"}
          />        <ProjectsItem 
          width={350} 
          height={300}
          image={"/previewed/mocup-min.png"}
          />        <ProjectsItem 
          width={350} 
          height={300}
          image={"/previewed/mocup-min.png"}
          />        <ProjectsItem 
          width={350} 
          height={300}
          image={"/previewed/mocup-min.png"}
          />
      </section>
    </section>
  )
}