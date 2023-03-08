import React from 'react'
import { FaRegImages } from "react-icons/fa";

const NotImageFound = () => {
  return (
    <>
        <div className='flex justify-center mt-16'>
            <FaRegImages className='text-slate-300 w-[10rem] h-[10rem]' />
        </div>
        <p className='text-slate-300 text-[2rem] pt-5 text-center'>There are no images to display</p>
    </>
  )
}

export default NotImageFound