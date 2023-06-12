const express = require ('express');
const dotenv = require ('dotenv');
const path = require ('path');
const connectDB = require ('./config/db.js');
dotenv.config();

//database connection
connectDB();
console.log("Database -> Connected Successfully");

