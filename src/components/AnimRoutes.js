import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import SubPortfolio from '../pages/subPages/SubPortfolio';

// import routes route & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Pricing from '../pages/Pricing';
import SubAbout from '../pages/subPages/SubAbout';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/subabout' element={<SubAbout />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/subportfolio' element={<SubPortfolio />} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
