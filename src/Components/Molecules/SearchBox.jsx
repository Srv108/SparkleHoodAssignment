import React, { useState, useEffect } from 'react';

const SearchBox = ({ onSearch, delay = 300 }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            // onSearch(input);
            console.log("input coming from the search bar",input);
        }, delay);

        return () => clearTimeout(handler);
    }, [input, delay, onSearch]);

    return (
        <input
            type="text"
            placeholder="Search by title..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-2 border rounded w-full max-w-md"
        />
    );
};

export default SearchBox;
