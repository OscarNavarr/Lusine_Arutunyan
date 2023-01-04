/**
 * 
 * cuando reciba un valor true en el useState impedir que la pagina haga scroll
 * 
 */
import React, { useContext, useState } from 'react';

// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../../transitions';
// import cursor context
import { CursorContext } from '../../context/CursorContext';
import Gallery from './Gallery';
import SubAboutImgSlider from '../../components/subAbout/SubAboutImgSlider';

const images = [
    "https://res.cloudinary.com/duchgijkt/image/upload/v1671812840/photos/certifications/19966_ptsusq.jpg",
    "https://res.cloudinary.com/duchgijkt/image/upload/v1671812630/photos/certifications/5684446_pwjxne.jpg",
    "https://res.cloudinary.com/duchgijkt/image/upload/v1671812630/photos/certifications/5498012_twkc0g.jpg",
  ]
const SubAbout = () => {
const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
const [ value, setValue ] = useState(false);
console.log('Hola este es el valor:' + value);
  return (
    <motion.section
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className={`section ${ value && 'overflow-hidden'}`} 
    >
        <div className='container mx-auto h-full'>
            
            <div className='flex justify-center items-center pt-[10rem]'>
                <img src='https://res.cloudinary.com/duchgijkt/image/upload/c_lfill,g_face,h_858,q_99,w_1365,x_3,y_235/v1671808846/photos/Lusine_Arutunyan_bpvkkp.jpg'
                    alt='img_Lusine'
                    className='w-[21rem] lg:w-[50rem]  hover:scale-110 transition-all duration-500'
                />
            </div>
            <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                initial={{ opacity: 0, y: '-80%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-80%' }}
                transition={transition1}
                className='mt-[5rem]'
            >
                <h2 className='text-center text-[44px] lg:text-[40px] font-primary font-semibold capitalize leading-[120%] tracking-[0.05em]'>Meet your photographer</h2>
                <div className='flex justify-center '>
                    <div className='max-w-[57rem] py-[5rem] px-[2rem]'>
                        <p className='text-xl text-justify'>Exercitation est irure cillum in eiusmod nostrud tempor labore Lorem. Ea ea duis incididunt esse. Fugiat exercitation voluptate enim tempor et mollit sit laboris. Consectetur nisi amet sint voluptate.</p>

                        <p className='mt-3 text-xl text-justify'>In consequat exercitation ex eiusmod ea veniam aliquip laboris commodo dolore elit commodo id ad. Enim cillum et voluptate ullamco fugiat consequat tempor. Ex dolor deserunt ut nostrud. Proident duis eu aliqua minim. Irure consequat adipisicing proident consequat dolore. Dolore tempor anim est aliquip veniam pariatur ut.</p>
                        
                        <p className='mt-3 text-xl text-justify'>In consequat exercitation ex eiusmod ea veniam aliquip laboris commodo dolore elit commodo id ad. Enim cillum et voluptate ullamco fugiat consequat tempor. Ex dolor deserunt ut nostrud. Proident duis eu aliqua minim. Irure consequat adipisicing proident consequat dolore. Dolore tempor anim est aliquip veniam pariatur ut.</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                initial={{ opacity: 0, y: '-80%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-80%' }}
                transition={transition1}
                className='mb-[3rem]'
            >
                <h3 className='text-center text-[34px] lg:text-[40px] px-[2rem] font-primary font-semibold capitalize leading-[120%] tracking-[0.05em] '>MY CERTIFICATIONS.</h3>
             </motion.div>
             <div className='px-[2rem] pt-10 pb-8 overflow-hidden'>
                {/*<Gallery images={images} modalOpen={ value => setValue(value)}/>*/}
                <SubAboutImgSlider images={images}/>
            </div>
        </div>
    </motion.section>
  )
}

export default SubAbout