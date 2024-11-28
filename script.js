function searchMedicine() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) {
      alert('Please enter a search term.');
      return;
  }
  // Redirect to results.html with the search query as a URL parameter
  window.location.href = `results1.html?medicine=${encodeURIComponent(query)}`;
}
