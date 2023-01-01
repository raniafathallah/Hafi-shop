
const express=require('express');
const morgan = require('morgan');
const App = require('express')();
const path=require('path');
App.use(express.json()); 
App.use(morgan('dev'));
const  userRoutes=require('./routes/userRoutes.js');
const productsRoutes=require('./routes/productRoutes');
// Serving static files
App.use(express.static(path.join(__dirname, 'public')));
  
App.use('/api/users', userRoutes); 
App.use('/api/products', productsRoutes); 

 
module.exports = App; 