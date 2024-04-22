// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

import Routing from './router/routing';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Outlet />
          <Routing />
      </div>
    </Router>
  );
}

export default App;
