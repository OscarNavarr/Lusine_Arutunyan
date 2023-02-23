import React, { useState } from 'react';
import { FaBan, FaTimes} from 'react-icons/fa';

const ErrorMessages = (props) => {
  const [visibility, setVisibility] = useState("block");
    
    const handleVisibility = () => {
        const errorValue = null;
        props.onErrorValueChange(errorValue);
        setVisibility('hidden');
       
    }
  return (
    <>
      {props.error && (
          <div className={`bg-black ${visibility }  text-white min-h-[3.5rem] max-w-[35rem] pl-4 pr-2 pt-2 pb-4`}>
            <div className='flex justify-end mb-2'>
                <button onClick={handleVisibility}>
                    <FaTimes className='w-5 h-5 text-white	'/>
                </button>
            </div>
            <div className='flex'>
                <FaBan className='mr-3 w-6 h-6 text-red-500'/>
                <p className='font-bold text-[1.1rem] mr-[2rem]'>{props.error}</p>
            </div>
        </div>
      )}
    </>
  )
}

export default ErrorMessages