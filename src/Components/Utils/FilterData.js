import incidents from "../Utils/RawData";

export const filterData = (severity) => {
    if (!Array.isArray(incidents)) return [];

    if (severity === "All") {
        return incidents;
    }
    return incidents.filter((incident) => incident.severity === severity);
};
