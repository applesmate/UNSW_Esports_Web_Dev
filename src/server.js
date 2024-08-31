const express = require('express');
const json = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = '10000';
const HOST = '0.0.0.0';

const app = express();
app.use(json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    
});