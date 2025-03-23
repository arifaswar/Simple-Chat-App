const webSocket = require('ws');

const server = new webSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    console.log("Klien terhubung");

    socket.on('message', message => {
        const textMessage = message.toString();
        console.log('pesan diterima:', textMessage);
        server.clients.forEach(client => {
            if(client.readyState === webSocket.OPEN){
                client.send(textMessage);
            }
        });
    });
    socket.on('close', () => {
        console.log("Klien terputus");
    });
});

console.log("Web Socket server berjalan di ws://localhost:3000");
