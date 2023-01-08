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
        <div >
            <ImgSlider images={images}/>
        </div>


        {/*<div className='grid grid-cols-2 lg:gap-px bg-black '>*/}
            {/* image */}
            {/*images.map((img,i) => (
                <div key={i} className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                    <img
                    className='object-cover  hover:scale-110 transition-all duration-500'
                    src={img}
                    alt=''
                    />
                </div>
            ))*/}
          {/*</div>*/}
    </>
  )
}

export default Images