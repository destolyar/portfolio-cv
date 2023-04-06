import type { NextPage } from 'next'
import { Experience } from '../components/Experience/Experience'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Experience/>
    </Layout>
  )
}

export default Home
