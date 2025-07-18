import React, { useContext } from 'react';
// import components 
import Socials from './Socials';

import MobileNav from './MobileNav';
// import link
//import { Link } from 'react-router-dom';
// import cursor context
//import { CursorContext } from '../context/CursorContext';

const Header = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] bg-white z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <a
          href="#home"
          className='max-w-[300px] sxl:max-w-[500px]'
        >
          {/*
            ESTE CODIGO VA DENTRO DEL "NAV" DE ARRIVA, LO QUE NO FUNCIONA POR AHORA
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/} 
          <h2 className='text-[25px] lg:text-[40px] sxl:text-[60px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>Lusine Arutunyan</h2>
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          
          >
          {/*
            ESTE CODIGO VA DENTRO DEL "NAV" DE ARRIVA, LO QUE NO FUNCIONA POR AHORA
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/} 
          <a href="#home"
            className='text-[#696c6d] border-gray-700 hover:border-b-[0.18rem] text-[1.2rem] sxl:text-[25px] hover:text-primary transition'
          >
            Home
          </a>
          <a
            href='#portfolio'
            className='text-[#696c6d] border-gray-700 hover:border-b-[0.18rem] text-[1.2rem]  sxl:text-[25px] hover:text-primary transition'
          >
            Portfolio
          </a>
          <a
            href='#about'
            className='text-[#696c6d] border-gray-700 hover:border-b-[0.18rem] text-[1.2rem]  sxl:text-[25px] hover:text-primary transition'
          >
            About
          </a>
          <a
            href='#pricing'
            className='text-[#696c6d] border-gray-700 hover:border-b-[0.18rem] text-[1.2rem]  sxl:text-[25px] hover:text-primary transition'
          >
            Pricing
          </a>
          <a
            href='#contact'
            className='text-[#696c6d] border-gray-700 hover:border-b-[0.18rem] text-[1.2rem]  sxl:text-[25px] hover:text-primary transition'
          >
            Contact
          </a>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;