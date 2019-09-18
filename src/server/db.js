const Class = require('./models/Class');

module.exports = {

    getClasses: (callback) => {
        Class.find()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    getOne: (id, callback) => {
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
