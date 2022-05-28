import React from 'react';
import './assets/styles/font.css';
import './assets/styles/App.css';
import PackagesPages from './pages/PackagesPage';
import OptionsPages from './pages/OptionsPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id='app-layout'>
      <Routes>
        <Route path="/" element={<PackagesPages/>} />
        <Route path="/options" element={<OptionsPages/>} />
      </Routes>
      
    </div>
  );
}

export default App;
