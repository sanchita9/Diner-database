const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path     = require("path");

app.use(cors());

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

app.listen(3005, () => console.log('Server app listening on port 3005!'));
