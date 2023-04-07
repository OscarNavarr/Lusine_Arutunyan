import React from 'react'
import OpinionSlice from '../components/Opinions/OpinionSlice'

const Opinions = () => {
  return (
    <div className='mt-[9rem] container mx-auto'>
         <h2 className='h1 text-center text-[3.5rem]'>Testimonials</h2>
         
         <div className='mt-[7rem]'>
            <OpinionSlice/>
         </div>
    </div>
  )
}

export default Opinions