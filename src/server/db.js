const Class = require('./models/Class');

module.exports = {

    getClasses: (callback) => {
        Class.find()
        .then(data => callback(null, data))
        .catch(err => callback(err, null));
    },

    hello: (callback) => {
        callback(null, 'hello');
    }
}
