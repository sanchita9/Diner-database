// DEPENDENCIES: express-cors-mongoose
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");

// Import all models and save them to the name DB
// This will allow you to access the model with dot notation 
// for example: DB.Chef will refer to the Chef model you created in schema.js
const DB = require('./schema');


app.use(cors());

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/home', (req, res) => {
  res.json({ "name": "Home Page" });
});

app.get('/diner', (req, res) => {
  res.json({ "name": "Chef Information" });
});

// using the ":" allows you to create a variable on the req.params object
// in the example below we have created a key named "id" on the req.params object
// when the front end makes a get request to this route they should supply an id
// for example: /chef/123456 will have req.params.id === 123456
app.get('/chef/:id', (req, res) => {
  DB.Chef.findById(req.params.id).then(chef => {
    res.send(chef);
  });
});

app.get('/menu', (req, res) => {
  res.json({ "name": "Menu Information" });
});

// POST ROUTES
app.post('/newDiner', (req, res) => {
  res.json({ "name": "newDiner data" });
});

app.post('/newChef', (req, res) => {
  const chef = new DB.Chef({
    username: req.body.username,
    password: req.body.password
  });
  // WARNING NOT COMPLETE

  chef.save();
  res.json({ "name": "newChef data" });
});


app.listen(3005, () => console.log('Server app listening on port 3005!'));
