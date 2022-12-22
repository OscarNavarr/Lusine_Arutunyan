import React from 'react'

const PricingComponent = (props ) => {
  return (
        <div className='relative mt-[2rem]'>
            <img className='w-[20rem]' src={props.src} alt='family_image'/>

            <div className='absolute bottom-0 left-0 text-wite backdrop-opacity-10 hover:backdrop-opacity-30 backdrop-invert bg-white/30'>
                <div className=' min-w-[20rem]'>
                    <div className=' p-4'>
                        <h4 className='text-center text-2xl font-semibold'>{props.title}</h4>
                        <p className='text-center text-xl mb-5 font-bold'>{props.value}</p>
                        <div>
                            <p className='text-left'><b>Duration</b>: <b>{props.duration}</b></p>
                            <p className='text-left'><b>Number of photos</b>: <b>{props.n_fotos}</b></p>
                            <p className='text-left'><b>Processing time</b>: <b>{props.time}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PricingComponent