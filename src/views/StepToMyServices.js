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
        className='mt-[10rem] lg:mt-[15rem]'
    >
        <div className='container mx-auto'>
            
            <h2 className='h1 text-center text-[3.5rem]'>Steps to request my services</h2>
            
            {/** 
             * 
             * STEP ONE
             *  
             * */}

            <div className='lg:flex lg:justify-center lg:mt-20'>
               
                <div className='hidden lg:block flex-1'>
                    <h3 className='h1  pt-[4rem] text-end text-gray-400'>1</h3>
                </div>
               
                <div className='hidden lg:block lg:ml-[5rem] pt-[4rem]'>
                    <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                    <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gray-300'/>
                </div>
                    
                <div className='mt-[8rem] lg:mt-0 ml-2 lg:ml-[5rem] mr-10 lg:mr-0 lg:mx-0 flex-1'>
                    
                    <div className='flex'>
                        
                        <div className='lg:hidden '>
                            <BsCircle className='w-[1.7rem] lg:w-[2.5rem] h-[1.7rem] lg:h-[2.5rem] mt-7 lg:mt-0'/> 
                            <div className='w-[0.2rem] h-[15rem] ml-[0.75rem] lg:ml-[1.2rem] bg-gray-300'/>
                        </div>

                        <div className='ml-5 lg:ml-0'>
                            <h5 className='text-[1.9rem] lg:pt-[3rem] font-bold'>You are interested in my work.</h5>
                            <p className='lg:w-[27rem] speciallaptop:w-[21rem] lg:mt-5 lg:text-[1.2rem] speciallaptop:text-[1rem] text-justify'>After having reviewed my website and having seen the photographs I have taken, are you convinced that I am the ideal person to capture the happiest moments of your life or, simply, I am the ideal person to collaborate on your project.</p>
                        </div>

                    </div>

                </div>
                
            </div>

            {/** 
             * 
             * STEP TWO
             *  
             * */}
            
            <div className='lg:flex lg:justify-center '>
                
                <div className='ml-2 lg:ml-[5rem] flex-1 flex justify-end '>
                    
                    <div className='lg:hidden'>
                        <BsCircle className='w-[1.7rem] lg:w-[2.5rem] h-[1.7rem] lg:h-[2.5rem] lg:mt-0'/> 
                        <div className='w-[0.2rem] h-[15rem] ml-[0.75rem] lg:ml-[1.2rem] bg-gray-300'/>
                    </div>
                    <div className='ml-5 lg:ml-0 mr-10 lg:mr-[5rem] mt-[-0.5rem]'>
                        <h5 className='text-[1.9rem] font-bold'>Contact Me.</h5>
                        <p className='lg:w-[27rem]  speciallaptop:w-[21rem] lg:mt-5 lg:text-[1.2rem] speciallaptop:text-[1rem] text-justify'>Once you know what type of services you need me to collaborate on, contact me through the different means of communication that I have and we agree on all the necessary elements to carry out your objective.</p>
                    </div>
                    
                </div>

                <div className='hidden lg:block'>
                    <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                    <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gray-300'/>
                </div>
                
                <div className='flex-1 ml-[5rem] hidden lg:block'>
                    <h3 className='h1 text-gray-400'>2</h3>
                </div>
            </div>
            
            {/** 
             * 
             * STEP THREE
             *  
             * */}

            <div className='lg:flex lg:justify-center'>
               
               <div className='hidden lg:block flex-1'>
                   <h3 className='h1 pt-0 mt-0 text-end text-gray-400'>3</h3>
               </div>
               
               <div className='hidden lg:block lg:ml-[5rem] '>
                   <BsCircle className='w-[2.5rem] h-[2.5rem]'/> 
                   <div className='w-[0.2rem] h-[15rem] ml-[1.2rem] bg-gradient-to-b from-gray-300'/>
               </div>
               
               <div className='ml-2 lg:ml-[5rem] speciallaptop:ml-[4.5rem]  flex-1'>
                    <div className='flex lg:block'>

                        <div className='lg:hidden '>
                            <BsCircle className='w-[1.7rem] lg:w-[2.5rem] h-[1.7rem] lg:h-[2.5rem] lg:mt-0'/> 
                            <div className='w-[0.2rem] h-[15rem] ml-[0.75rem] lg:ml-[1.2rem] bg-gradient-to-b from-gray-300'/>
                        </div>

                        <div className='ml-5 lg:ml-0 mr-10 lg:mr-0 mt-[-0.5rem] lg:mt-0'>
                            <h5 className='text-[1.9rem] font-bold'>We start working.</h5>
                            <p className='lg:w-[27rem] speciallaptop:w-[21rem] lg:mt-5 lg:text-[1.2rem] speciallaptop:text-[1rem] text-justify'>After knowing what type of service you are interested in and having agreed on all the necessary issues for this project, we start working on the agreed day.</p>
                        </div>

                    </div>
               </div>
           </div>
        </div>
    </motion.div>
  )
}

export default StepToMyServices