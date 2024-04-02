import { useState } from 'react'
import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
// import Navbar from './componentInfo/Navbar';
import GeneralInfo from './componentInfo/Information'; // Ajusta la ruta de importación según la estructura de tus archivos
import GenerarMenu from './componentInfo/GenerarMenu';
import MenuItem from './componentInfo/MenuItem';


function App() {
 return(
  <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<GeneralInfo/>} />
        <Route path='/menu' element={<MenuItem/>} />
        </Routes>
      </BrowserRouter>
    </div>
 )
}

export default App;
