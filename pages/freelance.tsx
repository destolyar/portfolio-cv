import type { NextPage } from 'next'
import { Experience } from '../components/Experience/Experience'
import { FreelanceProjects } from '../components/Experience/FreelanceProjects/FreelanceProjects'

const Home: NextPage = () => {
  return (
    <Experience>
      <FreelanceProjects />
    </Experience>
  )
}

export default Home
