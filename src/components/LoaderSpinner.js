import React from 'react'

const LoaderSpinner = () => {
  return (
    <div className='bg-loadingSpiner backdrop-blur-sm drop-shadow-2xl flex justify-center items-center py-4 w-[35rem] h-[20rem] md:w-[30rem] md:h-[20rem]'>
        <div class="spinner"></div>
    </div>
  )
}

export default LoaderSpinner