import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import { motion } from 'framer-motion';
import SelectBox from '../../components/SelectBox'
import { storage} from '../../firebase';
import { ref, listAll, deleteObject, getDownloadURL, getMetadata} from 'firebase/storage';
import LoaderSpinner from '../../components/LoaderSpinner'
// import transition
import { transition1 } from '../../transitions';
import Header from '../../components/Header';
import NavBarSubPorfolio from './NavBarSubPorfolio';


const SubPortfolio = () => {
  
  const [ openModal, setOpenModal ] = useState(false);
  
  //HOOKS FOR THE IMAGES URL
  const [imageList, setImageList] = useState([]);
  
  
  //HOOK FOR LOADERSPINNER COMPONENT
  const [loading, setLoading] = useState(false);
  
  //HOOKS FOR SELECTBOX FIELD
  const [selectValue, setSelectValue] = useState();


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
        
        // GET URLS FOR ALL IMAGES
        const [urls] = await Promise.all([
          Promise.all(response.items.map((item) => getDownloadURL(item)))
        ]);

        // UPDATE HOOKS WITH RETRIEVED DATA
        setImageList(urls);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setSelectValue(selectValue+'/');
      }
    };

    fetchImageList();

  }, [selectValue]);

  const handleModalOpen = (valueBool) => {
      setOpenModal(valueBool);
  };

  return (
    <>
        
        <motion.section
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
          className={`${openModal && 'section overflow-hidden'} overflow-x-hidden z-30`}
          >
            <div className={`${openModal && 'blur-lg'}`}>

              <NavBarSubPorfolio/>
            </div>
          <div className='container mx-auto'>
            <div className='relative pt-24 lg:pt-36 pb-8'>
            
              <div className={`px-4 md:flex md:items-center md:justify-center lg:flex-row ${openModal && 'blur-lg'}`}  >
                  
                  <h2 className='text-xl mb-8 md:mb-0  md:text-2xl lg:mr-9 font-semibold'>What kind of image do you want to see?</h2>
                
                  <SelectBox onValueChange={handleSelectBoxValue} className={`${openModal && 'blur-lg'}`}/>
              </div>
                {/*
                  *
                  *   GALLERY SECTION
                  *
                  *
                */}
                <div className='mt-[4rem]' >
                  <Gallery urls={imageList} modalOpen={handleModalOpen} className='overflow-hidden z-40'/> 
                </div>
                
            </div>
          </div>
        </motion.section>
        <div className =
            {`
            ${loading ? 'block' : 'hidden'} 
            absolute 
            bottom-[15rem]  lg:bottom-[20rem]
            left-[0.6rem] lg:left-[38%]
            `}>
              <LoaderSpinner/>
        </div>
    </>
  )
}

export default SubPortfolio