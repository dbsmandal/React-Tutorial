import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar  from './Component/Navbar/Navbar';
import Home from "./Component/Pages/Home"
import About from "./Component/Pages/About"
import Error from "./Component/Pages/Error"


function App() {
  return (
  <>
  <div className="apps">
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/*' element={<Error/>}/>



  </Routes>
  </BrowserRouter>
  </div>
 
 
  </>
  );
}

export default App;
