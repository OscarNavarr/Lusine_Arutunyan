import React from 'react';
import {motion} from 'framer-motion';
import { transition1 } from '../transitions';
import { BsCircle } from 'react-icons/bs';

const StepToMyServices = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: '100%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='mt-[15rem]'
    >
        <div className='container mx-auto'>
            
            <h2 className='h1 text-center text-[3.5rem]'>Steps to request my services</h2>
            
            {/** 
             * 
             * STEP ONE
             *  
             * */}

            <div className='lg:flex lg:justify-center lg:mt-20'>
               
                <div className='flex-1'>
                    <h3 className='h1  pt-[4rem] text-end text-gray-400'>1</h3>
                </div>
                
                <div className='lg:ml-[5rem] pt-[4rem]'>
                    <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                    <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gray-300'/>
                </div>
                
                <div className='ml-[5rem] flex-1'>
                    <h5 className='text-[1.9rem] lg:pt-[3rem] font-bold'>You are interested in my work.</h5>
                    <p className='lg:w-[27rem] lg:mt-5 lg:text-[1.2rem] text-justify'>After having reviewed my website and having seen the photographs I have taken, are you convinced that I am the ideal person to capture the happiest moments of your life or, simply, I am the ideal person to collaborate on your project.</p>
                </div>
            </div>

            {/** 
             * 
             * STEP TWO
             *  
             * */}
            
            <div className='lg:flex lg:justify-center '>
                
                <div className='ml-[5rem] flex-1 flex justify-end '>
                    
                    <div className='mr-[5rem]'>
                        <h5 className='text-[1.9rem] font-bold'>Contact Me.</h5>
                        <p className='lg:w-[27rem] lg:mt-5 lg:text-[1.2rem] text-justify'>Once you know what type of services you need me to collaborate on, contact me through the different means of communication that I have and we agree on all the necessary elements to carry out your objective.</p>
                    </div>
                    
                </div>

                <div className=''>
                    <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                    <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gray-300'/>
                </div>
                
                <div className='flex-1 ml-[5rem]'>
                    <h3 className='h1 text-gray-400'>2</h3>
                </div>
            </div>
            
            {/** 
             * 
             * STEP THREE
             *  
             * */}

            <div className='lg:flex lg:justify-center'>
               
               <div className='flex-1'>
                   <h3 className='h1 pt-0 mt-0 text-end text-gray-400'>3</h3>
               </div>
               
               <div className='lg:ml-[5rem] '>
                   <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                   <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gray-300'/>
               </div>
               
               <div className='ml-[5rem] flex-1'>
                   <h5 className='text-[1.9rem] font-bold'>We start working.</h5>
                   <p className='lg:w-[27rem] lg:mt-5 lg:text-[1.2rem] text-justify'>After knowing what type of service you are interested in and having agreed on all the necessary issues for this project, we start working on the agreed day.</p>
               </div>
           </div>
        </div>
    </motion.div>
  )
}

export default StepToMyServices