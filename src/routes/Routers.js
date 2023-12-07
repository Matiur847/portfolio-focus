import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import MyOffers from '../pages/MyOffers';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/offers' element={<MyOffers />} />
        </Routes>
    );
};

export default Routers;