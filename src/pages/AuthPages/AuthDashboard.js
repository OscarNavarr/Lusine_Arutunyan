import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AuthDashboard = () => {
  return (
    <>
      <h2 className='h1 text-center mt-[5rem] text-[4rem]'>Welcome Lusiane</h2>

      <div className='mt-[12rem] w-[70%] mx-auto'>
        
        <div className=''>
          <nav className='flex justify-center'>
            <NavLink className='text-[1.3rem] mr-10' to="emails">Messages</NavLink>
            <NavLink className='text-[1.3rem] mr-10' to="publications">Publication</NavLink>
            <NavLink className='text-[1.3rem]' to="profile">Account</NavLink>
          </nav>
        </div>
        <div className='h-[2px] bg-black'/>

      </div>
      

      <Outlet />
    </>
  )
}

export default AuthDashboard