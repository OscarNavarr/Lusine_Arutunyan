import React from 'react';

// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Authorized Pages
import Login from './pages/AuthPages/Login';
import {AuthDashboard} from './pages/AuthPages';

// import Authorized Components
import { AutViewImageComponent, AuthProfilComponent, AuthPublicationsComponent } from './components/AutComponents';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/AutComponents/ProtectedRoute';
import UserVerification from './pages/AuthPages/UserVerification';
import Home from './pages/Home';



const App = () => {
  return (
  
    <>
     
     <UserAuthContextProvider>
        <Router>
          {/**
           * Auth Routes
           */}
            <Routes >
              <Route path='/' element={<Home/>}/>

              <Route path='/login' element={<Login/>} />
              
              <Route path='/dashboard' element={
                <ProtectedRoute>
                  <AuthDashboard/>
                </ProtectedRoute>
              }>
                <Route path='images' element={<AutViewImageComponent/>}/>
                <Route path='publications' element={<AuthPublicationsComponent/>}/>
                <Route path='profile' element={<AuthProfilComponent/>}/>
              </Route>
              <Route path='/verification' element={
              <ProtectedRoute>
                <UserVerification/>
              </ProtectedRoute>
              }/>
            </Routes>
        </Router>
      </UserAuthContextProvider>
 
    </>
  );
};

export default App;
