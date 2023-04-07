import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6 } from '../../img/opinions';

const OpinionSlice = () => {
    const images = [Imagen1, Imagen2, Imagen3, Imagen4, Imagen5, Imagen6];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 9000,
        autoplaySpeed: 9000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                speed: 9000,
                autoplaySpeed: 9000,
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
                speed: 9000,
                autoplaySpeed: 9000,
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
                speed: 9000,
                autoplaySpeed: 9000,
              }
            }
        ]
    }
  return (
    <>
        <Slider {...settings}>
          
            
                
                    {
                        images.map((image, i) => (
                            <div className='h-[15rem] mb-[8rem]' key={i}>
                                <div className='flex justify-center' >
                                    <div 
                                        className='bg-no-repeat bg-[center_-8rem] rounded-full w-[10rem] h-[10rem]' 
                                        style={{ backgroundImage: `url(${image})`}}
                                    />
                                </div>
                                <div className='mx-8'>
                                    <h4 className='text-[1.2rem] text-center mt-5 font-bold'>Katerina Kuriska</h4> 
                                    <p className='text-justify mt-5 text-lg'>"Thank you so much for capturing such beautiful moments. Your talent behind the lens is truly inspiring."</p>
                                </div>
                            </div>

                        ))
                    }

              
                   
        </Slider>
      </>
  )
}

export default OpinionSlice