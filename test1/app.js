// Initialize Firestore
const db = firebase.firestore();

// Function to render search results
function displayResults(medicines) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results

    medicines.forEach((medicine) => {
        const medicineData = medicine.data();
        const medicineDiv = document.createElement('div');

        // Displaying the medicine details
        medicineDiv.innerHTML = `
            <h3>${medicineData.medicineName}</h3>
            <p><strong>Composition:</strong> ${medicineData.composition}</p>
            <p><strong>Uses:</strong> ${medicineData.uses}</p>
            <p><strong>Side Effects:</strong> ${medicineData.sideEffects}</p>
            <p><strong>Manufacturer:</strong> ${medicineData.manufacturer}</p>
            <p><strong>Reviews:</strong> Excellent - ${medicineData.excellentReview}, Average - ${medicineData.averageReview}, Poor - ${medicineData.poorReview}</p>
            <img src="${medicineData.imageUrl}" alt="${medicineData.medicineName}" width="100" />
        `;

        resultsDiv.appendChild(medicineDiv);
    });
}

// Attach click event listener to the button after the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', async () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (!searchInput) return;

        // Query Firestore database for medicines containing the search term
        const medicinesRef = db.collection('medicines');
        const snapshot = await medicinesRef.where('medicineName', '>=', searchInput)
                                           .where('medicineName', '<=', searchInput + '\uf8ff')
                                           .get();

        if (snapshot.empty) {
            document.getElementById('results').innerText = "No results found.";
        } else {
            displayResults(snapshot.docs);
        }
    });
});
