import './App.css';
import './contents/slide.css';
import './contents/clubcard.css';

import React from 'react';
import Header from './components/Header';
import Popupimage from "./contents/Popupimage";
import Slide from "./contents/Slide";
import Clubcard from './contents/Clubcard';
import Webdesign from './contents/Webdesign';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" id="style-1">
      <div className="warp-app">
            <Header/>
            <Routes>
              <Route exact path="/" element={<Popupimage/>}/>
              <Route path="/popupimage" element={<Popupimage/>}/>
              <Route path="/slide" element={<Slide/>}/>
              <Route path="/clubcard" element={<Clubcard/>}/>
              <Route path="/webdesign" element={<Webdesign/>}/>
            </Routes>
      </div>
    </div>
    
  );
}

export default App;
