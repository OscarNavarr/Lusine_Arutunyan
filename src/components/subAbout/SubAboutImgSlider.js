import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SubAboutImgSlider = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <div>
        <Slider {...settings}>
          
            {props.images.map((image, i) => (
                <div>
                    <img
                        key={i}
                        src={image}
                        style={{width: "95%", cursor:'pointer'}}
                        alt="Gallery images"
                        className='hover:scale-105 transition-all duration-500'
                    />
                </div>
            ))}         
        </Slider>
      </div>
  )
}

export default SubAboutImgSlider