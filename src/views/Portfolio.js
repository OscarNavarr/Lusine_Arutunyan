import React, { useState, useContext, useEffect } from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';
//import ImagesSlider
import Images from '../components/porfolio/Images';
import SelectBox from '../components/SelectBox';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage';
import LoaderSpinner from '../components/LoaderSpinner';

const Portfolio = () => {
  //const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    const [categorie, setCategorie] = useState('Professionals');
    
    //HOOKS FOR THE IMAGES URL
    const [imageList, setImageList] = useState([]);
    
    //HOOK FOR LOADERSPINNER COMPONENT
    const [loading, setLoading] = useState(false);
  
    //GET IMAGES FROM FIRESTORE
  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const imageListRef = ref(storage, categorie +'/');
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
        
      }
    };

    fetchImageList();

  }, [categorie]);
  
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='overflow-hidden Overflow-y-visible sm_special:overflow-y-visible'
    >
      <div className='container mx-auto h-full pt-[8rem] md:pt-[12rem]'>
        
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='lg:ml-[6rem]'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <div>
              <div className='block md:flex md:justify-between md:flex-wrap '>
                
                <h1 className='h1 text-center lg:text-start lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'>Portfolio</h1>


                <div className='mx-[8rem] md:mx-0 mt-5 md:mt-0'>
                  
                  <div className='block lg:hidden py-6'>
                    <SelectBox/>
                  </div>
                  
                  <ul className='hidden md:flex md:justify-around py-6'>
                    <li>
                      <button  
                        onClick={() => setCategorie('Professionals')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 '
                      >
                        Professionals
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setCategorie('Familiar')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'
                      >
                        Familiar
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setCategorie('Weddings')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'
                      >
                        Weddings
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setCategorie('Birthday')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'
                      >
                        Birthday
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setCategorie('Fashion')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'
                      >
                        Fashion
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setCategorie('Pregnancy')}
                        className='text-[1.2rem] hover:border-black hover:border-b-2 lg:ml-5'
                      >
                        Pregnancy
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className='mt-[4rem] '>
                <Images images={imageList}/>
              </div>

              <div className='flex justify-end mt-[5rem]'>
                <Link to={'/porfolio'} className='mb-[30px] px-auto lg:px-0 w-[13rem] text-[2rem]'>
                  {'See All ->'}
                </Link>
              </div>
            </div>
          </motion.div>

          <div className =
            {`
            ${loading ? 'block' : 'hidden'} 
            absolute 
            bottom-[15rem]  lg:bottom-[20rem]
            left-[0.6rem] lg:left-[38%]
            `}>
              <LoaderSpinner/>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
