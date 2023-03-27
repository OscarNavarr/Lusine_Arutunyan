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
import Header from '../components/Header';
import About from './About';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import Contact from './Contact';

const Home = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <>
   
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section overflow-hidden'
    >
      <Header className='z-[30]' />
      <div className='container mx-auto h-full '>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center lg:relative'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='
            order-2 
            lg:order-1 
            w-full 
            lg:mt-[15rem] xl:mt-[20rem] sxl:mt-[23rem] speciallaptop2:mt-[15rem]
            xl:ml-[15rem] speciallaptop:ml-[6rem] speciallaptop2:ml-[15rem] special:ml-[15rem] sxl:ml-[34.9rem] 
            pb-14 lg:pb-0 lg:w-[40rem] xl:w-[35rem]
            speciallaptop:w-[30rem] special:w-[30rem] sxl:w-[47rem] 
            z-10 
            flex flex-col 
            justify-center
            items-center lg:items-start'
            >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <h1 className='h1 lg:text-[5rem] sxl:text-[8rem] '>
              photographer <br /> & film maker
            </h1>
            <p className='text-[26px] lg:text-[36px] sxl:text-[50px] font-primary mb-4 lg:mb-12 '>
              Marseille-Paris, France
            </p>
            <div className='btn mb-[5px] '>
             Continue
            </div>
          </motion.div>
          {/* image */}
          <div className='
            lg:relative 

            lg:left-[31rem] xl:left-[40rem] special:left-[40rem] sxl:left-[75rem] 
            lg:bottom-[29rem] xl:bottom-[35rem] speciallaptop2:bottom-[29rem] sxl:bottom-[43rem]  
            flex 
            justify-center lg:justify-end 
            lg:max-h-max 
            order-1 lg:order-2 
            pt-36 lg:pt-0 
            lg:w-[30rem] special:w-[40rem] sxl:w-[55rem] 
            lg:bg-black' 
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='overflow-hidden w-[15rem] h-[15rem] lg:w-[30rem] special:w-[40rem] sxl:w-[55rem] lg:h-full rounded-full lg:rounded-none'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    <About/>
    <Portfolio/>
    <Pricing/>
    <Contact/>
    </>
  );
};

export default Home;
