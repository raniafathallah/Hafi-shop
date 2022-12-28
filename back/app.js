
const express=require('express');
const morgan = require('morgan');
const App = require('express')();
const path=require('path');
App.use(express.json());
App.use(morgan('dev'));

// Serving static files
App.use(express.static(path.join(__dirname, 'public')));
  

module.exports = App;