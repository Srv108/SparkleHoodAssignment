import useGetIncidents from "@/hooks/useGetIncidents";
import { Items } from "../Molecules/items";
import { ScrollArea } from "../ui/scroll-area";
import list from "../Utils/RawData";
import { useEffect, useState } from "react";
import { SortIncidentsByLatest } from "../Utils/SortIncidents";

export const Section = () => {
    const [data, setData] = useState([]);
    const { incidents } = useGetIncidents();

    useEffect(() => {
        console.log("Updated incidents: ", incidents);
        setData(incidents.length ? incidents : list); // fallback to list if empty
    }, [incidents]);

    return (
        <div className="w-full flex flex-col gap-6 p-4">

        {/* Scrollable Incident List */}
        <ScrollArea className="h-[550px] bg-white rounded-lg shadow p-4">
            <div className="flex flex-col gap-2">
            {data.map((item) => (
                <div
                    key={item.id}
                    className=" gap-4 bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-all"
                >
                    <Items
                        title={item.title}
                        time={item.reported_at}
                        severity={item.severity}
                        description={item.description}
                    />
                </div>
            ))}
            </div>
        </ScrollArea>

        </div>
    );
};
