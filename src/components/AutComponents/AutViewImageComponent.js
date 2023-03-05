// TODO: MOSTRAR TODAS LAS IMAGES DE FIREBASE
// TODO: MOSTRAR TODAS LAS IMAGES DE FIREBASE POR CATEGORIA
// TODO: ARREGLAR EL RESPONSIVE WEB DESING

import React, { useEffect, useState } from 'react'
import SelectBox from '../SelectBox'
import ShowImage from '../ShowImage'

import { storage } from '../../firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage';

const AutViewImageComponent = () => {
  
  const [imageList, setImageList] = useState([]);
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();
  
  let storeRoute= "/";

  
  //GET THE VALUE OF SELECTBOX
  const handleSelectBoxValue = (newValue) => {
    setSelectValue(newValue);
    storeRoute= newValue + '/';
    console.log(storeRoute);
  }

  switch (selectValue) {
    case "":
      storeRoute="/"
      break;
    case 'Professionals':
      storeRoute='Professionals/'
      break;
    case 'Familiar':
      storeRoute='Familiar/'
      break;
    case 'Weddings':
      storeRoute='Weddings/'
      break;
    case 'Birthday':
      storeRoute='Birthday/'
      break;
    case 'Fashion':
      storeRoute='Fashion/'
      break;
    case 'Pregnancy':
      storeRoute='Pregnancy/'
      break;  
    default:
      storeRoute="/"
      break;
    }
  
  const imageListRef = ref(storage,'Professionals/')
  
    //GET IMAGES FROM FIRESTORE
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <div className='flex justify-center'>
        <h3 className='text-justify text-[1.3rem] mt-[1rem] mr-5'>Plaese select a categorie of image to show you</h3>
        <div className='mt-3'>
          <SelectBox onValueChange={handleSelectBoxValue}/>
        </div>
      </div>
      <div className=' mt-[3rem] grid grid-cols-4 gap-4'>
        {imageList.map((url,index) => {
          return <ShowImage key={index} url={url}/>
        })}
      </div>
    
    </div>
  )
}

export default AutViewImageComponent