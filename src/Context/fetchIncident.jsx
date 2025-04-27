import { SortIncidentsByLatest, SortIncidentsByOldest } from "@/Components/Utils/SortIncidents";
import { createContext, useEffect, useState } from "react";

const IncidentContext = createContext();

export const IncidentContextProvider = ({ children }) => {

    const [ incidents, setIncidents ] = useState([]);
    const [ latestFlag, setLatestFlag ] = useState(false);
    const [ serverity, setSeverity ] = useState('All');

    useEffect(() => {
        if(latestFlag){
            const newIncidents = SortIncidentsByLatest(incidents);
            if(newIncidents) setIncidents(newIncidents);
        }
        if(!latestFlag){
            const newIncidents = SortIncidentsByOldest(incidents);
            if(newIncidents) setIncidents(newIncidents);
        }
    },[ latestFlag ])

    return (
        <IncidentContext.Provider
            value={{ 
                incidents, 
                setIncidents,
                latestFlag,
                setLatestFlag,
                serverity,
                setSeverity 
            }}
        >
            { children }
        </IncidentContext.Provider>
    )
}

export default IncidentContext;