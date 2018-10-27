"use strict";

const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`studiously serving silly sounds on port ${PORT}`)
);

module.exports = app;
