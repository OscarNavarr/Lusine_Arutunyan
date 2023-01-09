import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 2000,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true,
                speed: 2000,
                autoplaySpeed: 2000,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true,
                speed: 2000,
                autoplaySpeed: 2000,
              }
            }
        ]
    }
  return (
    <div>
        <Slider {...settings}>
          
            {props.images.map((image, i) => (
                <div  className='h-[15rem]'>
                    <img
                        key={i}
                        src={image}
                        alt="Gallery images"
                        className='hover:scale-105 transition-all duration-500 px-[2rem]'
                    />
                </div>
            ))}         
        </Slider>
      </div>
  )
}

export default ImgSlider