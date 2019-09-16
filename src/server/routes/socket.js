const db = require('../db')

module.exports = (socket) => {

    console.log('a user connected');

    socket.on('fetch news', () => {
        console.log('send news now');
        socket.emit('receive news', {content: "Good to go!"});
    });

    socket.on('getAll', () => {
        db.getClasses((err, data) => {
            socket.emit('receive all', {data: data, err: err})
        })
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
}