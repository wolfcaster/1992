import React from 'react';

const Game: React.FC = () => {
    return (
        <iframe
            src="/wolfcaster/index.html"
            title="Wolfcaster Game"
            style={{ width: '100vw', height: '100vh', border: 'none' }}
            allowFullScreen
        ></iframe>
    );
};

export default Game;
