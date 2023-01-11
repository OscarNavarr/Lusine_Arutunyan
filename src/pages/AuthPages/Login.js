import React from 'react'

const Login = () => {
  return (
    <div className='pt-[14rem] flex justify-center items-center'>
        <div>
            <h2 className='h1 text-[3rem] text-center'>Login</h2>
           
            <form className='mt-9'>
                <input type='text' className='w-[20rem] h-[3rem] border-b-2 border-current mb-3'  placeholder='email'/><br/>
                <input type='password' className='w-[20rem] h-[3rem] border-b-2 border-current' placeholder='password' />
            </form>
            <div className='flex justify-center'>
                <button className='bg-black text-white w-[7rem] h-[3rem] mt-9'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login