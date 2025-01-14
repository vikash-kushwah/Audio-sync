import React from 'react';
import Player from './components/Player';
import DeviceDiscovery from './components/DeviceDiscovery';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Audio Sync</h1>
                <DeviceDiscovery />
                <Player />
            </header>
        </div>
    );
}

export default App;