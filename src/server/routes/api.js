const express = require('express');
const router = express.Router();
const Class = require('../models/Class');
const classController = require('../controllers/classController')(Class);

router.get('/', classController.getClasses);

router.post('/', classController.createClass);

router.patch('/:id', classController.updateClass);

router.delete('/:id', classController.updateClass);

module.exports = router;