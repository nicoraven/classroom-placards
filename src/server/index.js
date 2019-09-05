// Setup
const express = require('express');
const app = express();
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 8080;

// Routes
app.get('/api/getUsername', (req, res) => res.send({ username: "user A" }));

// Listen to socket.io
io.on('connection', socket => {
    console.log('a user connected');

    socket.on('fetch news', () => {
        console.log('send news now');
        socket.emit('receive news', {content: "Good to go!"});
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Listen to port
server.listen(port, () => console.log(`~~~ Listening on port ${port}! ~~~`));
