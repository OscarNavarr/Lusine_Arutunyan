import {motion, useInView} from 'framer-motion';
import { useRef } from "react";

const Images = (props) => {
    
    const refer = useRef(null)
    const isInView = useInView(refer, { once: true }, {margin: "-10%"})

    //console.log(refer.current.__reactFiber$zjo13bym69.child.key)
    

    const images = props.images;
    let fiveImages = [];

    for (let index = 0; index < 6; index++) {
        if(images[index]){
            fiveImages.push(images[index]);
        }
    }

    return (
    <>
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: isInView ? 1 : 0}}
            transition={{duration:1}}
            ref={refer} 
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-11'
        >
            {/* image */}
            {fiveImages.map((img,i) => (
                
                <motion.div
                    className="flex justify-center" key={i}
                >
                    <img
                        key={i}
                        src={img}
                        className={`object-cover  w-[20rem]  hover:scale-110 transition-all duration-500`}
                        alt='Porfolio'
                        style={{transition: "1s"}}
                    />
                </motion.div>
            ))}
          </motion.div>
    </>
  )
}

export default Images