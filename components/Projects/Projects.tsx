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
          label={"Next auth pages"}
          image={"/previewed/mocup"}
          />
        <ProjectsItem 
          width={350} 
          height={300}
          label={"Adventure landing"}
          image={"/previewed/adventure-landing"}
          />

<ProjectsItem 
          width={350} 
          height={300}
          label={"Adventure landing"}
          image={"/previewed/adventure-landing"}
          />
      </section>
    </section>
  )
}