require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const stitchRoutes = require("./routes/stitchRoutes");
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: " Express Backend Running..." });
});

app.get("/test_fastapi", async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/health");

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.use("/api", stitchRoutes);

connectDB();

app.listen(5000, () => {
  console.log("Server running on port http://localhost:5000");
});
