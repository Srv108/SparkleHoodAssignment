import { useState } from "react";
import { formatDateTime } from "../Utils/DateFormat";

export const Items = ({ title, time, severity, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const severityStyle = {
        Low: "bg-teal-100 text-teal-800 border-teal-500",
        Medium: "bg-yellow-100 text-yellow-800 border-yellow-500",
        High: "bg-red-100 text-red-800 border-red-500",
    };

    return (
        <div className="col-span-full">
        <div className="grid grid-cols-[2fr_1fr_auto] items-center gap-4">
            {/* Title */}
            <div className="text-base text-left font-medium text-gray-800 truncate">
                {title}
            </div>

            {/* Severity badge */}
            <div
            className={`text-sm px-3 py-1 rounded-md shadow-sm w-[100px] text-center ${
                severityStyle[severity] || "bg-gray-100 text-gray-800 border-gray-300"
            }`}
            >
                {severity}
            </div>

            {/* Toggle Details Button */}
            <div className="flex items-center justify-end text-sm text-blue-600 gap-5">
                <button
                    className="text-sm bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded"
                >
                    Show Time
                </button>
                <button
                    className="hover:underline"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? "Hide Details" : "Show Details"}
                </button>
            </div>
        </div>

        {/* Expandable details */}
        {isOpen && (
            <div className="mt-4 text-left bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700">
                <p><strong>Description:</strong> {description || "No additional details provided."}</p>
                <p className="mt-2"><strong>Reported at:</strong> {formatDateTime(time)}</p>
            </div>
        )}
        </div>
    );
};
