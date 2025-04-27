import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import SearchBox from "../Molecules/SearchBox";
import useGetIncidents from "@/hooks/useGetIncidents";
import { AddIncidentModal } from "../Molecules/AddIncidentModal";
import { useState } from "react";

export const NavigationBar = () => {
    const { latestFlag, setLatestFlag, serverity, setSeverity } = useGetIncidents();

    const [ open, setOpen ] = useState(false);
    return (
        <>
            <AddIncidentModal open={open} setOpen={setOpen} />
            <div className="w-full bg-white shadow-lg p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Box */}
            <div className="w-full md:w-1/2">
                <SearchBox />
            </div>

            {/* Sort & Filter Buttons */}
            <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
                            Sort
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 mt-2 rounded-md shadow-lg border border-gray-200 bg-white text-gray-800 z-50">
                        <DropdownMenuItem
                            className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-200 rounded-md cursor-pointer"
                            onClick={() => setLatestFlag(true)}
                            disabled={latestFlag}
                        >
                            Latest
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-200 rounded-md cursor-pointer"
                            onClick={() => setLatestFlag(false)}
                            disabled={!latestFlag}
                        >
                            Oldest
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Filter Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
                            Filter
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 mt-2 rounded-md shadow-lg border border-gray-200 bg-white text-gray-800 z-50 m-10">
                        <DropdownMenuLabel className="text-gray-500 text-md border-b-2 px-3 py-1">
                            Severity Level
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {["All", "High", "Medium", "Low"].map((level) => (
                        <DropdownMenuItem
                            key={level}
                            className="px-4 py-2 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-200 rounded-md cursor-pointer"
                            onClick={() => setSeverity(level)}
                            disabled={serverity === level}
                        >
                            {level}
                        </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button
                    onClick={() => {
                        console.log('modal triggered');
                        setOpen(!open);
                    }}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
                >
                    + Add Incident
                </Button>
            </div>
            </div>
        </>
    );
};
