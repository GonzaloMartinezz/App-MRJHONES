import React from 'react'
import '../../index.css'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home-layout">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default Home
