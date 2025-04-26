import React from 'react';
import { NavigationBar } from '../Organisms/NavigationBar';
import { Section } from '../Organisms/Section';

export const HomePage = () => {
    return (
        <div className="relative w-full min-h-screen bg-background flex flex-col items-center p-6">
        
            {/* Root container fixed to full screen */}
            <div className="fixed inset-0 bg-white p-6 flex flex-col items-center justify-start overflow-hidden">

                {/* Main Content */}
                <div className="w-full flex flex-col gap-6">

                {/* Navigation Bar - stays at top */}
                <div className="shrink-0">
                    <NavigationBar />
                </div>

                {/* Incident List Section - scrollable */}
                <div className="flex-1 overflow-y-auto max-h-full">
                    <div className="bg-white p-6 rounded shadow">
                        <Section />
                    </div>
                </div>

                </div>

            </div>

        </div>
    );
};




