/ // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZjJ4fvx0G2MOgLgKWEYGfTxCXCQIbpe4",
  authDomain: "drugdex-5dd99.firebaseapp.com",
  projectId: "drugdex-5dd99",
  storageBucket: "drugdex-5dd99.appspot.com",
  messagingSenderId: "132477994595",
  appId: "1:132477994595:web:a658ad969f46a3d3d5da56",
  measurementId: "G-7N7DW0GXRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to search medicine
async function searchMedicine(event) {
    event.preventDefault(); // Prevent page refresh on form submit

    const searchInput = document.getElementById("searchInput").value.trim(); // Get the search term

    if (!searchInput) {
        alert("Please enter a medicine name!");
        return;
    }

    const medicinesRef = collection(db, "medicines"); // Your Firestore collection
    const q = query(medicinesRef, where("medicineName", "==", searchInput)); // Query to search by medicineName

    const querySnapshot = await getDocs(q); // Get the search results
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = ""; // Clear any previous results

    if (querySnapshot.empty) {
        searchResultsDiv.innerHTML = "<p>No medicine found with this name.</p>";
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        searchResultsDiv.innerHTML += `
            <div class="medicine-info">
                <h3>${data.medicineName}</h3>
                <p><strong>Composition:</strong> ${data.composition}</p>
                <p><strong>Uses:</strong> ${data.uses}</p>
                <p><strong>Side Effects:</strong> ${data.sideEffects}</p>
                <p><strong>Manufacturer:</strong> ${data.manufacturer}</p>
                <p><strong>Excellent Reviews:</strong> ${data.excellentReview}%</p>
                <p><strong>Average Reviews:</strong> ${data.averageReview}%</p>
                <p><strong>Poor Reviews:</strong> ${data.poorReview}%</p>
                <img src="${data.imageUrl}" alt="${data.medicineName}" style="width: 150px;">
            </div>
        `;
    });
}
