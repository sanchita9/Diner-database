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
app.use(express.static("build"));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

// app.get('/cheflogin', function(req, res) {
//     res.sendFile(path.join(__dirname + '/.client/build/chef.html'));
// });

// app.get('/dinerlogin', function(req, res) {
//     res.sendFile(path.join(__dirname + '/.client/build/diner.html'));
// });

// app.get('/menu', function(req, res) {
//         res.sendFile(path.join(__dirname + '/.client/build/menu.html'));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

