import React from 'react';
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
function Pages() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}
export default Pages;