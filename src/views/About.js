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

const About = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='mt-[10rem] lg:mt-0'
      id='about'
    >
      {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
      <div className='container mx-auto  relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-x-24 lg:gap-x-16  sxl:gap-x-28 text-center lg:text-left'>
          {/* image */}
          <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={transition1}
          className='
            flex-1 lg:flex-none 
            lg:ml-[9.5rem] sxl:ml-[35rem] 
            lg:mr-[7rem]
            sxl:w-[45rem] 
            lg:order-none 
            overflow-hidden
          '>
            
            <h1 className='h1 lg:hidden lg:text-[3rem] xl:text-[5rem] sxl:text-[7rem] lg:pt-11 xl:pt-2 sxl:pt-0'>About me</h1>
            <img src={WomanImg} alt='' className='w-[20rem] lg:w-[25rem] xl:w-[30rem] sxl:w-[45rem] mt-[4rem] lg:mt-[0rem]' />
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-[2rem]  pb-[10rem] sxl:pb-0 px-8 lg:px-0 lg:pt-0 xl:pt-10 sxl:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <h1 className='h1 hidden lg:block lg:text-[3rem] xl:text-[5rem] sxl:text-[7rem] lg:mt-[3rem] xl:pt-2 sxl:pt-0'>About me</h1>
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
            <a href={'#subabout'} className='btn  lg:py-[0rem] lg:px-[0rem] lg:h-[2.5rem] xl:h-[3.4rem] sxl:h-[4rem] lg:w-[10rem] sxl:w-[12rem]'>
              Read more
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
