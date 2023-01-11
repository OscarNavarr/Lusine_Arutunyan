import React from 'react'
// import images
import Image1 from '../../img/portfolio/img1.jpg';
import Image2 from '../../img/portfolio/img2.jpg';
import Image3 from '../../img/portfolio/img3.jpg';
import Image4 from '../../img/portfolio/img4.jpg';
import ImgSlider from '../ImgSlider';

const Images = () => {
    const images =[Image1,Image2,Image3,Image4];
    return (
    <>
        <div className='block lg:hidden'>
            <ImgSlider images={images}/>
        </div>


        <div className='hidden lg:grid grid-cols-2 lg:gap-2 lg:w-[27rem] special:w-[35rem] lg:mr-[6rem]'>
            {/* image */}
            {images.map((img,i) => (
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img
                    key={i}
                    src={img}
                    className='object-cover  hover:scale-110 transition-all duration-500'
                    alt='Porfolio'
                    />
                </div>
            ))}
          </div>
    </>
  )
}

export default Images