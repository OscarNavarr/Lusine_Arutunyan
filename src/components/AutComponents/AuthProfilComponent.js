// TODO: DECIR QUE SI NO QUIERE CAMBIAR EL EMAIL NO TIENE QUE HACERLO

// TODO: PONER EN LOS INPUTS DE PASSWORD UN ICONO DE UN OJO QUE ME PERMITA VER O DEJAR DE VER LA CONTRASEÑA A MI VOLUNTAD
// TODO: MEJORAR LA PARTE VISUAL DEL COMPONENTE DONDE SE MUESTRAN LOS ERROR (<ErrorMessages/>)
// user: unika@gmail.com    password:eterno
import React from 'react'
import { useState } from 'react'
import { useUserAuth } from '../../context/UserAuthContext';
import ErrorMessages from './ErrorMessages';
import { auth } from '../../firebase';

const AuthProfilComponent = () => {

    const { updatingEmail, updatingPassword } = useUserAuth();
    const { user } = useUserAuth();

    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    


    //EL VERDADERO OBJETIVO DE LA FUNCION AQUI DEBAJO ES QUE CAMBIE EL EMAIL Y LA CONTRASEÑA, NO QUE CREE UN NUEVO USUARIO

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
                            value={email && email}
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