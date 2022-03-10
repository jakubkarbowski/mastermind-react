import React from 'react';
import './App.css';
import GameField from './GameField/GameField';
import Points from './Points/Points';

// eslint-disable-next-line no-unused-vars
const RowsAmount = 10;
// eslint-disable-next-line no-unused-vars
const ColorsAmount = 6;

function App() {
    const players = {
        first: {
            name: '1st Player',
            points: '0'
        },
        second: {
            name: '2nd Player',
            points: '0'
        }
    };

    return (
        <>
            <header>
                <h1>Mastermind</h1>
            </header>
            <Points
                players={players}
            />
            <GameField />
        </>
    );
}

export default App;
