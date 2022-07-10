import type { NextPage } from 'next'

import Logo from '../components/logo'
import Content from '../components/content'
import Awards from '../components/awards'

import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Content />
      <Awards />
    </div>
  )
}

export default Home
