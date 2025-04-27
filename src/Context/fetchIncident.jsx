import { filterData } from "@/Components/Utils/FilterData";
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

    useEffect(() => {
        console.log('severity level is ',serverity);
        if(serverity) {
            const newFilteredIncidents = filterData(serverity);
            if(newFilteredIncidents) setIncidents(newFilteredIncidents);
        }
    },[ serverity ])

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