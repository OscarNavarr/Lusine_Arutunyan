// TODO: MOSTRAR TODAS LAS FOTOS CUANDO SE MUESTRE ESTE COMPONENTE AL INICIO 
// TODO: ARREGLAR EL RESPONSIVE WEB DESING

import React, { useEffect, useState } from 'react'
import SelectBox from '../SelectBox'
import ShowImage from '../ShowImage'

import { storage } from '../../firebase';
import { ref, listAll, getDownloadURL, getMetadata} from 'firebase/storage';
import LoaderSpinner from '../LoaderSpinner';
import NotImageFound from '../NotImageFound';

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions';

const AutViewImageComponent = () => {
  
  const [imageList, setImageList] = useState([]);
  const [dataFullPath, setDataFullPath] = useState([]);
  //Hooks for loaderSpinner Components
  const [loading, setLoading] = useState(false);
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();
  let storeRoute= "";

  
  //GET THE VALUE OF SELECTBOX
  const handleSelectBoxValue = (newValue) => {
    setSelectValue(newValue);
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
  
    
    //GET IMAGES FROM FIRESTORE
    useEffect(() => {
      const fetchImageList = async () => {
        const imageListRef = ref(storage, storeRoute);
        
        try {
          const response = await listAll(imageListRef);
         
          //GET URL TO THE IMAGES
          
          setLoading(true);
          const urls = await Promise.all(response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          }));

          //GET METADATAS TO THE IMAGES
          
          const metaData = await Promise.all(response.items.map(async (item) => {
            const data = await getMetadata(item);
            return data.fullPath;
          }));
          
          //SEND THE DATAS TO THE HOOKS
          setImageList(urls);
          setDataFullPath(metaData);
          setLoading(false);
        
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchImageList();
    }, [storeRoute]);
   
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
      <div className='flex justify-center'>
        <h3 className='text-justify text-[1.3rem] mt-[1rem] mr-5'>Plaese select a categorie of image to show you</h3>
        <div className='mt-3'>
          <SelectBox onValueChange={handleSelectBoxValue}/>
        </div>
      </div>

      {/***** ***** ***** ***** *****/}
      
      {/* IMAGE NOT FOUND COMPONENT */}
      
      {imageList.length===0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition1}
        >
          <NotImageFound/>
        </motion.div>
      )}
      
      {/***** ***** ***** ***** *****/}
      {
        imageList.length>0 && (
          <div className=' mt-[3rem] grid grid-cols-4 gap-4'>
            {imageList.map((url,index) => {
              return <ShowImage key={index} url={url}/>
            })}
            <div 
            className={`${loading ? 'block' : 'hidden'} absolute bottom-[28%] left-[13%] lg:bottom-[35%] lg:left-[38%]`}>
              <LoaderSpinner/>
            </div>
          </div>
        )
      }
      
    
    </div>
  )
}

export default AutViewImageComponent

/**
 * useEffect(() => {
      const fetchImageList = async () => {
        const imageListRef = ref(storage, storeRoute);
        
        try {
          const response = await listAll(imageListRef);
          setLoading(true);
          const urls = await Promise.all(response.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          }));
          setImageList((prevs) => [...prevs, urls]);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchImageList();
    }, [storeRoute]);


    OLD METHOD

    useEffect(() => {
      const imageListRef = ref(storage,storeRoute);
        
     
      listAll(imageListRef)
      
        .then((response) => {
        
          response.items.forEach((item) => {
            
            getDownloadURL(item)
            
              .then((url) => {
                setLoading(true);   
                setImageList((prev) => [...prev, url]);
    
            });
          });
        
        })
        .then(setImageList([]))
        .then(setLoading(false));
    }, [storeRoute]);
 */