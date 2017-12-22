// React router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chef from './chef.js';
import Diner from './diner.js';
import Menu from './menu.js';

const BasicExample = () => (
  <Router>
    <div>
      <Route path="/chef" component={Chef}/>
      <Route path="/diner" component={Diner}/>
      <Route path="/menu" component={Menu}/>
    </div>
  </Router>
)
export default BasicExample;
