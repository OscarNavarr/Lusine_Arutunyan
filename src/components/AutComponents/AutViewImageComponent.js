// TODO: MOSTRAR TODAS LAS IMAGES DE FIREBASE
// TODO: MOSTRAR TODAS LAS IMAGES DE FIREBASE POR CATEGORIA
// TODO: ARREGLAR EL RESPONSIVE WEB DESING

import React from 'react'
import SelectBox from '../SelectBox'
import ShowImage from '../ShowImage'

const AutViewImageComponent = () => {
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <div className='flex justify-center'>
        <h3 className='text-justify text-[1.3rem] mt-[1rem] mr-5'>Plaese select a categorie of image to show you</h3>
        <div className='mt-3'>
          <SelectBox />
        </div>
      </div>
      <div className=' mt-[3rem] grid grid-cols-4 gap-4'>
        <ShowImage />
        <ShowImage />
        <ShowImage />
        <ShowImage />
        <ShowImage />
        <ShowImage />
      </div>
    
    </div>
  )
}

export default AutViewImageComponent