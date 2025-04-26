import useGetIncidents from '@/hooks/useGetIncidents';
import React, { useState, useEffect } from 'react';
import { searchData } from '../Utils/searchData';

const SearchBox = ({ delay = 300 }) => {
    const [input, setInput] = useState('');
    const { setIncidents } = useGetIncidents();

    
    useEffect(() => {
        const handler = setTimeout(() => {
            const newData = searchData(input);
            console.log("input coming from the search bar",newData);

            /* set new data to the array */
            setIncidents(newData);
        }, delay);

        return () => clearTimeout(handler);
    }, [ input, delay ]);

    
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
