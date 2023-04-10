const Images = (props) => {
    const images = props.images;
    let fiveImages = [];

    for (let index = 0; index < 5; index++) {
        if(images[index]){
            fiveImages.push(images[index]);
        }
    }
    return (
    <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* image */}
            {fiveImages.map((img,i) => (
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