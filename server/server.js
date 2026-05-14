const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const foodRoutes = require("./routes/foodRoutes");

const authRoutes = require("./routes/authRoutes");

const orderRoutes = require("./routes/orderRoutes");


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/foods", foodRoutes);

// Auth Routes
app.use("/api/auth", authRoutes);

// Order Routes
app.use("/api/orders", orderRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// Default Route
app.get("/", (req, res) => {
    res.send("Essen API Running");
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});