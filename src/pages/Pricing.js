import React, { useContext } from 'react'

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';


const Pricing = () => {
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
                <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                    {/* CARD ONE */}
                    <div className='card'>
                        <div className='content_ss'>
                            <h4 className=''>Love story/family</h4>
                            <p className='text-center'>40€</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aligua. </p>
                            <a href='#sadsad'>Read More</a>
                        </div>
                    </div>
                    {/* CARD TWO */}
                    <div className='card'>
                        <div className='content_ss'>
                            <h4 className=''>Love story/family</h4>
                            <p className='text-center'>40€</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aligua. </p>
                            <a href='#sadsad'>Read More</a>
                        </div>
                    </div>
                   {/* CARD THREE */}
                   <div className='card'>
                        <div className='content_ss'>
                            <h4 className=''>Love story/family</h4>
                            <p className='text-center'>40€</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aligua. </p>
                            <a href='#sadsad'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Pricing