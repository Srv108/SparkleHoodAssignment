import list from "./RawData";

export const updateData = (newReport) => {

    console.log("update data function triggered");

    // Make sure newReport has the necessary properties.
    if (!newReport || !newReport.id || !newReport.reported_at) {
        console.error("Invalid report data.");
        return;
    }

    // Add the new report to the original `list` array.
    list.push(newReport);

    // Optionally log the updated list to confirm the update
    console.log("Updated list:", list);
};

