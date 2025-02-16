import pkg from './backend/perplexity.js';
const getAgriculturalReport = pkg;

(async () => {
    const location = "San Antonio, Texas, United States"; 
    const range = 20; 

    console.log("Fetching agricultural climate report...");
    const report = await getAgriculturalReport(location, range);

    if (report) {
        console.log("Agricultural Report:", report);
    } else {
        console.log("Failed to retrieve the report.");
    }
})();