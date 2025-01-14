const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');
const { setupWebSocket } = require('./websocket');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Basic endpoint
app.get('/', (req, res) => res.send('Audio Sync Backend Running'));

// WebSocket setup
const server = app.listen(4000, () => console.log('Server running on http://localhost:4000'));
setupWebSocket(server);
