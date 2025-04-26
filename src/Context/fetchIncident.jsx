import { createContext, useState } from "react";

const IncidentContext = createContext();

export const IncidentContextProvider = ({ children }) => {

    const [ incidents, setIncidents ] = useState([]);

    return (
        <IncidentContext.Provider
            value={{ incidents, setIncidents }}
        >
            { children }
        </IncidentContext.Provider>
    )
}

export default IncidentContext;