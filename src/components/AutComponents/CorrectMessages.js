import React, { useState } from 'react'
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';

const CorrectMessages = (props) => {
    
    const handleVisibility = () => {
      const correctValue = true;      
      props.onCorrectValueChange(correctValue);
    
    }
  return (
    <>
      {props.showCorrect && (
          <div className={`bg-black ${props.showCorrect ? 'block' : 'hidden'}  text-white min-h-[3.5rem] max-w-[35rem] pl-4 pr-2 pt-2 pb-4`}>
            <div className='flex justify-end mb-2'>
                <button onClick={handleVisibility}>
                    <FaTimes className='w-5 h-5 text-white	'/>
                </button>
            </div>
            <div className='flex'>
                <FaRegCheckCircle className='mr-3 w-6 h-6 text-green-500'/>
                <p className='font-bold text-[1.1rem] mr-[2rem]'>{props.message}</p>
            </div>
        </div>
      )}
    </>
  )
}

export default CorrectMessages