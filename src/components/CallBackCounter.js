import React, { useState, useCallback } from 'react';

// A simple child component that accepts a function prop `onIncrement`
const IncrementButton = React.memo(({ onIncrement }) => {
    console.log('IncrementButton re-rendered');
    return <button
        onClick={onIncrement}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Increment
    </button>;
});

// The parent component
const CallBackCounterComponent = () => {
    const [count, setCount] = useState(0);

    // Using useCallback to memoize the increment function
    // The function is recreated only when `setCount` changes, which is basically never,
    // since `setCount` comes from the `useState` hook and does not change.
    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, [setCount]);

    return (
        <div className="max-w-md mx-auto mt-10 text-center">
            <h1 className="text-2xl font-semibold">Count: {count}</h1>
            <div className="mt-4">
                <IncrementButton onIncrement={increment} />
            </div>
        </div>
    );
};

export default CallBackCounterComponent;
