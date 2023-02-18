import React from 'react';
import { FaBan } from 'react-icons/fa';

const ErrorMessages = (props) => {
  return (
    <>
      {props.error && (
        <div className='bg-black text-white min-h-[3.5rem] px-8 py-4 flex'>
          <FaBan className='mr-3 w-6 h-6 text-red-500	'/>
          <p className='font-bold text-[1.1rem]'>Error: {props.error}</p>
        </div>
      )}
    </>
  )
}

export default ErrorMessages