import React, { useState } from 'react';
import {motion} from 'framer-motion';
const PricingComponent = (props ) => {
    const [isHovered, setHovered] = useState(false);
   
  return (
        <motion.div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='relative mt-[2rem]'>
            <img className='w-[20rem]' src={props.src} alt='family_image'/>
            
            <motion.div 
            animate={{height: isHovered ? '25rem' : '3.3rem'}}
            transition={{duration: 1}}
            className='absolute bottom-0 left-0 text-white bg-[RGBA(0,0,0,0.4)] hover:bg-[RGBA(0,0,0,0.5)]'>
                <div className=' min-w-[20rem]'>
                    <div className='pt-4 flex justify-center'>
                        <motion.div
                            animate={{paddingTop: isHovered ? '6.3rem' : '0rem'}}
                            transition={{duration: 1, delay: 0.4}}
                        >

                            <h4 className='text-center text-2xl font-semibold'>{props.title}</h4>
                            <motion.div className={`${isHovered ? 'block' : 'hidden'}`}>
                                <p className='text-center text-xl mb-5 font-bold'>{props.value}</p>
                                <div>
                                    <p className='text-left text-[1.1rem]'><b>Duration</b>: <b>{props.duration}</b></p>
                                    <p className='text-left text-[1.1rem]'><b>Number of photos</b>: <b>{props.n_fotos}</b></p>
                                    <p className='text-left text-[1.1rem]'><b>Processing time</b>: <b>{props.time}</b></p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
  )
}

export default PricingComponent