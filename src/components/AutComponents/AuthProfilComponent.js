// TODO: ME FALTA QUE EL SITIO VALIDE SI LAS CONTRASEÑAS SON IGUALES 
// TODO: ME FALTA QUE EL SITIO MUESTRE LOS ERRORES DE CONTRASEÑA Y CUALQUIER OTRO ERROR QUE PUEDA OCURRIR 
// TODO: DECIR QUE SI NO QUIERE CAMBIAR EL EMAIL NO TIENE QUE HACERLO

import React from 'react'
import { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import ErrorMessages from './ErrorMessages';

const AuthProfilComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    

    const { signUp } = useUserAuth();
    const { user } = useUserAuth();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError("");
        /*
        Example of how will be the update email 
            if(email === ""){
                setEmail(user.email)
            }
        */
        try {
            await signUp(email, password);
        } catch (error) {
            setError(error.message);
        }
       
    }
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
        <p className='text-center text-[1.3rem]'>Change data of {user && user.email}</p>
            
            {/*ESTO MUESTRA LOS ERRORES */}
            <ErrorMessages error={error}/>

            <div className='pt-[3rem] flex justify-center'>
                <div className='mt-9 mr-5'>
                    <p className='pt-[0.70rem]'>New email:</p>
                    <p className='pt-[2.3rem]'>New password:</p>
                    <p className='pt-[2.2rem]'>Confirm the password:</p>
                </div>
                <div>
                    <form className='mt-9' onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            className='w-[20rem] h-[3rem] border-b-2 border-current mb-3'  
                            placeholder={user && user.email}
                            onChange={ (e) => setEmail(e.target.value)}
                        />
                        <br/>

                        <input 
                            type='password' 
                            className='w-[20rem] h-[3rem] border-b-2 border-current mb-3' 
                            placeholder='new password' 
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                        <br/>

                        <input 
                            type='password' 
                            className='w-[20rem] h-[3rem] border-b-2 border-current' 
                            placeholder='confirm the password' 
                            onChange={ (e) => setConfirmPassword(e.target.value)}
                        />
                        <div className='flex justify-center mt-[3rem]'>
                            <button 
                                className='bg-black text-white w-[7rem] h-[3rem]'
                                type='Submit'
                            >
                            Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default AuthProfilComponent