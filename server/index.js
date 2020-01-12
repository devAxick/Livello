const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiWear = require('./api/apiWear');
const apiBackpack = require('./api/apiBackpack');
const apiShoes = require("./api/apiShoes");

mongoose.connect('mongodb://localhost/wears-db',{ useNewUrlParser: true, useUnifiedTopology: true });






app.use(bodyParser.json());
app.use('/api', apiWear);
app.use('/api', apiBackpack);
app.use('/api', apiShoes);

app.listen(4000, (req, res) => {
    console.log('server is listening')
});