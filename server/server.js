//require -> import necessary dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require("dotenv").config();
console.log('This is console log -> Test Check -> Import line');

//config express app
const app = express();
app.use(express.json());
app.use(cors());
console.log('This is console log -> Test Check -> config express app');

// config PORT
const PORT = process.env.PORT;
console.log('This is console log -> Test Check -> Config PORT');

//config Mongodb database
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('MongoDB connection failed:', error);
});
console.log('This is console log -> Test Check -> config Mongodb database');



// console.log('This is console log -> Test Check 5');
// console.log('This is console log -> Test Check 6');
// console.log('This is console log -> Test Check 7');
// console.log('This is console log -> Test Check 8');

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Post created successfully' });
});

//Host app at PORT
app.listen(PORT, () => 
    (console.log(`Server is running at PORT http://localhost:${PORT}`))
);
console.log('This is console log -> Test Check -> PORT check');