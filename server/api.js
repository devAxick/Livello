const express = require('express');
const route = express.Router();
const Wear = require('./wearSchema');

route.get('/wear', (req, res) => {
   Wear.find({})
       .then(wearItem => {
           res.send(wearItem)
       })
});

route.post('/wear', (req, res) => {
    Wear.create(req.body)
        .then(wearItem => {
            res.send(wearItem)
        })
});

route.put('/wear/:id', (req, res) => {
    Wear.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Mugger.findOne({_id: req.params.id})
                .then(wearItem => {
                    res.send(wearItem)
                })

        })
});

route.delete('/wear/:id', (req, res) => {
    Wear.findByIdAndDelete({_id: req.params.id})
        .then(res.send('deleted'))
});

module.exports = route;