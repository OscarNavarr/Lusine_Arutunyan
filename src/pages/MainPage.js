import React from 'react'
import Header from '../components/Header'
import { About, Contact, Home, Portfolio, Pricing } from '../views'

const MainPage = () => {
  return (
    <>
        <Header/>
        <Home/>
        <Pricing/>
        <About/>
        <Portfolio/>
        <Contact/>
    </>
  )
}

export default MainPage