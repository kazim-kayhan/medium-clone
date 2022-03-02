import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Kayhan's Medium 2.0 Clone</title>
        <link rel="icon" href="/medium.svg" />
      </Head>
      <Header />
      <HeroSection />
    </div>
  )
}

export default Home