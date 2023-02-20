
// TODO: Si el usuario actualiza la contraseña pero no el email, no hace falta validar el email y redirigir al usaurio a la siguiente pagina.DEBO ARREGLAR ESTO
// SOLO CUANDO SE CAMBIA EL EMAIL SE DEBE REDIRIGIR AL USUARIO A LA PAGINA DE VERIFICACION Y ENVIARLE UN EMAIL 

import React from 'react'
import { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import ErrorMessages from './ErrorMessages';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

//icons
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import CorrectMessages from './CorrectMessages';

const AuthProfilComponent = () => {

    const { updatingEmail, updatingPassword, verificationWithEmail } = useUserAuth();
    const { user } = useUserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [correct, sentCorrect] = useState("");
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
        const promise = [];


        if(user.email !== email && password === confirmPassword){
            try {
                
                promise.push(await updatingEmail(auth, email));
                promise.push(await updatingPassword(auth, password));
                
                Promise.all(promise)
                .then(() => {
                     verificationWithEmail(auth);
                     setType('password');     
                     navigate("/verification",{state:'',replace:true});
                })
                .catch(() => {
                     setError('Failed to update account')
                })
            } catch (error) {
                setError(error.message);
            }
        }else if(password !== confirmPassword){
            setError("Passwords are not the same");
        }
        if( user.email === email && password === confirmPassword){
            try {
                await updatingPassword(auth, password);
                setType('password');
                sentCorrect("Your password has been successfully updated!");
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
            <CorrectMessages message={correct} />
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