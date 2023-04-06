import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ImageSwitcher } from "../../../components/ProjectPage/ImageSwitcher";
import { ProjectPageLayout } from "../../../components/ProjectPageLayout"
import { Info } from "../../../components/ProjectPage/Info";
import projects from '../../../projects.json'


interface TypeProject {
    id: string,
    label: string,
    image: string;
    screenshots: string[],
    deployLink: string,
    description: string,
    stack: string[],
    responsibility: string,
    github: string,
    blurImage: string
}

const ProjectPage = () => {
    const [project, setProject] = useState<TypeProject>({
        screenshots: [""],
        stack: [""]
    } as TypeProject)
    const router = useRouter()


    useEffect(() => {
        const { id } = router.query
        const project = projects.find(i => i.id === id)
        if (project) setProject(project)
    }, [router.isReady, router.query])

    const {
        screenshots,
        label,
        deployLink,
        description,
        stack,
        responsibility,
        github,
        blurImage } = project

    return (
        <ProjectPageLayout label={label}>
            <ImageSwitcher imagesPath={screenshots} blurImage={blurImage} />
            <Info
                responsibility={responsibility}
                description={description}
                stack={stack}
                deployLink={deployLink}
                github={github} />
        </ProjectPageLayout>
    )
}

export default ProjectPage