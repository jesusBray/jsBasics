const expres = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = expres();

//seting
app.set('port', process.env.PORT || 3000);

//seting path generic
app.use(expres.static(path.join(__dirname,'public')));

//start server
const server = app.listen(app.get('port'), () => {
    console.log("serve start in port 3000");
})

//seting sockets
const io = socketIO.listen(server);
//fist check if there are some connection
io.on('connection', (getSocket) => {
    //message of connection safe
    console.log("Start conection using sockets: ",getSocket.id);

    //get data of getSocket
    getSocket.on('saveMessage',(data) => {
        //set generic io to emit method asgined 
        io.sockets.emit('chat:Message', data);
    });

    getSocket.on('chat:typing', (data) => {
        getSocket.broadcast.emit('chat:typing', data);
    })
})
