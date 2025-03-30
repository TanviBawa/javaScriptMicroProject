const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Read JSON file and store the data in a variable
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'items.json'), "utf8"));

// API Route to send JSON data
app.get("/api/items", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
