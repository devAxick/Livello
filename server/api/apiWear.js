const express = require('express');
const router = express.Router();
const Wear = require('../mongoose schemas/wear');


router.get('/weari', (req, res) => {
    Wear.countDocuments({}, (err, count) =>{
        res.send({count: count})
    })
});

router.get('/wear', (req, res) => {
    Wear.find({})
        .then(wear => res.send(wear))
});

router.post('/wear', (req, res) => {
    Wear.create(req.body)
        .then(wear => {
            res.send(wear)
        })
});

router.put('/wear:id', (req, res) => {
    res.send(res.id)
});

router.delete('/wear:id', (req, res) => {
    res.send({method: "DELETE"})
});

module.exports = router;