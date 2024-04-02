// src/components/HomePage.js
import React from 'react';
import { useState } from 'react';
const Learning = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" value={inputValue} onChange={handleInputChange} className="form-input" />
                <input type="submit" value="Submit" className="form-submit" />
            </form>
            {submittedValue && <h1 className="submitted-value">You submitted: {submittedValue}</h1>}
        </div>
    );
};

export default Learning;
