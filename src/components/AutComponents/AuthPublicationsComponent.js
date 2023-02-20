
// TODO: DEBP CREAR UN SELECT BOX CON CATEGORIA DE IMAGENES
// TODO: DONDE ESTA LA CONSTANTE "imageRef" DEBO REMPLAZAR LA PALABRA "images/" POR LA CATEGORIA QUE EL USUARIO ELIGIO EN EL SELECT BOX
// TODO: CUANDO SELECCIONO UNA IMAGEN EN EL INPUT QUIERO VER UNA VISTA PREVIA DE ESA IMAGEN ANTES DE SUBIRLA A FIREBASE, ESA VISTA PREVIA DEBE ESTAR ARRIBA DEL INPUT
// TODO: DEBO CREAR UN BOTON DE CANCELAR PARA LIMPIAR EL INPUT
// TODO: DEBO VERIFICAR QUEL ARCHIVO QUE SE ELEGIO SEA DE TIPO JPG,JPEF,PNG 
 
import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref} from 'firebase/storage';
import { v4 } from 'uuid';
import { useUserAuth } from '../../context/UserAuthContext';

const AuthPublicationsComponent = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const { handleUploadImg } = useUserAuth();

  const uploadImage = async() => {
    if(imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    try {
      await handleUploadImg(imageRef, imageUpload);
      console.log('Img uploaded')
    } catch (error) {
      console.log(error)
      
    }
  };


  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <p className='text-center text-[1.3rem]'>Make a post or manage images </p>
      <p className='text-center mt-9'>Please select an image to publish it on the web.</p>

      <div className='mt-4'>
        <input 
          type='file'
          onChange={(event) => {setImageUpload(event.target.files[0])}}
        />
        <br/>
        <button 
          className='bg-black h-[3rem] px-4 mt-3 text-white'
          onClick={uploadImage}
        >
          Upload Image
        </button>
      </div>
    </div>
  )
}

export default AuthPublicationsComponent