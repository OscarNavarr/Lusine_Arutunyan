import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
import Images from '../components/porfolio/Images';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section overflow-hidden'
    >
      <div className='container mx-auto h-full pt-[25%]'>
        <div className='flex flex-col justify-between'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-3 max-w-sm'>
            <b>Love story/family, individual, photo for pregnant, Weddings</b>, my photographs cover all kinds of topics.
            </p>
            <p className='mb-12 max-w-sm'>
            More than 10 years of experience have allowed me to develop in the different styles and photographic themes that exist.
            </p>
            <Link to={'/subportfolio'} className='btn mb-[30px] mx-auto lg:mx-0'>
              Look more
            </Link>
          </motion.div>

          {/* image grid */}
          <Images/>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
