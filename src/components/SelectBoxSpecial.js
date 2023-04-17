import React, { useState } from 'react'
import { AiOutlineDown } from "react-icons/ai";

import {motion} from 'framer-motion';

// Professionals Familiar Weddings Fashion Pregnancy

const SelectBoxSpecial = (props) => {

    //HOOK TO MAKE CATEGORIES VISIBLE
    const [visible, setVisible] = useState(false);

    //HOOK TO SEE WHAT CATEGORIE IS SELECTED
    const [categorie, setCategorie] = useState('Categories');

    //THIS FUNCTION IS TO SEND TO FATHER COMPONENT WHAT CATEGORIE WAS SELECTED AND TO UPDATE THE HOOK OF 'CATEGORIES'
    const handleCategorie = (selectedCategorie) => {
        setCategorie(selectedCategorie)
        setVisible(!visible)
        props.onCategorieChange(selectedCategorie)
    }

  return (
    <div className='relative'>
        <div className='flex relative justify-center border-b-[0.1rem] max-w-[10rem] border-black'>
            <button 
                onClick={() => setVisible(!visible)}
                className='mb-1 flex '>
                {categorie}
                <AiOutlineDown className='ml-5 pt-1 mt-1 w-[1rem] h-[1rem]'/>
            </button>
        </div>
        {
            visible && (
                <motion.div 
                    initial={{opacity:0,height:'0rem'}}
                    animate={{opacity:1,height:'19.5rem'}}
                    transition={{duration:1}}
                    className='absolute top-[2.5rem] lg:top-9 left-[-2.5rem] border  bg-[RGBA(255,255,255,0.9)] w-[12rem] rounded-lg'
                >
                    <ul className=''> 
                        <motion.li 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:1,delay:0.2}}
                            className='border-black  py-4 flex justify-center border-b-[0.1rem] '
                        >
                            <button onClick={() => handleCategorie('Professionals')}  className='text-[1.2rem]'>Professionals</button>
                        </motion.li>
                        <motion.li 
                             initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:1,delay:0.3}}
                            className='border-black py-4 flex justify-center border-b-[0.1rem] '
                        >
                            <button onClick={() => handleCategorie('Familiar')} className='text-[1.2rem]'>Familiar</button>
                        </motion.li>
                        <motion.li 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:1,delay:0.4}}
                            className='border-black py-4 flex justify-center border-b-[0.1rem] '
                        >
                            <button onClick={() => handleCategorie('Weddings')} className='text-[1.2rem]'>Weddings</button>
                        </motion.li>
                        <motion.li 
                             initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:1,delay:0.5}}
                            className='border-black py-4 flex justify-center border-b-[0.1rem]'
                        >
                            <button onClick={() => handleCategorie('Fashion')} className='text-[1.2rem]'>Fashion</button>
                        </motion.li>
                        <motion.li 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:1,delay:0.6}}
                            className='py-4 flex justify-center'
                        >
                            <button onClick={() => handleCategorie('Pregnancy')} className='text-[1.2rem]'>Pregnancy</button>
                        </motion.li>
                    </ul>
                </motion.div>
            )

        }
        
    </div>
  )
}

export default SelectBoxSpecial