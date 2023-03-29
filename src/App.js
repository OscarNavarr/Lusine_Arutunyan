import React from 'react';

// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Authorized Pages
import Login from './views/AuthViews/Login';
import {AuthDashboard} from './views/AuthViews';

// import Authorized Components
import { AutViewImageComponent, AuthProfilComponent, AuthPublicationsComponent } from './components/AutComponents';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/AutComponents/ProtectedRoute';
import UserVerification from './views/AuthViews/UserVerification';
import MainPage from './pages/MainPage';
import { SubPortfolio } from './views';



const App = () => {
  return (
  
    <>
     
     <UserAuthContextProvider>
        <Router>
          {/**
           * Auth Routes
           */}
            <Routes >
              <Route path='/' element={<MainPage/>}/>

              <Route path='/login' element={<Login/>} />
              <Route path='/porfolio' element={<SubPortfolio/>} />
              
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
