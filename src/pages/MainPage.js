import React from 'react'
import Header from '../components/Header'
import { About, Contact, Home, Opinions, Portfolio, Pricing, StepToMyServices } from '../views'

const MainPage = () => {
  return (
    <div className='overscroll-x-none overflow-x-hidden'>
        <Header/>
        <Home/>
        <Portfolio/>
        <About/>
        <Pricing/>
        <StepToMyServices/>
        <Opinions/>
        <Contact/>
    </div>
  )
}

export default MainPage