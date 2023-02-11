import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/lusine_arutunyan.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';
import Header from '../components/Header';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section overflow-hidden'
    >
      <Header className='z-[30]' />
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 lg:gap-x-16  sxl:gap-x-28 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={transition1}
          className='
            flex-1 lg:flex-none 
            lg:ml-[15%] sxl:ml-[35rem] 
            sxl:w-[45rem] o
            rder-2 lg:order-none 
            overflow-hidden 
            hidden 
            lg:block'>
            <img src={WomanImg} alt='' className='lg:w-[25rem] xl:w-[30rem] sxl:w-[45rem]' />
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='flex-1 pt-36 pb-14 sxl:pb-0 px-8 lg:px-0 lg:pt-0 xl:pt-10 sxl:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1 lg:text-[3rem] xl:text-[5rem] sxl:text-[7rem] lg:pt-11 xl:pt-2 sxl:pt-0'>About me</h1>
            <p className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify my-3 max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'>
              My name is<b> Lusine Arutunyan.</b> and I'm a photographer. 
              One of the most important things I can do for yo is to awaken in you a smile and a love for photography.
            </p>
            <p className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify mb-3 max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'>
              By contacting me, you'll receive photos with live emotions. Through the prism of my passion for photography, through the lens of my camera,<b>I'm ready to show you as you are.</b>
            </p>
            <p className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify mb-[1.5rem] sxl:pb-[2rem] max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'>
              You'll have precious moments of your life that you can share with your family and friends.
            </p>
            <Link to={'/subabout'} className='btn lg:py-[0rem] lg:px-[0rem] lg:h-[2.5rem] xl:h-[3.4rem] sxl:h-[4rem] lg:w-[10rem] sxl:w-[12rem]'>
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
