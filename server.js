// dependencies
const express = require('express');
const dotenv = require('dotenv'); // global variables
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({path: '.config/config.env'})

const transactions = require('./routes/transactions')

// initalize express app
const app = express();

app.use('/api/v1/transactions', transactions)

app.get('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold));