document.getElementById("loadData").addEventListener("click", async () => {
    try {
        // Fetch data from the API
        const response = await fetch("/api/items");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        // Parse JSON data
        const data = await response.json();

        const itemsList = document.getElementById("itemsList");

        // Clear previous list
        itemsList.innerHTML = "";

        // Loop through the data and display each item
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            itemsList.appendChild(li);
        });
    } catch (error) {
        console.error("Error:", error);
    }
});
