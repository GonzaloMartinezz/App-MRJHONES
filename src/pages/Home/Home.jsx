import React from 'react'
import '../../index.css'
import Hero from '../../components/Hero/Hero'
import Gallery from '../../components/Gallery/Gallery'
import Features from '../../components/Features/Features'
import VIPExperience from '../../components/VIPExperience/VIPExperience'

const Home = () => {
  return (
    <div className="home-layout">
      <main>
        <Hero />
        <Gallery />
        <Features />
        <VIPExperience />
      </main>
    </div>
  )
}

export default Home
