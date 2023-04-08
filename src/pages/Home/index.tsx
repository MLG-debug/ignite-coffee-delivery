import React from 'react'
import { Hero } from '../../components/Hero'
import { Coffees } from './components/Coffees'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Coffees />
    </HomeContainer>
  )
}
