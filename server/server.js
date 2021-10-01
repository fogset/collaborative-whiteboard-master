var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
      console.log(`User Connected: ${socket.id}`);

      socket.on("join_room", (data) => {
            socket.join(data);
            console.log(`User with ID: ${socket.id} joined room: ${data}`);
      });

      socket.on('canvas-data', (data) => {
            socket.broadcast.emit('canvas-data', data);
      })
      socket.on("disconnect", () => {
            console.log("User Disconnected", socket.id);
      });
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
      console.log("Started on : " + server_port);
})