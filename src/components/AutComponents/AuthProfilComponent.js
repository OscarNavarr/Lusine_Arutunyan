import React from 'react'

const AuthProfilComponent = () => {
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
        <p className='text-center text-[1.3rem]'>Change email and password.</p>
        
            <div className='pt-[3rem] flex justify-center'>
                <div className='mt-9 mr-5'>
                    <p className='pt-[0.70rem]'>Write the new email:</p>
                    <p className='pt-[2.3rem]'>Write the new password:</p>
                    <p className='pt-[2.2rem]'>Confirm the password:</p>
                </div>
                <div>
                    <form className='mt-9'>
                        <input type='text' className='w-[20rem] h-[3rem] border-b-2 border-current mb-3'  placeholder='lusiane@gmail.com'/>
                        <br/>

                        <input type='password' className='w-[20rem] h-[3rem] border-b-2 border-current mb-3' placeholder='new password' />
                        <br/>

                        <input type='password' className='w-[20rem] h-[3rem] border-b-2 border-current' placeholder='confirm the password' />
                    </form>
                </div>
            </div>
            <div className='flex justify-center mt-[3rem]'>
                <button className='bg-black text-white w-[7rem] h-[3rem]'>Save</button>
            </div>
    </div>
  )
}

export default AuthProfilComponent