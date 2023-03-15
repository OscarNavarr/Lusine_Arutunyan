// TODO: ENVIAR UNA VARIABLE AL COMPONENTE PADRE PARA INFORMARLE DE QUE SE BORRO UNA IMAGEN Y ACTUALICE EL useEffect
// TODO: MOSTRAR UN MENSAJE MODAL DE QUE SE BORRO CORRECTAMENTE LA IMAGEN O QUE OCURRIO UN ERROR

import React from 'react'

// IMPORT MOTION
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'



const ShowImage = ({url, dataFullPath, onImageDeleted}) => {
 
  
  
  const element = document.getElementById(dataFullPath);

  const handleDeleteImages = async() => {
    
      onImageDeleted(dataFullPath);
      element.remove()
  }
  return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition1}
        className='max-w-[16rem]'
        id={dataFullPath}
      >
            <img 
                src={url} 
                alt='logoimage'
                className='max-h-[20rem] rounded'
            />
            <div className='mt-4'>
                <button 
                  className='bg-red-500 rounded text-white w-[100%] h-[2.5rem]'
                  onClick={handleDeleteImages}
                >
                  Delete
                </button>
            </div>
      </motion.div>
  )
}

export default ShowImage