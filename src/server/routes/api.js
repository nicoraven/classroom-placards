const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

router.get('/', (req, res) => {
    res.json({message: "hello"})
});

module.exports = router;