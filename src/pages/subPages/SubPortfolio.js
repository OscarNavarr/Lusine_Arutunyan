import React, { useContext } from 'react';
import Gallery from './Gallery';
import { motion } from 'framer-motion';


// import transition
import { transition1 } from '../../transitions';
// import context
import { CursorContext } from '../../context/CursorContext';
import { CloudinaryContext } from 'cloudinary-react';
import {Image, Video, Transformation} from 'cloudinary-react';

const SubPortfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className=''
    >
      <div className='container mx-auto'>
        <div className=' pt-24 lg:pt-36 pb-8'>
        
        <div className='flex items-center justify-center lg:flex-row ' >
          <h2 className='text-2xl font-semibold'>What kind of image do you want to see?</h2>
          
            <select className='w-[10rem] h-[2rem] border-b-2 border-current ml-[3rem]'>
              <option value="Professionals" className='p-4 mb-3'>Professionals</option>
              <option value="Familiar" className='p-4 mb-3'>Familiar</option>
              <option value="Weddings" className='p-4 mb-3'>Weddings</option>
              <option value="Birthday" className='p-4 mb-3'>Birthday</option>
              <option value="Fashion" className='p-4 mb-3'>Fashion</option>
              <option value="Pregnancy" className='p-4 mb-3'>Pregnancy</option>
            </select>
          </div>
          {/*
            *
            *   GALLERY SECTION
            *w
            *
          */}
          <div className=' mt-[4rem]'>
            <Gallery className='overflow-hidden'/> 
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SubPortfolio