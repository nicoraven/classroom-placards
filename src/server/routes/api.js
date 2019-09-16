const express = require('express');
const router = express.Router();
// const Class = require('../models/Class');
// const classController = require('../controllers/classController')(Class);
const db = require('../db')

router.get('/', (req, res) => {
    db.getClasses((err, data) => {
        // socket.emit('receive all', {data: data, err: err})
        res.send({data: data, err: err})
    })
})

// router.get('/', classController.getClasses);

// router.post('/', classController.createClass);

// router.patch('/:id', classController.updateClass);

// router.delete('/:id', classController.updateClass);

module.exports = router;