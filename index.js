var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){ //here1 see html
    io.emit('chat message', msg);
  });
  socket.on("username", function (nickname) { //this is receiving the message of type 'username'
    console.log("this user said their username was" + nickname); //see here2 in html
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
