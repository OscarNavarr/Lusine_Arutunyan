import React from 'react'

import Image1 from '../img/portfolio/img1.jpg';
import Image2 from '../img/portfolio/img2.jpg';
import Image3 from '../img/portfolio/img3.jpg';
import Image4 from '../img/portfolio/img4.jpg';



const Services = () => {
    
    const ImgSrc = [Image1,Image2,Image3,Image4];

  return (
    <div className='h-screen mt-[15rem] container mx-auto'>
        <div className='mx-[5rem] lg:flex lg:justify-around'>

                    <div className='w-[30rem]'>
                      {
                          ImgSrc.map((img,i) => (
                            <img  
                                ke
                                src={img}
                                alt='service1'
                            />
                          ))
                        }
                    </div>
            <div className='w-[30rem]'>
                <h3 className='text-center lg:h1 lg:text-[3rem]'>Love History family</h3>
                <p className='mt-10 lg:text-justify'>
                    Our family photography service captures the essence of your family in a fun and relaxed setting. Our experienced photographers specialize in capturing the unique personalities and connections of your family, creating timeless images that will be treasured for generations to come. Whether it's a casual outdoor shoot or a formal studio session, we work with you to ensure that your family's unique style and personality shine through in every shot. Our top-notch equipment and editing techniques ensure that every image is of the highest quality, with vibrant colors and stunning detail. Trust us to capture your family's most precious moments and create beautiful memories that will last a lifetime.
                </p>
            </div>
           
        </div>
    </div>
  )
}

export default Services