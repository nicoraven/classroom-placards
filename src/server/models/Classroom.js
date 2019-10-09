const mongoose = require('mongoose');

const ClassroomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Classrooms', ClassroomSchema);