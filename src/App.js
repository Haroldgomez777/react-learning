// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';
import Learning from './components/Learning';
import UseEffectSample from './components/UseEffectSample';
import UseReducerSample from './components/UseReducerSample';
import TodoListComponent from './components/TodoListComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/useeffect" element={<UseEffectSample />} />
          <Route path="/usereducer" element={<UseReducerSample />} />
          <Route path="/todolist" element={<TodoListComponent />} />
          <Route path="/expenssive" element={<ExpensiveComponent />} />
          {/* Add more Route components for additional paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
