const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const defaultPort = 3000;
app.set('port', process.envPORT || defaultPort);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/'));
});

io.on('connection', function() {
    console.log('a user connected');
});

http.listen(app.get('port'), function() {
  console.log('listening on *', app.get('port'),);
});
