import React from 'react';
import './PinSelector.css';
import { colors as availableColors } from '../../../../models/colors';

export default function PinSelector({chooseColor}) {
	const pins = Object.entries(availableColors);

    return (
        <ul className='pin-selector'>
            {pins.map(([colorId, colorName]) => <li key={colorId}>
                <button
                    className={`pin ${colorName}`}
                    onClick={() => chooseColor(colorId)}
                ></button>
            </li>)}
        </ul>
    );
}