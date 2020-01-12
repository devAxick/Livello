const express = require('express');
const router = express.Router();
const Backpack = require('../mongoose schemas/backpack');



router.get('/backpack', (req, res) => {
    res.send({backpack: 'backpack'})
    // Backpack.find({})
    //     .then(backpack => res.send(backpack))
});

router.post('/backpack', (req, res) => {
    Backpack.create(req.body)
        .then(backpack => {
            res.send(backpack)
        })
});

router.put('/backpack:id', (req, res) => {
    res.send(res.id)
});

router.delete('/backpack:id', (req, res) => {
    res.send({method: "DELETE"})
});

module.exports = router;