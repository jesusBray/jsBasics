const socket = io();

//get DOM  elements
let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('submit')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

btn.addEventListener('click', () => {
    socket.emit('saveMessage', {
        username: username.value,
        message: message.value
    });
})

//listener method socket from io.socket
socket.on('chat:Message',(data) => {
    actions.innerHTML = ''
    output.innerHTML +=`<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`
})

message.addEventListener('keypress', () => {
    socket.emit('chat:typing', username.value);    
})

socket.on('chat:typing',(data) => {
    actions.innerHTML = `<p>
        <em>${data} is typing a message</em>
    </p>`
});