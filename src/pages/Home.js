/**
 * 
 * FALTA ADAPTAR LA VISTA A PANTALLAS XL
 * 
 */
import React, { useContext } from 'react';
// import images
import WomanImg from '../img/home/Lusine_Arutunyan.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section overflow-hidden'
    >
      <div className='container mx-auto h-full '>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center lg:relative'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='order-2 lg:order-1 w-full lg:pt-[17rem] pb-14 lg:pb-0 lg:w-[40rem] z-10 flex flex-col justify-center items-center lg:items-start '
          >
            <h1 className='h1 lg:text-[5rem] lg:pl-[6rem]'>
              photographer <br /> & film maker
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 lg:pl-[6rem]'>
              Marseille-Paris, France
            </p>
            <Link to={'/contact'} className='btn mb-[5px] lg:ml-[6rem]'>
              hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className='lg:relative lg:left-[31rem] lg:bottom-[31rem] flex justify-center lg:justify-end lg:max-h-max order-1 lg:order-2 pt-36 lg:pt-0 lg:w-[30rem]'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='overflow-hidden w-[15rem] h-[15rem] lg:w-[30rem] lg:h-full rounded-full lg:rounded-none'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
                className=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
