import useGetIncidents from "@/hooks/useGetIncidents";
import React, { useState } from "react";
import { updateData } from "../Utils/updateData";

export const AddIncidentModal = ({ open, setOpen }) => {


    const [ newIncidentDetails, setNewIncidentsDetails ] = useState({
        title: null,
        severity: null,
        description: null,
    });

    const { incidents, setIncidents } = useGetIncidents();

    if(!open) return;

    const handleSubmit = (e) => {
        e.preventDefault();

        /* to genrate current date and time */
        const currentTime = new Date().toISOString();

        /* to generate unique id */
        const uniqueID = Date.now();

        // Create the new incident object
        const newIncident = {
            ...newIncidentDetails,
            id: uniqueID,
            reported_at: currentTime,
        };

        console.log('new incident report',newIncident);

        /* update the database when new report comes */
        setIncidents({
            newIncident,
            ...incidents
        })

        /* also push this data to the original raw data */
        updateData(newIncident);

        setOpen(false);
        setNewIncidentsDetails({
            title: null,
            severity: null,
            description: null
        })
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 rounded-md">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative animate-fadeIn">
                {/* Close button */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 rounded-xl right-3 text-gray-600 hover:text-gray-900 text-3xl"
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    Report New Incident
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="incidentTitle"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Incident Title
                        </label>
                        <input
                            type="text"
                            id="incidentTitle"
                            placeholder="Enter Incident Title"
                            value={newIncidentDetails.title}
                            onChange={(e) => {
                                setNewIncidentsDetails((prevDetails) => ({
                                    ...prevDetails,title: e.target.value
                                }))
                            }}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-md placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="severity"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Severity Level
                        </label>
                        <select
                            id="severity"
                            value={newIncidentDetails.severity}
                            onChange={(e) => {
                                setNewIncidentsDetails((prevDetails) => ({
                                    ...prevDetails,severity: e.target.value
                                }))
                            }}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-md"
                        >
                            <option value="">Select Severity</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div>
                        <label
                            htmlFor="description"
                            className="block text-gray-700 text-sm font-medium mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter Incident Description"
                            value={newIncidentDetails.description}
                            onChange={(e) => {
                                setNewIncidentsDetails((prevDetails) => ({
                                    ...prevDetails,description: e.target.value
                                }))
                            }}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none text-sm placeholder-gray-400"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
                            onSubmit={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
