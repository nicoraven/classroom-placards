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
// io.on('connection', socketController);
const nsp = io.of('/socket');
nsp.on('connection', socketController)

// LISTEN TO SERVER
server.listen(PORT, () => console.log(`~~~ Listening on port ${PORT}! ~~~`));
