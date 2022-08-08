import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { Resume } from '../components/Resume/Resume'

const Home: NextPage = () => {
  return (
    <Layout>
      <Resume/>
      <section>
        Projects
      </section>
    </Layout>
  )
}

export default Home
