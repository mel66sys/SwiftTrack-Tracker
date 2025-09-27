// This is where you define your control! 
// To change a status, just edit the text on the right side.
const trackingData = {
    "123456789": "Out for Delivery: Expecting delivery between 2 PM and 4 PM today.",
    "987654321": "Delivered: Handed directly to the customer.",
    "111222333": "In Transit: Arrived at the regional sorting facility.",
    "444555666": "Label Created: Awaiting package pickup.",
    // ADD YOUR OWN NUMBERS AND STATUSES HERE!
    // Example: "000000000": "Custom Status Message You Control",
};

function trackPackage() {
    // 1. Get the number the user typed in and remove any extra spaces
    const inputNumber = document.getElementById('trackingInput').value.trim();
    
    // 2. Look up the status in your data list
    const status = trackingData[inputNumber];
    
    // 3. Select the area where the result will be shown
    const resultElement = document.getElementById('statusResult');
    
    // Clear previous status and reset default style
    resultElement.textContent = "";
    resultElement.style.color = "#333"; // Default text color
    resultElement.style.backgroundColor = "#e0f2f7"; // Default result background
    resultElement.style.borderColor = "#b3e0ed"; // Default border color

    if (status) {
        // If the number IS found in our list
        resultElement.textContent = "Status: " + status;
        
        // Change the color and background based on the status for a nice effect
        if (status.includes("Delivered")) {
            resultElement.style.color = "#28a745"; // Dark green text
            resultElement.style.backgroundColor = "#d4edda"; // Light green background
            resultElement.style.borderColor = "#28a745"; // Green border
        } else if (status.includes("Out for Delivery")) {
            resultElement.style.color = "#ffc107"; // Dark orange text
            resultElement.style.backgroundColor = "#fff3cd"; // Light orange background
            resultElement.style.borderColor = "#ffc107"; // Orange border
        } else if (status.includes("In Transit")) {
             resultElement.style.color = "#007bff"; // Blue text
             resultElement.style.backgroundColor = "#cfe2ff"; // Light blue background
             resultElement.style.borderColor = "#007bff"; // Blue border
        } else {
            resultElement.style.color = "#2193b0"; // Default company blue
            resultElement.style.backgroundColor = "#e0f2f7"; // Default result background
            resultElement.style.borderColor = "#b3e0ed"; // Default border color
        }
        
    } else {
        // If the number is NOT found
        resultElement.textContent = "Error: Tracking number not recognized by the system.";
        resultElement.style.color = "#dc3545"; // Red text
        resultElement.style.backgroundColor = "#f8d7da"; // Light red background
        resultElement.style.borderColor = "#dc3545"; // Red border
    }
}// --- NEW CODE FOR BETTER USER EXPERIENCE ---

document.getElementById('trackingInput').addEventListener('keypress', function(event) {
    // Check if the key pressed is the 'Enter' key
    if (event.key === 'Enter') {
        // Prevent the default form submission (which reloads the page)
        event.preventDefault(); 
        // Call the tracking function
        trackPackage();
    }
});

// --- EXISTING trackPackage() FUNCTION FOLLOWS ---
// (No changes to the function itself are needed)