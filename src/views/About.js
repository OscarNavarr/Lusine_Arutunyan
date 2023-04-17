// import images
import WomanImg from '../img/about/lusine_arutunyan.jpg';
// import motion
import { motion, useInView } from 'framer-motion';

import SocialsMedias from '../components/SocialsMedias';
import { useRef } from 'react';


const About = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const refer = useRef(null);
  const mobileTitleRef = useRef(null);
  const imgRef = useRef(null);
  const firstRefParragraph = useRef(null);
  const secondRefParragraph = useRef(null);
  const thirdRefParragraph = useRef(null);
  const refIcon = useRef(null);

  const isInView = useInView(refer,{ once: true }, {margin: "-10%"});
  const isMobileTitleRefInView = useInView(mobileTitleRef,{ once: true }, {margin: "-10%"});
  const isImgInView = useInView(imgRef,{ once: true }, {margin: "-15%"});
  const isfirstRefParragraphView = useInView(firstRefParragraph,{ once: true }, {margin: "-5%"});
  const isSecondRefParragraphView = useInView(secondRefParragraph,{ once: true }, {margin: "-5%"});
  const isThirdRefParragraphView = useInView(thirdRefParragraph,{ once: true }, {margin: "-5%"});
  const isRefIconView = useInView(refIcon,{ once: true }, {margin: "-5%"});

  return (
    <section
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
          className='
            flex-1 lg:flex-none 
            lg:ml-[9.5rem] sxl:ml-[35rem] 
            lg:mr-[7rem]
            sxl:w-[45rem] 
            lg:order-none 
            overflow-hidden
          '>
            {/*****************************/}
            <motion.h1 
              ref={mobileTitleRef}
              initial={{opacity: 0}}
              animate={{opacity: isMobileTitleRefInView ? 1 : 0}}
              transition={{duration: 1}}
              className='h1 text-[3.7rem] lg:hidden'
            >
              About me
            </motion.h1>
            <motion.img 
              ref={imgRef}
              initial={{x: "-50px", opacity: 0}}
              animate={{x: isImgInView ? "0px" : "-50px", opacity: isImgInView ? 1 : 0}}
              transition={{duration: 1}}
              src={WomanImg} 
              alt='' 
              className='w-[20rem] lg:w-[25rem] xl:w-[30rem] sxl:w-[45rem] mt-[4rem] lg:mt-[0rem]' 
            />
            {/*****************************/}
          </motion.div>
          {/* text */}
          <div
            className='flex-1 pt-[2rem]  pb-[10rem] sxl:pb-0 px-8 lg:px-0 lg:pt-0 xl:pt-10 sxl:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <motion.h1 
              ref={refer}
              initial={{x: "100px", opacity: 0}}
              animate={{x: isInView ? "0px" : "70px", opacity: isInView ? 1 : 0}}
              transition={{duration: 1}}
              className='h1 hidden lg:block lg:text-[3rem] xl:text-[5rem] sxl:text-[7rem] lg:mt-[3rem] xl:pt-2 sxl:pt-0'
            >
              About me
            </motion.h1>
            <motion.p 
              ref={firstRefParragraph}
              initial={{x: "100px", opacity: 0}}
              animate={{x: isfirstRefParragraphView ? "0px" : "70px", opacity: isfirstRefParragraphView ? 1 : 0}}
              transition={{duration: 1}}
              className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify my-3 max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'
            >
              My name is<b> Lusine Arutunyan.</b> and I'm a photographer. 
              One of the most important things I can do for yo is to awaken in you a smile and a love for photography.
            </motion.p>
            <motion.p 
              ref={secondRefParragraph}
              initial={{x: "100px", opacity: 0}}
              animate={{x: isSecondRefParragraphView ? "0px" : "70px", opacity: isSecondRefParragraphView ? 1 : 0}}
              transition={{duration: 1}}
              className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify mb-3 max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'
            >
              By contacting me, you'll receive photos with live emotions. Through the prism of my passion for photography, through the lens of my camera,<b>I'm ready to show you as you are.</b>
            </motion.p>
            <motion.p 
              ref={thirdRefParragraph}
              initial={{x: "100px", opacity: 0}}
              animate={{x: isThirdRefParragraphView ? "0px" : "70px", opacity: isThirdRefParragraphView ? 1 : 0}}
              transition={{duration: 1}}
              className='lg:text-[15.2px] sxl:text-[1.5rem] text-justify mb-[1.5rem] sxl:pb-[2rem] max-w-sm lg:max-w-[23rem] xl:max-w-sm sxl:max-w-[40rem]'
            >
              You'll have precious moments of your life that you can share with your family and friends.
            </motion.p>
            <motion.div 
              ref={refIcon}
              initial={{y: "20px", opacity: 0}}
              animate={{y: isRefIconView ? "0px" : "20px", opacity: isRefIconView ? 1 : 0}}
              transition={{duration: 1}}
              className='mt-10 lg:mt-0'
            >
              <SocialsMedias />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
