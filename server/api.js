const express = require('express');
const route = express.Router();
const Mugger = require('./mugger');

route.get('/mugger', (req, res) => {
   res.send({method: 'GETo'})
});

route.post('/mugger', (req, res) => {
    Mugger.create(req.body)
        .then(mugger => {
            res.send(mugger)
        })
});

route.put('/mugger:id', (req, res) => {
    res.send({method: 'PUT'})
});

route.delete('/mugger:id', (req, res) => {
    res.send({method: 'DELETE'})
});

module.exports = route;