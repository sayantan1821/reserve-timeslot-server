const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const connectDB = require("./config/db")
const slot = require("./routes/api/slot")
const payment = require("./routes/api/payment")


app.use(express.json());
app.use(cors())
connectDB()
// Define a route
app.use("/api/slot", slot)
app.use("/api/payment", payment)
app.use("/", (req, res) => {
  res.send("API is running");
});

// Start the server
const PORT = process.env.PORT || 1821;
app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
