// TODO: (ARREGLAR LAS VALIDACIONES).HACER QUE AUTOMATICAMENTE EL MENSAJE DE ERROR DESAPAREZCA CUANDO CUMPLO LA REGLA POR LA CUAL ME SALIÓ EL MENSAJE DE ERROR.
// TODO: ARREGLAR EL RESPONSIVE WEB DESIGN 

import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref} from 'firebase/storage';
import { v4 } from 'uuid';
import { useUserAuth } from '../../context/UserAuthContext';

//icons
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';

//Components
import ErrorMessages from './ErrorMessages';
import CorrectMessages from './CorrectMessages';
import SelectBox from '../SelectBox';
import LoaderSpinner from '../LoaderSpinner';

const AuthPublicationsComponent = () => {
  //HOOKS FOR IMAGES
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
    
  //HOOKS FOR CorrectMessages COMPONENT
  const [correct, sentCorrect] = useState("");
  const [showCorrect, sentShowCorrect] = useState(false);

  //HOOKS FOR ErrorMessages COMPONENT
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();
  
  
  const [loading, setLoading] = useState(false);

  const { handleUploadImg } = useUserAuth();
  const fileInput = document.getElementById('inputImg');
  
  // FUNCTION FOR SELECTBOX FIELD
  const handleSelectBoxValue = (newValue) =>{
    setSelectValue(newValue);
  }

  // FUNCTION FOR SELECT IMAGE
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
    fileInput.value = ('');
    return;
  }
  const changeVisibilityToErrorMessages = (errorValue) =>{

    if(errorValue){
      setImagePreview(null);
      setImageUpload(null);
      setError("");
      setShowError(false);
      fileInput.value = ('');
    }else{
      return; 
    }

  }
  const changeVisibilityToCorrectMessages = (correctValue) =>{

    if(correctValue){
      setImagePreview(null);
      setImageUpload(null);
      setError("");
      setShowError(false);
      sentShowCorrect(false);
      fileInput.value = ('');
    }else{
      return; 
    }
  }
  /* 
  *
  *
  * BUTON DE UPLOAD
  * 
  * 
  */
  const uploadImage = async() => {
      
    setLoading(true);
    if(imageUpload && selectValue){
        const imageRef = ref(storage, `${selectValue ? selectValue : 'images'}/${imageUpload.name + v4()}`);
        
        try {
          
          await handleUploadImg(imageRef, imageUpload);
          
          deleteData();
          sentShowCorrect(true);
          sentCorrect("The image has been published successfully");
          setLoading(false);

        } catch (error) {
          
          setError(error)
          sentShowCorrect(false);
          setShowError(true);
          setLoading(false);

        }
      
      }else if(imageUpload && selectValue === ""){
        setError('Please select a photography category');
        sentShowCorrect(false);
        setShowError(true);
        deleteData();
        setLoading(false);
      }else if(!imageUpload && selectValue){
        setError('Please select a photo');
        sentShowCorrect(false);
        setShowError(true);
        deleteData();
        setLoading(false);
      }else {
        setError('Please select a photography category and a photo');
        sentShowCorrect(false);
        setShowError(true);
        deleteData();
        setLoading(false);
      }
  };
  
  

  return (
    <div className='static w-[70%] mx-auto mt-[3rem]'>
      <p className='text-center text-[1.3rem]'>Make a post or manage images </p>
      {!imagePreview && <p className='text-justify md:text-center mt-9'>To make a post please choose an image category, then select an image and click the "Upload Image" button.</p>}

      {/*Show Result */}
      <div className='flex justify-center pt-7'>
        <ErrorMessages error={error} showError={showError} onErrorValueChange={changeVisibilityToErrorMessages}/>
        <CorrectMessages message={correct} showCorrect={showCorrect} onCorrectValueChange={changeVisibilityToCorrectMessages}/>
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
              <SelectBox loading={loading} onValueChange={handleSelectBoxValue}/>
            </div>
          
            <input 
              type='file'
              id='inputImg'
              className='mt-6 mr-8 '
              disabled={loading ? 'disabled' : ''}
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
              disabled={loading ? 'disabled' : ''}
            >
            Upload Image
            </button>
            <button 
              className='bg-red-500 h-[2.5rem] w-[3rem] ml-5 px-[0.8rem]  mt-3 text-white'
              onClick={deleteData}
              disabled={loading ? 'disabled' : ''}
            >
              <FaRegTrashAlt className='w-[1.5rem] h-[1.5rem] text-white'/>
            </button>
          </div>
          
        </div>
      </div>
      
      <div 
        className={`${loading ? 'block' : 'hidden'} absolute bottom-[28%] left-[13%] lg:bottom-[35%] lg:left-[38%]`}>
        <LoaderSpinner/>
      </div>
    </div>
  )
}

export default AuthPublicationsComponent