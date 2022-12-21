import React, { useContext } from 'react';
// import images
import WomanImg from '../img/home/Lusine_Arutunyan.jpg';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'
    >
      <div className='mx-auto h-full'>
        <div className=' flex flex-col lg:flex-row h-full items-center justify-start pt-[24rem] gap-x-8 text-center lg:text-left'>
          
          {/* text & form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-[20rem] bg-[#eef7f9]'
          >
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            {/* form */}
            <form className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>
                Send it
              </button>
            </form>
          </div>          
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
