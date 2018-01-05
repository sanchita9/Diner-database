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
  const diner = new DB.Diner({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    emails: req.body.emails,
    address: req.body.address,
    order: req.body.order,
    payment: req.body.payment
  });

  diner.save();
  res.json({"name": "newDiner data"})
});

app.post('/newChef', (req, res) => {
  const chef = new DB.Chef({
    username: req.body.username,
    password: req.body.password,
    photoUrl: req.body.photoUrl,
    phoneNumber: req.body.phoneNumber,
    emails: req.body.emails,
    skills: req.body.skills
  });

  chef.save();
  res.json({"name": "newChef data"})
});

  app.post('/newMenu', (req, res) => {
    const diner = new DB.Menu({
      name: req.body.name,
      price: req.body.price,
      descriptions: req.body.descriptions,
      photoUrl: req.body.photoUrl
    });

    menu.save();
    res.json({"name": "newMenu data"})
  });

app.listen(3005, () => console.log('Server app listening on port 3005!'));
