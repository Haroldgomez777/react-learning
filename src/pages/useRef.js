import React, { useRef } from 'react';

function FocusInputComponent() {
    const inputRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="p-4 max-w-sm mx-auto">
            <input 
                ref={inputRef} 
                type="text" 
                placeholder="Click button to focus" 
                className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button 
                onClick={focusInput} 
                className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Focus the input
            </button>
        </div>
    );
}

export default FocusInputComponent;
