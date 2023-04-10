// import images
import Image1 from '../../img/portfolio/img1.jpg';
import Image2 from '../../img/portfolio/img2.jpg';
import Image3 from '../../img/portfolio/img3.jpg';
import Image4 from '../../img/portfolio/img4.jpg';

const Images = () => {
    const images =[Image1,Image2,Image3,Image4];
    return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* image */}
            {images.map((img,i) => (
                <div key={i} className='p-4 '>
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