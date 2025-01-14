const express = require('express');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.createServer(app);

setupWebSocket(server);

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});