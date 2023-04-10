import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
//import ImagesSlider
import Images from '../components/porfolio/Images';
import SelectBox from '../components/SelectBox';

const Portfolio = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='overflow-hidden Overflow-y-visible sm_special:overflow-y-visible'
    >
      <div className='container mx-auto h-full pt-[8rem] md:pt-[12rem]'>
        
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='lg:ml-[6rem]'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <div>
              <div className='block md:flex md:justify-between md:flex-wrap '>
                
                <h1 className='h1 text-center lg:text-start lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'>Portfolio</h1>


                <div className='mx-[8rem] md:mx-0 mt-5 md:mt-0'>
                  
                  <div className='block lg:hidden py-6'>
                    <SelectBox/>
                  </div>
                  
                  <ul className='hidden md:flex md:justify-around py-6'>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 '>Professionals</a>
                    </li>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'>Familiar</a>
                    </li>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'>Weddings</a>
                    </li>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'>Birthday</a>
                    </li>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'>Fashion</a>
                    </li>
                    <li>
                      <a href='#' className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'>Pregnancy</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className='mt-[4rem] '>
                <Images/>
              </div>

              <div className='flex justify-end mt-[5rem]'>
                <Link to={'/porfolio'} className='mb-[30px] px-auto lg:px-0 w-[13rem] text-[2rem]'>
                  {'See All ->'}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* image grid */}
      </div>
    </motion.section>
  );
};

export default Portfolio;
