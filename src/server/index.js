// SETUP
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const DB_PATH = process.env.DB_PATH || "mongodb://localhost/cp";

// MIDDLEWARE
app.use(express.json());

// CONNECT TO DB
mongoose.connect(DB_PATH, {useNewUrlParser: true}, () => console.log("connected to DB!"));

// IMPORT ROUTES
const apiRoutes = require('./routes/api'); 
app.use('/api', apiRoutes);

// LISTEN TO SOCKET
// const socketController = require('./controllers/socketController'); 
// io.on('connection', socketController);
const Class = require('./models/Class');
io.on('connection', socket => {
    console.log('a user connected');

    socket.on('fetch news', () => {
        console.log('receiving news request');
        socket.emit('receive news', {content: "Good to go!"});
    });

    socket.on('getAll', () => {
        Class.find()
        .then(data => socket.emit('receive all', data))
        .catch(err => socket.emit('receive all', err));
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// LISTEN TO SERVER
server.listen(PORT, () => console.log(`~~~ Listening on port ${PORT}! ~~~`));
