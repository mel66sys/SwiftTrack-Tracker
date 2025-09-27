// This is the object you use to control the status messages.
// You can add, delete, or change any of the tracking numbers and their statuses.
const trackingData = {
    "123456789": "Out for Delivery: Expecting delivery between 2 PM and 4 PM today.",
    "987654321": "Delivered: Handed directly to the customer.",
    "111222333": "In Transit: Arrived at the regional sorting facility.",
    "444555666": "Label Created: Awaiting package pickup.",
    "777888999": "Shipment Delayed: Weather conditions have impacted transit time.",
    // ADD YOUR OWN NUMBERS AND STATUSES HERE!
    // Example: "000000000": "Custom Status Message You Control",
};

// Enables the user to press the Enter key instead of clicking the button
document.getElementById('trackingInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents page reload
        trackPackage();
    }
});


/**
 * Retrieves the tracking number, looks it up in the trackingData object, 
 * and displays the appropriate status message and style.
 */
function trackPackage() {
    // 1. Get the number the user typed in and clean it
    const inputNumber = document.getElementById('trackingInput').value.trim();
    
    // 2. Look up the status in your data list
    const status = trackingData[inputNumber];
    
    // 3. Select the area where the result will be shown
    const resultElement = document.getElementById('statusResult');
    
    // Reset status box to default appearance
    resultElement.textContent = "";
    resultElement.style.color = "#333";
    resultElement.style.backgroundColor = "#e0f2f7";
    resultElement.style.borderColor = "#b3e0ed";

    if (status) {
        // If the number IS found (SUCCESS)
        resultElement.textContent = "Status: " + status;
        
        // Dynamic styling based on keywords for a professional effect
        if (status.includes("Delivered")) {
            resultElement.style.color = "#28a745"; // Green text
            resultElement.style.backgroundColor = "#d4edda"; 
            resultElement.style.borderColor = "#28a745"; 
        } else if (status.includes("Out for Delivery")) {
            resultElement.style.color = "#ffc107"; // Orange text
            resultElement.style.backgroundColor = "#fff3cd";
            resultElement.style.borderColor = "#ffc107";
        } else if (status.includes("In Transit")) {
             resultElement.style.color = "#007bff"; // Blue text
             resultElement.style.backgroundColor = "#cfe2ff";
             resultElement.style.borderColor = "#007bff";
        } else if (status.includes("Delayed") || status.includes("Exception")) {
             resultElement.style.color = "#dc3545"; // Red text
             resultElement.style.backgroundColor = "#f8d7da";
             resultElement.style.borderColor = "#dc3545";
        } else {
            // Default status for 'Label Created' etc.
            resultElement.style.color = "#2193b0"; 
        }
        
    } else {
        // If the number is NOT found (ERROR)
        resultElement.textContent = "Error: Tracking number not recognized by the system.";
        resultElement.style.color = "#dc3545"; // Red text
        resultElement.style.backgroundColor = "#f8d7da";
        resultElement.style.borderColor = "#dc3545";
    }
}
