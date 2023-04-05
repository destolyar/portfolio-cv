import type { NextPage } from 'next'
import { Experience } from '../components/Experience/Experience'
import { AboutMe } from '../components/Experience/AboutMe/AboutMe'

const Home: NextPage = () => {
  return (
    <Experience>
      <AboutMe />
    </Experience>
  )
}

export default Home
