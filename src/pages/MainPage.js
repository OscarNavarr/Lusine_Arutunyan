import React from 'react'
import Header from '../components/Header'
import { About, Contact, Home, Opinions, Portfolio, Pricing, StepToMyServices } from '../views'

const MainPage = () => {
  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Pricing/>
        <Portfolio/>
        <StepToMyServices/>
        <Opinions/>
        <Contact/>
    </>
  )
}

export default MainPage