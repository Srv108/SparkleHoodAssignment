import React from 'react';
import { NavigationBar } from '../Organisms/NavigationBar';

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-start p-6">
        <div className="w-full max-w-4xl">
            
            {/* Navigation Bar */}
            <div className="mb-6">
                <NavigationBar />
            </div>

            {/* Placeholder for Incident list */}
            <div className="bg-white p-6 rounded shadow text-center text-gray-500">
                {/* You can map your incident list here later */}
                No incidents to display. Use the form to add one!
                
            </div>
        </div>
        </div>
    );
};
