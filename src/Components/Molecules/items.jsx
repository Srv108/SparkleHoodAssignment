import { EllipsisVertical } from "lucide-react"

export const Items = ({
    title,
    time,
    severity
    // description,
}) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-md transition-all">
    
            {/* Title of the Incident */}
            <div className="text-lg font-semibold text-gray-800">
                {title}
            </div>
    
            {/* Reported Date of the Incident */}
            <div className="text-sm text-gray-500">
                {time}
            </div>
    
            {/* severity */}
            <div className="text-sm text-gray-500">
                {severity}
            </div>

            {/* Button to see Description */}
            <div>
                <EllipsisVertical
                    className=""
                />
            </div>
            
        </div>
    )
}
