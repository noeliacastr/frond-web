import { useState } from 'react'
import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GeneralInfo from './componentInfo/Information';
import Experiences from './componentInfo/experiencias';
import RatingBox from './componentInfo/RatingBox';
import MenuItem from './componentInfo/MenuItem';
import GenerarMenu from './componentInfo/GenerarMenu';
import Footer from './componentInfo/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralInfo />} />
          <Route path='/menu' element={<MenuItem/>} />
          <Route path='/experiencias' element={
            <div>
              <Experiences />
              <RatingBox />
              <Footer/>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
