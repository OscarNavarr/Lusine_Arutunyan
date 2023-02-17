// TODO: ponerle un border button a los menus de navegacion para saber en cual he clicado
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import { auth } from '../../firebase';

const AuthDashboard = () => {
  const { handlesignOut } = useUserAuth();
  const navigate = useNavigate();

  //Button SignOut
  const logOut = () =>{
    handlesignOut(auth);
    navigate("/");
  }

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='h1 text-left mt-[1rem] ml-9 text-[3rem]'>Welcome Lusiane</h2>
        <button 
          className='bg-black text-white w-[7rem] h-[3rem] mr-9 mt-[1rem]'
          onClick={logOut}
        >
          Logout
        </button>
      </div>

      <div className='mt-[4rem] w-[70%] mx-auto'>
        <p className='text-center text-[2.5rem]'>You can choose any of the following options.</p>
        <div className='mt-[4rem]'>
          <nav className='flex justify-center'>
            <NavLink className='text-[1.3rem] mr-10' to="emails">Messages</NavLink>
            <NavLink className='text-[1.3rem] mr-10' to="publications">Publication</NavLink>
            <NavLink className='text-[1.3rem]' to="profile">Account</NavLink>
          </nav>
        </div>
        <div className='h-[2px] bg-black'/>

      </div>
      

      <Outlet/>
    </>
  )
}

export default AuthDashboard