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
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section overflow-hidden'
    >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <motion.div 
          whileHover={{ scale: 1.1 }}
          transition={transition1}
          className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden hidden lg:block'>
            <img src={WomanImg} alt='' />
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='flex-1 pt-36 pb-14 px-8 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
            
          >
            <h1 className='h1 lg:text-[5rem]'>About me</h1>
            <p className='text-justify mb-3 max-w-sm'>
              My name is<b> Lusine Arutunyan.</b> and I'm a photographer. 
              One of the most important things I can do for yo is to awaken in you a smile and a love for photography.
            </p>
            <p className='text-justify mb-3 max-w-sm'>
              By contacting me, you'll receive photos with live emotions. Through the prism of my passion for photography, through the lens of my camera,<b>I'm ready to show you as you are.</b>
            </p>
            <p className='text-justify mb-[3rem] max-w-sm'>
              You'll have precious moments of your life that you can share with your family and friends.
            </p>
            <Link to={'/subabout'} className='btn'>
              Read more
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
