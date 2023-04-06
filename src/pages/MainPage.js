import React from 'react'
import Header from '../components/Header'
import { About, Contact, Home, Portfolio, Pricing, Services, StepToMyServices } from '../views'

const MainPage = () => {
  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Pricing/>
        <Portfolio/>
        <StepToMyServices/>
        <Contact/>
    </>
  )
}

export default MainPage