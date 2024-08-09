// script.js
document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.className = 'message blue';
        newMessage.textContent = messageText;

        const chat = document.querySelector('.chat');
        chat.appendChild(newMessage);
        chat.scrollTop = chat.scrollHeight; // Scroll to the bottom

        messageInput.value = '';
    }
});
