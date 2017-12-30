// DEPENDENCIES: express-cors-mongoose
const express  = require('express');
const app      = express();
const cors     = require('cors');
const mongoose = require('mongoose');
const path     = require("path");

const DB = require('./schema');

app.use(cors());

// ROUTES
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/home', (req, res) => {
  res.json({"name": "Home Page"});
});

app.get('/diner', (req, res) => {
    res.json({"name": "Chef Information"});
  });

app.get('/chef', (req, res) => {
    res.json({"name": "Diner Information"});
  });

app.get('/menu', (req, res) => {
    res.json({"name": "Menu Information"});
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
