import React, { useContext } from 'react';
// import components
import AnimRoutes from './components/AnimRoutes';
// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import cursor context
import { CursorContext } from './context/CursorContext';
// import Authorized Pages
import Login from './pages/AuthPages/Login';
import {AuthDashboard} from './pages/AuthPages';
// import Authorized Components
import { AuthEmailComponent, AuthProfilComponent, AuthPublicationsComponent } from './components/AutComponents';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/AutComponents/ProtectedRoute';
import UserVerification from './pages/AuthPages/UserVerification';



const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
     
      <Router>
        <AnimRoutes />

        {/**
         * Auth Routes
         */}
        <UserAuthContextProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <AuthDashboard/>
              </ProtectedRoute>
            }>
              <Route path='emails' element={<AuthEmailComponent/>}/>
              <Route path='publications' element={<AuthPublicationsComponent/>}/>
              <Route path='profile' element={<AuthProfilComponent/>}/>
            </Route>
            <Route path='/verification' element={
            <ProtectedRoute>
              <UserVerification/>
            </ProtectedRoute>
            }/>
          </Routes>
        </UserAuthContextProvider>
      </Router>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      ></motion.div>
    </>
  );
};

export default App;
