const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
	transports: ["websocket"],
	allowUpgrades: true
});
const port = process.env.PORT || 4000;
app.set('port', 4000)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

console.log('jgnirenginer')
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
