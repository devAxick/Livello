const express = require('express');
const router = express.Router();
const Wear = require('./wear');

router.get('/wear', (req, res) => {
    res.send({method: "GET"})
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