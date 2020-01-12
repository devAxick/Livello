const express = require('express');
const router = express.Router();
const Shoes = require('../mongoose schemas/shoes');


router.get('/shoes_test', (req, res) => {
    res.send({shoes: 'shoes_test'})
});

router.get('/shoes_count', (req, res) => {
    Shoes.countDocuments({}, (err, count) =>{
        res.send({count: count})
    })
});

router.get('/shoes', (req, res) => {
    Shoes.find({})
        .then(shoes => res.send(shoes))
});

router.post('/shoes', (req, res) => {
    Shoes.create(req.body)
        .then(shoes => {
            res.send(shoes)
        })
});

router.put('/shoes:id', (req, res) => {
    res.send(res.id)
});

router.delete('/shoes:id', (req, res) => {
    res.send({method: "DELETE"})
});

module.exports = router;