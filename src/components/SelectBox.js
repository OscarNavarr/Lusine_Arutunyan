import React from 'react';

const SelectBox = (props) => {
   
    
    const handleChange = (e) => {
        const newValue = e.target.value;
        props.onValueChange(newValue);
    }
   
  return (
    <>
        <select disabled={props.loading ? 'disabled' : ''} onChange={handleChange} className='w-[10rem] h-[2rem] border-b-2 border-current'>
            <option value="" className='p-4 mb-3'>Categorie</option>
            <option value="Professionals" className='p-4 mb-3'>Professionals</option>
            <option value="Familiar" className='p-4 mb-3'>Familiar</option>
            <option value="Weddings" className='p-4 mb-3'>Weddings</option>
            <option value="Birthday" className='p-4 mb-3'>Birthday</option>
            <option value="Fashion" className='p-4 mb-3'>Fashion</option>
            <option value="Pregnancy" className='p-4 mb-3'>Pregnancy</option>
        </select>
    </>
  )
}

export default SelectBox