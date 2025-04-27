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

export const NavigationBar = () => {
    const { latestFlag, setLatestFlag, setSeverity } = useGetIncidents();

    return (
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
                    <DropdownMenuContent className="w-40 mt-2 rounded-md shadow-md border border-gray-200">
                        <DropdownMenuItem
                            className="hover:bg-gray-100 cursor-pointer"
                            onClick={() => setLatestFlag(true)}
                            disabled={latestFlag}
                        >
                            Latest
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            className="hover:bg-gray-100 cursor-pointer"
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
                    <DropdownMenuContent className="w-48 mt-2 rounded-md shadow-md border border-gray-200">
                        <DropdownMenuLabel className="text-gray-500 text-xs px-3 py-1">
                            Severity
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {["All", "High", "Medium", "Low"].map((level) => (
                            <DropdownMenuItem
                                key={level}
                                className="hover:bg-gray-100 cursor-pointer"
                                onClick={() => setSeverity(level)}
                            >
                                {level}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
};
