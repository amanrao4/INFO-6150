require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

// Middleware order is important!
app.use(express.json()); // Parses JSON payloads
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded payloads
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Allow serving uploaded images
app.use("/uploads", express.static("uploads"));

// Connect Database
connectDB();

// Routes
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
