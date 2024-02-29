// Import the Express.js library
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!, I am running");
});

// Start the server

module.exports = app;
