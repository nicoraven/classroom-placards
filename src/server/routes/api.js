const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

router.get('/', (req, res) => {
    Class.find()
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

router.post('/', (req, res) => {
    let session = new Class({
        name: req.body.name,
        classroom: req.body.classroom,
        instructor: req.body.instructor,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        recurring: req.body.recurring,
        date: req.body.date
    });

    session.save()
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

router.patch('/:id', (req, res) => {
    Class.updateOne({_id: req.params.id}, { $set: {
        name: req.body.name,
        classroom: req.body.classroom,
        instructor: req.body.instructor,
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,
        recurring: req.body.recurring,
        date: req.body.date
    }})
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

router.delete('/:id', (req, res) => {
    Class.deleteOne({_id: req.params.id})
    .then(data => res.json(data))
    .catch(err => res.json({message: err}));
});

module.exports = router;