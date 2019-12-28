const express = require('express');
const route = express.Router();
const Mugger = require('./mugger');

route.get('/mugger', (req, res) => {
   Mugger.find({})
       .then(mugger => {
           res.send(mugger)
       })
});

route.post('/mugger', (req, res) => {
    Mugger.create(req.body)
        .then(mugger => {
            res.send(mugger)
        })
});

route.put('/mugger/:id', (req, res) => {
    Mugger.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Mugger.findOne({_id: req.params.id})
                .then(mugger => {
                    res.send(mugger)
                })

        })
});

route.delete('/mugger/:id', (req, res) => {
    Mugger.findByIdAndDelete({_id: req.params.id})
        .then(res.send('deleted'))
});

module.exports = route;