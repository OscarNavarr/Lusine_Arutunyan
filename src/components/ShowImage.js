import React, { useState } from 'react'

// IMPORT MOTION
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

// IMPORT FROM FIRESTORE
import { ref, deleteObject } from 'firebase/storage';

// IMPORT STORAGE
import { storage } from '../firebase';

// IMPORT LOADERSPINNER COMPONENT
import LoaderSpinner from './LoaderSpinner';

const ShowImage = ({url, dataFullPath}) => {
  
  //REFERENCE TO FIRESTORE
  const desertRef = ref(storage, dataFullPath);

  //HOOK FOR LOADERSPINNER COMPONENT
  const [loading, setLoading] = useState(false);

  const [imageDelete, setImageDelete] = useState(false);

  const handleDeleteImages = async() => {
    
    try {

      setImageDelete(true);
      setLoading(true);
      
      await deleteObject(desertRef);
      setLoading(false);

    } catch (error) {

      setImageDelete(false);
      console.log('Error in:'+ error );
    
    }

  }
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={transition1}
      className='max-w-[16rem]'>
        <div className={`${imageDelete ? 'hidden' : 'block'}`}>

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

        </div>
        <div 
          className={`${loading ? 'block' : 'hidden'} absolute bottom-[28%] left-[13%] lg:bottom-[35%] lg:left-[38%]`}>
            <LoaderSpinner/>
        </div>

    </motion.div>
  )
}

export default ShowImage