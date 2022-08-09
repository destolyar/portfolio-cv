import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Projects } from '../components/Projects/Projects'
import { Resume } from '../components/Resume/Resume'

const Home: NextPage = () => {
  return (
    <Layout>
      <Resume/>
      <Projects/>
    </Layout>
  )
}

export default Home
