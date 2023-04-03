import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      className='bg-white'
    >
      <div className=''>
        <div className=' flex flex-col lg:flex-row h-full items-center justify-start mt-[10rem] gap-x-8 text-center lg:text-left'>
          
          {/* text & form */}
          <div
            className='lg:px-[22rem] lg:flex-1 lg:pt-32 bg-[#eef7f9] w-full'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <h1 className='h1'>Contact me</h1>
            <p className='my-12'>I would love to get suggestions from you.</p>
            {/* form */}
            <form className=''>
              <div className='lg:flex lg:justify-between'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-[80%] lg:w-[40%] pl-3 placeholder:text-[#757879]'
                  type='text'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-[80%] lg:w-[40%] pl-3 placeholder:text-[#757879]'
                  type='email'
                  placeholder='Your email address'
                />
              </div>
              <textarea
                className='outline-none border-b border-b-primary h-[8rem] bg-transparent font-secondary w-[80%] lg:w-full pl-3 pt-[5rem] mt-4 focus:pt-0 placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
              />
              <button className='btn my-[30px] mx-auto lg:mx-0 self-start'>
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
