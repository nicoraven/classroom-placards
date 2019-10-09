const db = require('../db')

module.exports = (socket, nsp) => {
    console.log('a user connected');

    socket.on('fetchNews', () => {
        console.log('send news now');
        nsp.emit('receiveNews', {data: "Good to go!"});
        // socket.emit('receiveNews', {data: "Good to go!"});
    });

    socket.on('getAll', () => {
        db.getClasses((err, res) => {
        socket.emit('receiveAll', {data: res, err: err})
    })
    });

    socket.on('createClass', (data) => {
        console.log(data);
        // db.createClass(data, (err, res) => {
        //     socket.emit('receive all', {data: res, err: err})
        // })
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
}