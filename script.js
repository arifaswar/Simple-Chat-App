const socket = new WebSocket('ws://localhost:3000');

socket.onmessage = function (event) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("p");
    message.textContent = event.data;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    if (messageInput.value.trim() !== "") {
        socket.send(messageInput.value);
        messageInput.value = "";
    }
}