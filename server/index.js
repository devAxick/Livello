const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api');

mongoose.connect('mongodb://localhost/wears-db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api', api);

app.listen(4000, (req, res) => {
    console.log('server is listening')
});