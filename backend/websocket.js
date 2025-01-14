const WebSocket = require('ws');

let devices = []; // Connected devices
let playbackState = {}; // Playback status

function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Device connected');
        devices.push(ws);
        broadcastDeviceList();

        ws.on('message', (message) => {
            const data = JSON.parse(message);

            if (data.type === 'sync') {
                playbackState = data.payload;
                broadcast(data);
            }
        });

        ws.on('close', () => {
            console.log('Device disconnected');
            devices = devices.filter((device) => device !== ws);
            broadcastDeviceList();
        });

        ws.on('error', (error) => {
            console.error('WebSocket error:', error);
        });
    });

    function broadcast(data) {
        devices.forEach((device) => device.send(JSON.stringify(data)));
    }

    function broadcastDeviceList() {
        const deviceList = devices.map((_, index) => `Device ${index + 1}`);
        broadcast({ type: 'deviceList', payload: deviceList });
    }
}

module.exports = { setupWebSocket };