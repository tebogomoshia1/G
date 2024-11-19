// Define pickup points with names and times
const pickupPoints = {
    1: [
        { name: 'Corner of Panorama and Marabou Road', time: '6:22' },
        { name: 'Corner of Kolgansstraat and Skimmerstraat', time: '6:30' },
    ],
    2: [
        { name: 'Corner of Reddersburg Street and Mafeking Drive', time: '6:25' },
        { name: 'Corner of Theuns van Niekerkstraat and Roosmarynstraat', time: '6:35' },
    ],
    3: [
        { name: 'Corner of Jasper Drive and Tieroog Street', time: '6:20' },
        { name: 'Corner of Louise Street and Von Willich Drive', time: '6:40' },
    ],
};

// Event listener for route change
document.getElementById('route').addEventListener('change', function() {
    const route = this.value;
    const pickupSelect = document.getElementById('pickup');
    pickupSelect.innerHTML = '<option value="">Select a pickup point</option>'; // Clear existing options

    // Populate pickup points based on selected route
    if(route && pickupPoints[route]) {
        pickupPoints[route].forEach(point => {
            const option = document.createElement('option');
            option.value = point.name;
            option.textContent = `${point.name} - ${point.time}`;
            pickupSelect.appendChild(option);
        });
    }
});

// Handle the form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const name = document.getElementById('name').value;
    const route = document.getElementById('route').value;
    const pickup = document.getElementById('pickup').value;

    // For now, just simulate a successful registration
    const confirmationMessage = `Successfully registered ${name} for route ${route} at ${pickup}.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    this.reset(); // Reset the form for new entry
    document.getElementById('pickup').innerHTML = '<option value="">Select a pickup point</option>'; // Clear pickup options
});