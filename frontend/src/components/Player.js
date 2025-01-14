import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling']
});

function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        socket.on('sync', (data) => {
            const { isPlaying, time } = data.payload;
            if (audioRef.current) {
                audioRef.current.currentTime = time;
                isPlaying ? audioRef.current.play() : audioRef.current.pause();
            }
        });
    }, []);

    const handlePlayPause = () => {
        const newState = !isPlaying;
        setIsPlaying(newState);
        socket.emit('sync', {
            type: 'sync',
            payload: { isPlaying: newState, time: audioRef.current.currentTime },
        });
        newState ? audioRef.current.play() : audioRef.current.pause();
    };

    return (
        <div>
            <audio ref={audioRef} src="/sample.mp3" controls />
            <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
}

export default Player;