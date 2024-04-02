import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);

  // Simulate an expensive computation
  const squaredNumber = useMemo(() => {
    console.log('Calculating squared number...');
    return number * number;
  }, [number]); // Dependencies: Recompute if `number` changes

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-2">
        <label htmlFor="numberInput" className="block text-sm font-medium text-gray-700">Enter a number:</label>
        <input
          type="number"
          id="numberInput"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <h2 className="text-lg text-blue-600">{number} squared is {squaredNumber}</h2>
      {/* <button onClick={() => setIncrement((prevIncrement) => prevIncrement + 1)}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Increment (not related to calculation)
      </button>
      <p className="mt-2 text-sm text-gray-500">Increment count: {increment}</p> */}
    </div>
  );
}

export default ExpensiveComponent;
