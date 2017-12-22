const express  = require("express");
const app      = express();
const mongoose = require('mongoose');
const path     = require("path");
const PORT     = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Send every request to the React app

// ROUTES
// Define any API routes before this runs

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

