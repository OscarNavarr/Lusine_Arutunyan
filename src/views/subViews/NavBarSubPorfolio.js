import React from 'react'
import { Link } from 'react-router-dom';
import MobileNav from '../../components/MobileNav'
import Socials from '../../components/Socials'

const NavBarSubPorfolio = () => {
  return (
    <header className=' w-full px-[30px] lg:px-[100px] bg-white z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          to={'/'}
          className='max-w-[300px] sxl:max-w-[500px]'
        >
          <h2 className='text-[25px] lg:text-[40px] sxl:text-[60px] font-primary font-bold capitalize leading-[120%] tracking-[-0.05em]'>Lusine Arutunyan</h2>
        </Link>
        
      </div>
      <Link to={'/'} className='w-[7rem] h-[2.4rem] lg:h-[3rem] py-2 lg:py-3 text-center text-white bg-black'>Go Back</Link>
    </header>
  );
};

export default NavBarSubPorfolio