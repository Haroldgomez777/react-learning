import React, { useState, useEffect } from 'react';

function FormFetchDataComponent() {
    const [postId, setPostId] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!postId) return;
        const fetchData = async () => {
            setLoading(true);
            setData(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                if (!response.ok) throw new Error('Post not found');
                
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Failed to fetch:', error);
                setData({ error: error.message });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [postId]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostId(inputValue);
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Fetch Post Data</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter post ID (1-100)"
                    className="border border-gray-300 p-2 rounded-md w-full mb-2"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Fetch Post
                </button>
            </form>
            {loading && <p className="text-center">Loading...</p>}
            {data && (
                <div className="bg-gray-100 p-4 rounded-md">
                    {data.error ? (
                        <p className="text-red-500">{data.error}</p>
                    ) : (
                        <>
                            <h2 className="text-xl font-semibold">{data.title}</h2>
                            <p className="mt-2">{data.body}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default FormFetchDataComponent;
