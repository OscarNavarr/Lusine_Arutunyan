// Quitar el StrictMode cuando termine el sitio

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import cursor context provider
import CursorProvider from './context/CursorContext';
import { UserAuthContextProvider } from './context/UserAuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserAuthContextProvider>
    <CursorProvider>
        <App/> 
    </CursorProvider>
  </UserAuthContextProvider>
);
