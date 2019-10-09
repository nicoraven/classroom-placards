const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.getClasses((err, data) => {
        res.send({data: data, err: err})
    })
});

router.get('/:id', (req, res) => {
    db.getOneClass(req.params.id , (err, data) => {
        res.send({data: data, err: err})
    })
});

router.post('/', (req, res) => {
    db.createClass(req.body , (err, data) => {
        res.send({data: data, err: err})
    })
});

router.patch('/:id', (req, res) => {
    req.body.id = req.params.id;
    db.updateClass(req.body , (err, data) => {
        res.send({data: data, err: err})
    })
});

router.delete('/:id', (req, res) => {
    db.deleteClass(req.params.id , (err, data) => {
        res.send({data: data, err: err})
    })
});

module.exports = router;