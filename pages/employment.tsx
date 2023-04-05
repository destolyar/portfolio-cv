import type { NextPage } from 'next'
import { Experience } from '../components/Experience/Experience'
import { Employment } from '../components/Experience/Employment/Employment'

const Home: NextPage = () => {
  return (
    <Experience>
      <Employment />
    </Experience>
  )
}

export default Home
