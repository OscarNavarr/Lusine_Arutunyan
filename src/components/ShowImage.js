import React from 'react'
import image from '../img/portfolio/img1.jpg';

const ShowImage = () => {
  return (
    <div className='max-w-[16rem]'>
        <img 
            src={image} 
            alt='logoimage'
            className='max-h-[20rem] rounded'
        />
        <div className='mt-4'>
            <button className='bg-red-500 rounded text-white w-[100%] h-[2.5rem]'>Delete</button>
        </div>
    </div>
  )
}

export default ShowImage