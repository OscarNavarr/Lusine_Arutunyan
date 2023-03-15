// TODO: ESTE COMPONENTE TIENE UN ERROR EL useEffect no se actualiza correctamente cuando se actualiza una imagen
// TODO: MOSTRAR TODAS LAS FOTOS CUANDO SE MUESTRE ESTE COMPONENTE AL INICIO 
// TODO: ARREGLAR EL RESPONSIVE WEB DESING

import React, { useEffect, useState } from 'react'
import SelectBox from '../SelectBox'
import ShowImage from '../ShowImage'

import { storage } from '../../firebase';
import { ref, listAll, deleteObject, getDownloadURL, getMetadata} from 'firebase/storage';
import LoaderSpinner from '../LoaderSpinner';
import NotImageFound from '../NotImageFound';

import { motion } from 'framer-motion'
import { transition1 } from '../../transitions';

const AutViewImageComponent = () => {
  
  //HOOKS FOR THE IMAGES URL
  const [imageList, setImageList] = useState([]);
  
  //HOOKS FOR THE IMAGES METADATAS
  const [dataFullPath, setDataFullPath] = useState([]);

  //HOOK FOR LOADERSPINNER COMPONENT
  const [loading, setLoading] = useState(false);
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();

  //HOOKS FOR UPDATE useEffect
  const[imageDeleted, setImageDeleted] = useState("");
  
  //GET THE VALUE OF SELECTBOX
  const handleSelectBoxValue = (newValue) => {
    setSelectValue(newValue);
  }
  
  
    //GET IMAGES FROM FIRESTORE
    useEffect(() => {
      const fetchImageList = async () => {
        try {
          const imageListRef = ref(storage, selectValue+'/');
          const response = await listAll(imageListRef);
          setLoading(true);
          
          // GET URLS AND METADATA FOR ALL IMAGES IN PARALLEL
          const [urls, metaData] = await Promise.all([
            Promise.all(response.items.map((item) => getDownloadURL(item))),
            Promise.all(response.items.map((item) => getMetadata(item).then(({ fullPath }) => fullPath))),
          ]);

          // UPDATE HOOKS WITH RETRIEVED DATA
          setImageList(urls);
          setDataFullPath(metaData);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setSelectValue(selectValue+'/');
        }
      };
  
      fetchImageList();

    }, [selectValue, imageDeleted]);


    //FUNCTION FOR DELETE IMAGE
    const handleImagenDeleted = async(imgRef) => {
      
      try {
        const desertRef = ref(storage, imgRef);
        
        setImageDeleted(imgRef);
        await deleteObject(desertRef);
        console.log('Image has bee deleted');
      } catch (error) {
      
        console.log(error)
       
      }
    }  
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
              return <ShowImage 
                        key={index} 
                        url={url} 
                        dataFullPath={dataFullPath[index]} 
                        onImageDeleted={handleImagenDeleted}
                      />
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
 * GET IMAGES FROM FIRESTORE
useEffect(() => {
  const fetchImageList = async () => {
    try {
      const imageListRef = ref(storage, storeRoute);
      const response = await listAll(imageListRef);

      // GET URLS AND METADATA FOR ALL IMAGES IN PARALLEL
      const [urls, metaData] = await Promise.all([
        Promise.all(response.items.map((item) => getDownloadURL(item))),
        Promise.all(response.items.map((item) => getMetadata(item).then(({ fullPath }) => fullPath))),
      ]);

      // UPDATE HOOKS WITH RETRIEVED DATA
      setImageList(urls);
      setDataFullPath(metaData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  fetchImageList();
}, [storeRoute]);

//OLD METHODE

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

 */