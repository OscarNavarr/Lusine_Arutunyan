import React, { useState, useEffect, useRef} from 'react';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion, useInView} from 'framer-motion';

//import ImagesSlider
import Images from '../components/porfolio/Images';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL} from 'firebase/storage';
import LoaderSpinner from '../components/LoaderSpinner';
import SelectBoxSpecial from '../components/SelectBoxSpecial';

const Portfolio = () => {
    const refer = useRef(null)
    const isInView = useInView(refer, {margin: "-9%"})

    const [categorie, setCategorie] = useState('Professionals');
    
    //HOOKS FOR THE IMAGES URL
    const [imageList, setImageList] = useState([]);
    
    //HOOK FOR LOADERSPINNER COMPONENT
    const [loading, setLoading] = useState(true);

    const handleCategorie = ( selectedCategorie) => {
        setCategorie(selectedCategorie);
    }
    

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
      className='overflow-hidden '
      id='portfolio'
    >
      <div className='container mx-auto h-full pt-[8rem] md:pt-[12rem]'>
        
          {/* text */}
          <motion.div
            className='mx-[2rem] lg:mx-[12rem] flex justify-center'
          >
            {/*
              ESTE CODIGO VA DENTRO DE LA ETIQUETA DE APERTURA DEL motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}*/}
            <div>
              <div className='block md:flex md:justify-between md:flex-wrap '>
                
                <motion.h1 
                  initial={{opacity:0, x: "-90px"}}
                  animate={{opacity: isInView ? 1 : 0, x: isInView ? "0px" : "-90px"}}
                  transition={{duration: 1}}
                  ref={refer} 
                  className='h1 text-center lg:text-start lg:text-[40px] special:text-[3.5rem] sxl:text-[60px]'
                >
                  Portfolio
                </motion.h1>


                <div className='mx-[8rem] md:mx-0 mt-5 md:mt-0'>
                  
                  <motion.div 
                    initial={{opacity:0, x: "90px"}}
                    animate={{opacity: isInView ? 1 : 0, x: isInView ? "0px" : "90px"}}
                    transition={{duration: 1}} 
                    className='flex justify-center xl:hidden py-6'>
                    <SelectBoxSpecial onCategorieChange={handleCategorie}/>
                  </motion.div>
                  
                  <motion.ul 
                    initial={{opacity:0, x: "90px"}}
                    animate={{opacity: isInView ? 1 : 0, x: isInView ? "0px" : "90px"}}
                    transition={{duration: 1}} 
                    className='hidden h-[4.6rem] xl:flex md:justify-around py-6'
                  >
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
                  </motion.ul>
                </div>
              </div>
              
              <div className='mt-[4rem]  '>
                <Images images={imageList}/>
              </div>

              <div className='flex justify-center lg:justify-end mt-[5rem]'>
                <Link to={'/porfolio'} className='mb-[30px] text-center px-auto lg:px-0 w-[13rem] text-[2rem]'>
                  {'See All ->'}
                </Link>
              </div>
            </div>
          </motion.div>

            {
              loading && (
                <div className ='
                  z-[200]
                  absolute 
                  bottom-[15rem]  lg:bottom-[20rem]
                  left-[0.6rem] lg:left-[38%]
                '>
                  <LoaderSpinner/>
                </div>
              )
            }
          
      </div>
    </motion.section>
  );
};

export default Portfolio;
