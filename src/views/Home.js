/**
 * 
 * A ESTE COMPONENTE SE LE PUEDE CAMBIAR EL TEXTO A TRAVES DEL COMPONENTE "texts" PARA CAMBIAR EL TEXTO
 * SOLO DEBO ESCRIBIR EL SIGUIENTE COMANDO "texts[index].title" O "texts[index].subtitle" 
 * 
 * TODO: DEBO PONER FOTOS CON FONDOS CLAROS 
 * 
 */

import React, { useState, useEffect } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
// import Icons
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import texts from '../texts/homeText';
import { lusine } from '../img/home';
const Home = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if(index === texts.length - 1){
          setIndex(0)
        }else{
          setIndex(index + 1)
        }
    }, 5000);
  
    return () => {
      clearInterval(interval);
    }
  }, [index, texts.length]);
  

  const imgAction = (action) =>{
   
    if(action === 'next-img'){
        setIndex(index + 1);
        if (index + 1 === texts.length){  setIndex(0)}
    }
    if(action === 'previous-img'){
        setIndex(index - 1)
        if (index - 1 < 0 ){ setIndex(texts.length -1 )}
    }
}
  const styles = {
    container: {
      backgroundImage: `url(${texts[index].images})`,
      // otros estilos que desees aplicar al contenedor
    }
};
  return (
    <>
   
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
      id='home'
    >
      <div className='container mx-auto h-full '>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className='
            order-2 
            lg:order-1 
            w-full 
            lg:mt-[15rem] xl:mt-[20rem] sxl:mt-[23rem] speciallaptop2:mt-[15rem]
            xl:ml-[15rem] speciallaptop:ml-[6rem] speciallaptop2:ml-[15rem] special:ml-[15rem] sxl:ml-[34.9rem] 
            pb-14 lg:pb-0 md:w-[50rem] lg:w-[40rem]  xl:w-[50rem]
            speciallaptop:w-[40rem] special:w-[40rem] sxl:w-[60rem] 
            z-10 
            flex flex-col 
            justify-center
            items-center lg:items-start'
            >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <motion.h1 
              initial={{y:'100%',opacity:0}}
              animate={{y:'0%',opacity:1}}
              transition={{duration:1,delay:0.3}}
              className='h1 text-center lg:text-start text-[3rem] lg:text-[5rem] sxl:text-[8rem]'>
              {texts[index].title}
            </motion.h1>
            <motion.p 
              initial={{y:'100%',opacity:0}}
              animate={{y:'0%',opacity:1}}
              transition={{duration:1,delay:0.5}}
              className='text-[26px] lg:text-[36px] sxl:text-[50px] font-primary mb-4 lg:mb-12 '>
              Marseille-Paris, France
            </motion.p>
            <motion.a 
              href='#portfolio'
              initial={{y:'100%',opacity:0}}
              animate={{y:'0%',opacity:1}}
              transition={{duration:1,delay:0.6}}
              className='btn mb-[5px] '>
             Continue
            </motion.a>
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
            lg:w-[30rem] special:w-[40rem] sxl:w-[55rem]'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='overflow-hidden w-[20rem] h-[20rem] relative lg:w-[30rem] lg:h-[30rem] special:w-[35rem] special:h-[35rem] sxl:w-[55rem] sxl:h-[55rem] rounded-full lg:rounded-none bg-cover bg-center'
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                className='w-full'
                exit={{opacity:0}}
                src={texts[index].images}
                alt='presentation images'
              />
              <div className='flex j z-[6] lg:hidden absolute bottom-[45%] lg:bottom-[-7rem] lg:right-[10rem]'>
                <button
                onClick={() => imgAction('previous-img')}
                className='rounded-full ml-1 mr-[15.5rem] outline-none   bg-[rgba(0,0,0,0.50)] '>
                  <AiOutlineLeft className=' text-white p-[0.3rem] w-[2rem] h-[2rem]'/>
                </button>

                <button 
                  onClick={() => imgAction('next-img')}
                  className='rounded-full outline-none bg-[rgba(0,0,0,0.50)]'>
                  <AiOutlineRight className='text-white p-[0.3rem] w-[2rem] h-[2rem]'/>
                </button>
              </div>
            </motion.div>

            <div className=' z-[6] hidden lg:flex absolute bottom-[45%] lg:bottom-[-5rem] lg:right-[10rem] special:right-[14rem]'>
                <button
                onClick={() => imgAction('previous-img')}
                className='rounded-full lg:rounded-none mr-[14.7rem] lg:mr-0 outline-none  lg:h-[4rem] lg:w-[4rem] lg:px-4 bg-black '>
                  <AiOutlineLeft className='text-white w-[2rem] h-[2rem]'/>
                </button>

                <button 
                  onClick={() => imgAction('next-img')}
                  className='rounded-full lg:rounded-none outline-none lg:h-[4rem] lg:w-[4rem] ml-5 lg:px-4 bg-black'>
                  <AiOutlineRight className='text-white w-[2rem] h-[2rem]'/>
                </button>
              </div>
          </div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default Home;
