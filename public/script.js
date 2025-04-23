function search() {
    const query = document.getElementById("searchBox").value.trim();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (!query) {
        resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(res => res.json())
        .then(data => {
            if (data.length === 0) {
                resultsDiv.innerHTML = "<p>No results found.</p>";
            } else {
                data.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "result-item";
                    div.innerHTML = `<h3>${item.title}</h3><img src="${item.url}" alt="${item.title}">`;
                    resultsDiv.appendChild(div);
                });
            }
        })
        .catch(err => {
            console.error('Search failed:', err);
            resultsDiv.innerHTML = "<p>Something went wrong.</p>";
        });
}
