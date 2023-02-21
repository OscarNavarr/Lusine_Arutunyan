// TODO: CUANDO EL USUARIO SELECCIONE UNA IMAGEN DEBO HACER QUE EL TEXTO QUE LE INDICA AL USUARIO DE SELECCIONAR UNA IMAGEN, DESAPAREZCA
// TODO: DEBP CREAR UN SELECT BOX CON CATEGORIA DE IMAGENES
// TODO: DONDE ESTA LA CONSTANTE "imageRef" DEBO REMPLAZAR LA PALABRA "images/" POR LA CATEGORIA QUE EL USUARIO ELIGIO EN EL SELECT BOX

// TODO: DEBO VERIFICAR QUEL ARCHIVO QUE SE ELEGIO SEA DE TIPO JPG,JPEF,PNG 
 
import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref} from 'firebase/storage';
import { v4 } from 'uuid';
import { useUserAuth } from '../../context/UserAuthContext';
//icons
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
import ErrorMessages from './ErrorMessages';
import CorrectMessages from './CorrectMessages';

const AuthPublicationsComponent = () => {
  //HOOKS
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [correct, sentCorrect] = useState("");
  const [error, setError] = useState("");
  

  const { handleUploadImg } = useUserAuth();
  const fileInput = document.getElementById('inputImg');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    setImageUpload(e.target.files[0]);

    reader.addEventListener('load', () =>{
      setImagePreview(reader.result);
    });

    reader.readAsDataURL(file);
  };
  const deleteImage = () => {
    setImagePreview(null);
    setImageUpload(null);
    fileInput.value = null;
  }
  const uploadImage = async() => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    try {
      await handleUploadImg(imageRef, imageUpload);
      
      deleteImage();
      sentCorrect("The image has been published successfully");
   
    } catch (error) {
      
      setError(error)
      
    }
  };
  


  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <p className='text-center text-[1.3rem]'>Make a post or manage images </p>
      <p className='text-center mt-9'>Please select an image to publish it on the web.</p>
      
      {/*Show Result */}
      <div className='flex justify-center pt-7'>
        <ErrorMessages error={error}/>
        <CorrectMessages message={correct} />
      </div>

      { imagePreview && 
        <div className='flex justify-center'>
          <img src={imagePreview} 
            className="max-w-[10rem] max-h-[20rem]" 
            alt="Preview"
          />
        </div>
      }
      <div className=''>
        <div className='lg:flex lg:justify-center lg:mt-4'>
          <input 
            type='file'
            id='inputImg'
            className='mt-6 mr-8 '
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          <br/>
          <div className='flex'>
            <span>
              <FaUpload className='w-[2rem] h-[2.5rem] p-1 bg-green-500 mt-3 text-white'/>
            </span>
            <button 
              className='bg-black h-[2.5rem] px-4 mt-3 text-white'
              onClick={uploadImage}
            >
            Upload Image
            </button>
            <button 
              className='bg-red-500 h-[2.5rem] w-[3rem] ml-5 px-[0.8rem]  mt-3 text-white'
              onClick={deleteImage}
            >
              <FaRegTrashAlt className='w-[1.5rem] h-[1.5rem] text-white'/>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AuthPublicationsComponent