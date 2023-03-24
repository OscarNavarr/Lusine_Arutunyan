import React, { useState } from 'react';
import Gallery from './Gallery';
import { motion } from 'framer-motion';


// import transition
import { transition1 } from '../../transitions';

const images = [
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671709517/photos/img6_qkq6bt.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671709517/photos/img5_hb3a3q.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671709517/photos/img7_uibnem.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671703824/photos/img3_h3auuy.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671703824/photos/img1_lma0rj.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671703814/photos/img4_uyvmfk.jpg",
  "https://res.cloudinary.com/duchgijkt/image/upload/v1671703806/photos/img2_xbcevn.jpg",
]
const SubPortfolio = () => {
  
  const [ openModal, setOpenModal ] = useState(false);
  
  const handleModalOpen = (valueBool) => {
      setOpenModal(valueBool);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className={`${openModal && 'section overflow-hidden'}`}
    >
      <div className='container mx-auto'>
        <div className=' pt-24 lg:pt-36 pb-8'>
        
        <div className={`px-4 md:flex md:items-center md:justify-center lg:flex-row ${openModal && 'blur-lg'}`}  >
            
            <h2 className='text-xl  md:text-2xl font-semibold'>What kind of image do you want to see?</h2>
          
            <select className='w-[10rem] h-[2rem] border-b-2 border-current mt-5 md:ml-[3rem]'>
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
            *
            *
          */}
          <div className=' mt-[4rem]'>
            <Gallery images={images} modalOpen={handleModalOpen} className='overflow-hidden'/> 
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default SubPortfolio