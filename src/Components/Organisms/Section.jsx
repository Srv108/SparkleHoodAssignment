import { Items } from "../Molecules/items";
import { ScrollArea } from "../ui/scroll-area";
import list from "../../lib/RawData";
import { useEffect, useState } from "react";

export const Section = () => {

    const [ data, setData ] = useState([]);
    
    useEffect(() => {
        console.log(list);
        setData(list);
    },[]);

    return (
        <div className="w-full flex flex-col gap-6 p-4">

        {/* Incident List */}
        <div className="bg-white rounded-lg shadow p-4">
            <ScrollArea className="h-[500px]">
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className="border p-4 my-2 rounded shadow">
                            <Items
                                title={item.title}
                                time={item.reported_at}
                                severity={item.severity}
                            />
                        </div>
                    )
                })
            }

            {/* You can render multiple <Items /> or map over data */}
            </ScrollArea>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition">
                Load More
            </button>
        </div>
        
        </div>
    );
}
