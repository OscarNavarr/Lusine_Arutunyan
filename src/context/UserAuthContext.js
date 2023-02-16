import { createContext, useEffect, useState, useContext } from "react";
import {
    updateEmail,
    updatePassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState(""); 

    function updatingEmail(auth,email){
     
        const emailUpdate = updateEmail(auth.currentUser,email).then(() => {    
        return emailUpdate;
            
        }).catch((error) => {
            console.log(error);
        });
        
    };
    function updatingPassword(auth,password){

        const passwordUpdate = updatePassword(auth.currentUser,password).then(() => {    
        return passwordUpdate;

        }).catch((error) => {
            console.log(error);
        });

       
    };

    function handlesignOut(auth){
        return signOut(auth);
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return  <userAuthContext.Provider value={{user, updatingEmail, updatingPassword, handlesignOut, logIn}}>
                {children}
            </userAuthContext.Provider>

}

export function useUserAuth(){
    return useContext(userAuthContext);
}