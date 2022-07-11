import type { NextPage } from 'next'
import Head from 'next/head'

import Logo from '../components/logo'
import Content from '../components/content'
import Awards from '../components/awards'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Triple </title>
        <link rel="icon" href="/triple2x.png" />
        <meta property="og:title" content="triple" />
      </Head>
      <Logo />
      <Content />
      <Awards />
    </div>
  )
}

export default Home
