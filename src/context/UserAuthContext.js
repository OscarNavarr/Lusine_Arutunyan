import { createContext, useEffect, useState, useContext } from "react";
import {
    updateEmail,
    updatePassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from "../firebase";
import { uploadBytes } from "firebase/storage";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(""); 

    function updatingEmail(auth,email){
     
        return updateEmail(auth.currentUser,email);
            
    };
    function updatingPassword(auth,password){

        return updatePassword(auth.currentUser,password);       
    
    };
    
    // THIS FUNCTION IS FOR THE LOGIN PAGE
    function resetPassword(auth,email){

        return sendPasswordResetEmail(auth,email);

    }
    function verificationWithEmail(auth){
       
        return sendEmailVerification(auth.currentUser);
    
    };
    
    function handlesignOut(auth){
        return signOut(auth);
    };
    function logIn(email, password){
        
        return signInWithEmailAndPassword(auth, email, password);
        
    };
    
    function handleUploadImg(imageRef, img){

        return uploadBytes(imageRef, img);

    };
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return  <userAuthContext.Provider value={
        {user, 
        handleUploadImg,
        updatingEmail, 
        updatingPassword, 
        verificationWithEmail, 
        handlesignOut, 
        resetPassword, 
        logIn, 
        }}>
                {children}
        </userAuthContext.Provider>

}

export function useUserAuth(){
    return useContext(userAuthContext);
}