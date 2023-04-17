import React, { useRef }  from 'react'
import OpinionSlice from '../components/Opinions/OpinionSlice'
import {motion, useInView} from 'framer-motion';

const Opinions = () => {

  // TITLE ANIMATION
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true }, {margin: "-10%"})
  
  // SLIDE ANIMATION
  const sliceRef = useRef(null)
  const isSliceInView = useInView(sliceRef, { once: true }, {margin: "-10%"})

  return (
    <div className='mt-[9rem] container mx-auto'>
        <motion.h2 
          ref={titleRef}
          initial={{opacity: 0}}
          animate={{opacity: isTitleInView ? 1 : 0}}
          transition={{duration:1}}
          className='h1 text-center text-[3.5rem]'
        >
          Testimonials
        </motion.h2>
         
        <motion.div 
          ref={sliceRef}
          initial={{opacity: 0}}
          animate={{opacity: isSliceInView ? 1 : 0}}
          transition={{duration:1}}
          className='mt-[7rem]'
        >
            <OpinionSlice/>
         </motion.div>
    </div>
  )
}

export default Opinions