import React from 'react';
import './GameField.css';
import Row from './rows/Row';

export default function GameField() {
	return (
		<ul className='game-field'>
			<Row colors={[0, 3, 4, 1]} />

			<Row colors={[2, 1, 2, 1]} />

			<Row active colors={[null, null, null, null]} />
		</ul>
	);
}
