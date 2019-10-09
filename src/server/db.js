const Class = require('./models/Class');
const Classroom = require('./models/Classroom');

module.exports = {

    getClassrooms: (callback) => {
        Classroom.find()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    getOneClassroom: (callback) => {
        Classroom.find({_id: id})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    createClassroom: (form, callback) => {
        let classroom = new Classroom({
            name: form.name
        });
    
        classroom.save()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    updateClassroom: (form, callback) => {
        Classroom.updateOne({_id: form.id}, { $set: {
            name: form.name,
        }})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    deleteClassroom: (id, callback) => {
        Classroom.deleteOne({_id: id})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    getClasses: (callback) => {
        Class.find()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    getOneClass: (id, callback) => {
        Class.find({_id: id})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    createClass: (form, callback) => {
        let session = new Class({
            name: form.name,
            classroom: form.classroom,
            instructor: form.instructor,
            timeStart: form.timeStart,
            timeEnd: form.timeEnd,
            recurring: form.recurring,
            date: form.date
        });
    
        session.save()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    updateClass: (form, callback) => {
        Class.updateOne({_id: form.id}, { $set: {
            name: form.name,
            classroom: form.classroom,
            instructor: form.instructor,
            timeStart: form.timeStart,
            timeEnd: form.timeEnd,
            recurring: form.recurring,
            date: form.date
        }})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    deleteClass: (id, callback) => {
        Class.deleteOne({_id: id})
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    }
}
