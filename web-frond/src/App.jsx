import { useState } from 'react'
import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './componentInfo/Navbar';
import GeneralInfo from './componentInfo/Information'; // Ajusta la ruta de importación según la estructura de tus archivos
import Experiences from './componentInfo/experiencias';


function App() {
 return(
  <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<GeneralInfo/>} />
        <Route path="/experiencias" element={<Experiences/>} />
        </Routes>
        </BrowserRouter>
    </div>
 )
}

export default App;
