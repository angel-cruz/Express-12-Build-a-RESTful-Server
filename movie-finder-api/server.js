require("dotenv").config();

const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Movie Finder API" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
