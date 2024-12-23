import React, { useEffect, useState } from 'react';
import './index.css'; // Path to your CSS file
import Home from './components/Home'
import Course from './components/Course';
import Signup from './components/homes/Signup'
import{ Route, Routes } from "react-router-dom"
import Contacts from "./components/Contacts"
function App() {
  
  return (
    <div className='overflow-x-hidden'>
 {/* <Home/>
 <Course/> */}
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/course' element={<Course/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/contact' element={<Contacts/>}/>
 </Routes>
 
    </div>
  );
}

export default App;
