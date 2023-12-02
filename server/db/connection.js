const mongoose = require('mongoose');
require('dotenv').config();

const url = `${process.env.CONNECTION_STRING}`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))