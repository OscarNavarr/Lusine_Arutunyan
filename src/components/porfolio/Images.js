
const Images = (props) => {
    
    
    const images = props.images;
    let fiveImages = [];

    for (let index = 0; index < 6; index++) {
        if(images[index]){
            fiveImages.push(images[index]);
        }
    }

    return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-11'>
            {/* image */}
            {fiveImages.map((img,i) => (
                <div 
                    className="flex justify-center" key={i}
                >
                    <img
                        key={i}
                        src={img}
                        className={`object-cover  w-[20rem]  hover:scale-110 transition-all duration-500`}
                        alt='Porfolio'
                        style={{transition: "1s"}}
                    />
                </div>
            ))}
          </div>
    </>
  )
}

export default Images