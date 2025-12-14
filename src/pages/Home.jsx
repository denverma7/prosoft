import React from 'react'
import Hero from '../components/home/Hero'
import Journey from '../components/home/Journey'
import Clients from '../components/home/Clients'
import Values from '../components/home/Values'
import Team from '../components/home/Team'

const Home = () => {
  return (
    <div>
        <Hero />
        <Journey />
        <Values />
        <Team />
        <Clients />
    </div>
  )
}

export default Home