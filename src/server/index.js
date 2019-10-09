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
const socketController = require('./routes/socket')
const nsp = io.of('/socket');
// nsp.on('connection', socketController);
nsp.on("connection", (socket) => {
  console.log('a user connected');

  socket.on('fetch news', () => {
    console.log('send news now');
    nsp.emit('receiveNews', {content: "Good to go!"});
    // socket.emit('receiveNews', {content: "Good to go!"});
  });

  socket.on('getAll', () => {
    db.getClasses((err, res) => {
        socket.emit('receive all', {data: res, err: err})
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
})

// LISTEN TO SERVER
server.listen(PORT, () => console.log(`~~~ Listening on port ${PORT}! ~~~`));
