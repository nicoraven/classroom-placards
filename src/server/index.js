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

// ROUTES
app.get('/api/getUsername', (req, res) => res.send({ username: "user A" }));

// LISTEN TO SOCKET
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

// LISTEN TO SERVER
server.listen(PORT, () => console.log(`~~~ Listening on port ${PORT}! ~~~`));
