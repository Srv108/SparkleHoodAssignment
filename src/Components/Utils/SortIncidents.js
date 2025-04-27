/* sort incident in ascending order by time */
export const SortIncidentsByOldest = (incidents) => {
    console.log("oldest button gets trigerred");
    if (incidents.length === 0) {
        return { oldest: null, latest: null };
    }

    const newIncidents = [...incidents].sort((a, b) =>
        new Date(b.reported_at) - new Date(a.reported_at)
    );

    return newIncidents;
}

/* sort incident in decreasing order by time */
export const SortIncidentsByLatest = (incidents) => {
    console.log("latest button gets trigerred");
    if (incidents.length === 0) {
        return { oldest: null, latest: null };
    }

    const newIncidents = [...incidents].sort((a, b) =>
        new Date(b.reported_at) - new Date(a.reported_at)
    );

    return newIncidents;
}