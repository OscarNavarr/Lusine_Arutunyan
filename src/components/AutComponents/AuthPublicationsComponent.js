
// TODO: DEBO VERIFICAR QUEL ARCHIVO QUE SE ELEGIO SEA DE TIPO JPG,JPEF,PNG 

// TODO: PONER TODOS LOS BOTONES Y INPUTS DESABILITADOS MIENTRAS SE SUBE LA IMAGE
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
import SelectBox from '../SelectBox';

const AuthPublicationsComponent = () => {
  //HOOKS
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [correct, sentCorrect] = useState("");
  const [error, setError] = useState("");
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();

  const { handleUploadImg } = useUserAuth();
  const fileInput = document.getElementById('inputImg');
  
  // FUNCTION FOR SELECTBOX FIELD
  const handleSelectBoxValue = (newValue) =>{
    setSelectValue(newValue);
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    setImageUpload(e.target.files[0]);

    reader.addEventListener('load', () =>{
      setImagePreview(reader.result);
    });

    reader.readAsDataURL(file);
  };
  const deleteData = () => {
    setImagePreview(null);
    setImageUpload(null);
    fileInput.value = null;
    return;
  }
  const deleteDataFromErrorMessages = (errorValue) =>{
    setImagePreview(errorValue);
    setImageUpload(errorValue);
    fileInput.value = (errorValue);
  }

  /* 
  *
  *
  * BUTON DE UPLOAD
  * 
  * 
  */
  const uploadImage = async() => {
    
      if(imageUpload && selectValue){

        const imageRef = ref(storage, `${selectValue ? selectValue : 'images'}/${imageUpload.name + v4()}`);
        try {
          await handleUploadImg(imageRef, imageUpload);
          
          deleteData();
          sentCorrect("The image has been published successfully");
        
        } catch (error) {
          
          setError(error)
          
        }
      
      }else{
        setError('You must choose a category of photography and then select an image.')
        deleteData();
      }
  };
  
  

  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <p className='text-center text-[1.3rem]'>Make a post or manage images </p>
      {!imagePreview && <p className='text-justify mt-9'>To make a post please choose an image category, then select an image and click the "Upload Image" button.</p>}

      {/*Show Result */}
      <div className='flex justify-center pt-7'>
        <ErrorMessages error={error} onErrorValueChange={deleteDataFromErrorMessages}/>
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
          <div className='flex'>
          
            <div className='flex mr-3 mt-6'>
              <p className='mr-3'>Select the categorie</p>
              <SelectBox onValueChange={handleSelectBoxValue}/>
            </div>
          
            <input 
              type='file'
              id='inputImg'
              className='mt-6 mr-8 '
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
          </div>
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
              onClick={deleteData}
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