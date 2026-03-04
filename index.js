const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Goalpulse Backend is Running 🚀");
});

// Example API route
app.get("/api/goal", (req, res) => {
  res.json({
    status: "success",
    message: "Goal API Working"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
