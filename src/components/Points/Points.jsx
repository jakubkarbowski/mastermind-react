import React from 'react';
import './Points.css';

export default function Points({ players }) {
    return (
        <div className="points">
            <ul>
                <li>
                    <b>{players.first.name}:</b> {players.first.points}
                </li>
                <li>
                    <b>{players.second.name}:</b> {players.second.points}
                </li>
            </ul>
        </div>
    );
}
