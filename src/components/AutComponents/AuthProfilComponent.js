
// TODO: Mostrar un mensaje que me diga cuando se actualizó el email y el password correctamente
// TODO: Ahora recibo un email de verificacion en el login antes de acceder debo verificar que el email del usuario esté verificado sino dar un error

import React from 'react'
import { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import ErrorMessages from './ErrorMessages';
import { auth } from '../../firebase';

//icons
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AuthProfilComponent = () => {

    const { updatingEmail, updatingPassword, verificationWithEmail } = useUserAuth();
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    
    //Hooks for password inputs
    const [Type, setType] = useState('password');
    


    //EL VERDADERO OBJETIVO DE LA FUNCION AQUI DEBAJO ES QUE CAMBIE EL EMAIL Y LA CONTRASEÑA, NO QUE CREE UN NUEVO USUARIO
    const handleVisible = () =>{
        setVisible(true);
        setType('text');
    }
    const handleNotVisible = () =>{
        setVisible(false);
        setType('password');
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError("");
        /*
        Example of how will be the update email 
            if(email === ""){
                setEmail(user.email)
            }
        */
       if( password === confirmPassword){
            try {
                await updatingEmail(auth, email);
                await updatingPassword(auth, password);
                await verificationWithEmail(auth);
                
                navigate("/verification");
            } catch (error) {
                setError(error.message);
            }
        }else{
            setError("Passwords are not the same");
        }
       
    }
  return (
    <div className='w-[70%] mx-auto mt-[3rem]'>
        <p className='text-center text-[1.3rem]'>Change data of {user && user.email}</p>
        <p className='text-center mt-9'>If you do not want to change the email you can leave that field as it is.</p>
        
        {/*ESTO MUESTRA LOS ERRORES */}
        <div className='flex justify-center pt-7'>
            <ErrorMessages error={error}/>
        </div>

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
                        value={email && email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <br/>
                        
                    <div className='flex'>
                        <input 
                            type={Type} 
                            className='w-[20rem] h-[3rem] border-b-2 border-current mb-3' 
                            placeholder='new password' 
                            onChange={ (e) => setPassword(e.target.value)}
                        />
                        <FaEyeSlash 
                            className={`text-[1.5rem] my-auto ${visible ? 'hidden' : 'block'}`}
                            onClick={handleVisible}
                        />
                        <FaEye 
                            className={`text-[1.5rem] my-auto ${visible ? 'block' : 'hidden'}`}
                            onClick={handleNotVisible}
                        />
                    </div>

                    <div className='flex'>
                        <input 
                            type={Type} 
                            className='w-[20rem] h-[3rem] border-b-2 border-current mb-3' 
                            placeholder='Please repeat the password' 
                            onChange={ (e) => setConfirmPassword(e.target.value)}
                        />
                        <FaEyeSlash 
                            className={`text-[1.5rem] my-auto ${visible ? 'hidden' : 'block'}`}
                            onClick={handleVisible}
                        />
                        <FaEye 
                            className={`text-[1.5rem] my-auto ${visible ? 'block' : 'hidden'}`}
                            onClick={handleNotVisible}
                        />
                    </div>
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