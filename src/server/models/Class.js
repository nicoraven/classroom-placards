const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classroom: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    timeStart: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    recurring: {
        type: Boolean,
        required: true
    },
    date: {
        type: Array
    }
});

module.exports = mongoose.model('Classes', ClassSchema);