import data from "./RawData"

export function searchData(inputString) {
    console.log('search data func triggered');
    if (!inputString.trim()) return data;

    const lowerKeyword = inputString.toLowerCase();

    const newData =  data.filter((item) => 
        item.title.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword) ||
        item.severity.toLowerCase().includes(lowerKeyword)
    );
    console.log("new data is ", newData);
    return newData
}