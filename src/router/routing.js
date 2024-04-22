// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import '../App.css';
import {
    Learning,
    UseEffectSample,
    UseReducerSample,
    TodoListComponent,
    ExpensiveComponent,
    CallBackCounterComponent,
    FocusInputComponent,
    Homepage,
    About,
    Contact
} from '../pages'


const Routing = () => {
    return (

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learning />} />
            <Route path="/useeffect" element={<UseEffectSample />} />
            <Route path="/usereducer" element={<UseReducerSample />} />
            <Route path="/todolist" element={<TodoListComponent />} />
            <Route path="/expenssive" element={<ExpensiveComponent />} />
            <Route path="/callbackcounter" element={<CallBackCounterComponent />} />
            <Route path="/useref" element={<FocusInputComponent />} />

            {/* Add more Route components for additional paths */}
        </Routes>
    );
}

export default Routing;
