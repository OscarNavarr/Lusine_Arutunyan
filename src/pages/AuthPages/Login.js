// TODO: ME FALTA QUE EL SITIO VALIDE SI LAS CONTRASEÑAS SON IGUALES 
// TODO: ME FALTA QUE EL SITIO MUESTRE LOS ERRORES DE CONTRASEÑA Y CUALQUIER OTRO ERROR QUE PUEDA OCURRIR 

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessages from '../../components/AutComponents/ErrorMessages';
import { useUserAuth } from '../../context/UserAuthContext';

//icons
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);
    const [Type, setType] = useState('password');
    const { user } = useUserAuth();

    const { logIn } = useUserAuth();
    const navigate = useNavigate();

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
     
        try {
            await logIn(email, password);
            if (user.emailVerified) {
              setType('password');
              navigate("/dashboard");
            } else {
              setError('The email is not verified, please check your email and look for the email we sent you with a verification link');
            }
           
        } catch (error) {
            setError(error.message);
        }
       
    }
  return (
    <div className='pt-[14rem] flex justify-center items-center'>
        <div>
            <h2 className='h1 text-[3rem] text-center'>Login</h2>

            <ErrorMessages error={error}/>

            <form className='mt-9' onSubmit={handleSubmit}>
                <input 
                  type='text' 
                  className='w-[20rem] h-[3rem] border-b-2 border-current mb-3'  
                  placeholder='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <div className='flex'>
                  <input 
                    type={Type}  
                    className='w-[20rem] h-[3rem] border-b-2 border-current' 
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
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
                
                <div className='flex justify-center'>
                    <button className='bg-black text-white w-[7rem] h-[3rem] mt-9' type='Submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login