import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

function DeviceDiscovery() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        socket.on('deviceList', (deviceList) => {
            setDevices(deviceList);
        });

        return () => {
            socket.off('deviceList');
        };
    }, []);

    return (
        <div>
            <h2>Connected Devices</h2>
            <ul>
                {devices.map((device, index) => (
                    <li key={index}>{device}</li>
                ))}
            </ul>
        </div>
    );
}

export default DeviceDiscovery;