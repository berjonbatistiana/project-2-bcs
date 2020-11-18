require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const http = require('http');
const socketio = require('socket.io');

require("./services/passport");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
  console.log('New socket connection');

  socket.emit('message', 'You have entered a lobby');
  // socket.on('message', message => {


  // })
})

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

server.listen(PORT, () => {
  console.log("Server started listening on PORT http://localhost:3001");
});
