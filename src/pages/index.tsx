import type { NextPage } from 'next'

import Logo from '../components/logo'
import Content from '../components/content'
import Awards from '../components/awards'

const Home: NextPage = () => {
  return (
    <div>
      <Logo />
      <Content />
      <Awards />
    </div>
  )
}

export default Home
