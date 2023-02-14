
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuzIl1me4MYFCzEGnrCfV3VV8qDPyN2Fg",
  authDomain: "lusine-arutunyan.firebaseapp.com",
  projectId: "lusine-arutunyan",
  storageBucket: "lusine-arutunyan.appspot.com",
  messagingSenderId: "499027237821",
  appId: "1:499027237821:web:115aaadc521416a59e50d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export default app;