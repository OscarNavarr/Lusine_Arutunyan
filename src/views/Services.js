import React from 'react'

import Image1 from '../img/portfolio/img1.jpg';
import Image2 from '../img/portfolio/img2.jpg';
import Image3 from '../img/portfolio/img3.jpg';
import Image4 from '../img/portfolio/img4.jpg';

const Services = () => {
  return (
    <div className='h-screen mt-[15rem] container mx-auto'>
        <div className='mx-[5rem] lg:flex lg:justify-around'>

            <div className='w-[30rem]'>
                <img  
                    src='https://res.cloudinary.com/duchgijkt/image/upload/v1671746211/photos/family_dvvseg.jpg'
                    alt='service1'
                />
            </div>
            <div className='w-[30rem]'>
                <h3 className='text-center lg:h1 lg:text-[3rem]'>Love History family</h3>
            </div>
           
        </div>
    </div>
  )
}

export default Services