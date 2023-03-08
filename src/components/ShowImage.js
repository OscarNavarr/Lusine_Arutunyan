import React from 'react'
// import motion
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

const ShowImage = (props) => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={transition1}
      className='max-w-[16rem]'>
        <img 
            src={props.url} 
            alt='logoimage'
            className='max-h-[20rem] rounded'
        />
        <div className='mt-4'>
            <button className='bg-red-500 rounded text-white w-[100%] h-[2.5rem]'>Delete</button>
        </div>
    </motion.div>
  )
}

export default ShowImage