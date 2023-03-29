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

const Portfolio = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='overflow-hidden Overflow-y-visible sm_special:overflow-y-visible mt-[]'
    >
      <div className='container mx-auto h-full pt-[8rem] md:pt-[12rem]'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-around xl:max-w-[100rem] xl:m-auto'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex lg:items-center mx-auto lg:ml-[6rem]'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <div>
              <h1 className='h1 text-center lg:text-start lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'>Portfolio</h1>
              <p className='pt-[5rem] pb-[1rem] max-w-sm md:mx-w-lg  xl:max-w-[32rem] text-lg special:text-[1.4rem] text-justify px-[8%] md:px-[0%]'>
              <b>Love story/family, individual, photo for pregnant, Weddings</b>, my photographs cover all kinds of topics.
              </p>
              <p className='pb-[10%] max-w-sm md:mx-w-lg  xl:max-w-[32rem] text-lg special:text-[1.4rem] text-justify px-[8%] md:px-[0%]'>
              More than 10 years of experience have allowed me to develop in the different styles and photographic themes that exist.
              </p>
              <div className='hidden justify-center lg:block'>
                <Link to={'/porfolio'} className='btn mb-[30px] px-auto lg:px-0 w-[13rem]'>
                  Look more
                </Link>
              </div>
              
            </div>
          </motion.div>

          {/* image grid */}
          <div >
            
            <Images/>
            
            <div className='flex lg:hidden justify-center mt-[5rem]'>
              <Link to={'/porfolio'} className='btn mb-[30px] px-auto lg:px-0 w-[13rem]'>
                Look more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
