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
    <div>
        <div className='flex relative border-b-[0.1rem] border-black'>
            <button 
                onClick={() => setVisible(!visible)}
                className='mb-1 flex'>
                {categorie}
                <AiOutlineDown className='ml-5 pt-1 mt-1 w-[1rem] h-[1rem]'/>
            </button>
        </div>
        {
            visible && (
                <motion.div 

                    className='absolute top-[10rem] left-[4rem] bg-[RGBA(255,255,255,0.9)] w-[12rem] rounded-lg'
                >
                    <ul className=''> 
                        <li className='border-black  py-4 flex justify-center border-b-[0.1rem] '>
                            <button onClick={() => handleCategorie('Professionals')}  className='text-[1.2rem]'>Professionals</button>
                        </li>
                        <li className='border-black py-4 flex justify-center border-b-[0.1rem] '>
                            <button onClick={() => handleCategorie('Familiar')} className='text-[1.2rem]'>Familiar</button>
                        </li>
                        <li className='border-black py-4 flex justify-center border-b-[0.1rem] '>
                            <button onClick={() => handleCategorie('Weddings')} className='text-[1.2rem]'>Weddings</button>
                        </li>
                        <li className='border-black py-4 flex justify-center border-b-[0.1rem] '>
                            <button onClick={() => handleCategorie('Fashion')} className='text-[1.2rem]'>Fashion</button>
                        </li>
                        <li className='py-4 flex justify-center'>
                            <button onClick={() => handleCategorie('Pregnancy')} className='text-[1.2rem]'>Pregnancy</button>
                        </li>
                    </ul>
                </motion.div>
            )

        }
        
    </div>
  )
}

export default SelectBoxSpecial