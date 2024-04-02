import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducerSample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-sm mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Counter</h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium">Count: {state.count}</span>
            <div>
              <button 
                onClick={() => dispatch({ type: 'decrement' })}
                className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                -
              </button>
              <button 
                onClick={() => dispatch({ type: 'increment' })}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default UseReducerSample;