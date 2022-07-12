import React, { useState } from 'react';
import './GameField.css';
import Row from './rows/Row';

const rowsAmount = 8;
const initialGameMatrix = new Array(rowsAmount).fill([null, null, null, null]);

export default function GameField() {
	const [gameMatrix, setGameMatrix] = useState(initialGameMatrix);
	const [activeRowId, setActiveRowId] = useState(0);
	const [errorText, setErrorText] = useState('');

	const selectPinColor = (pinId, colorId) => {
		const newGameMatrix = [...gameMatrix];
		const chosenRow = [...newGameMatrix[activeRowId]];

		chosenRow[pinId] = colorId;
		newGameMatrix[activeRowId] = chosenRow;

		setGameMatrix(newGameMatrix);
	};

	const checkIfAllArePinsInPlace= () => gameMatrix[activeRowId].every(pin => pin !== null);

	const acceptRow = () => {
		if (checkIfAllArePinsInPlace()) {
			setErrorText('')
			setActiveRowId(activeRowId + 1);
		} else {
			setErrorText('You need to place all pegs!');
		}
	};

	return (
		<div>
			<p className='error-text'>{errorText}</p>
			<ul className='game-field'>
				{gameMatrix.map((row, id) => <Row
					key={id}
					active={id === activeRowId}
					colors={row}
					selectPinColor={selectPinColor}
					acceptRow={acceptRow}
					/>
				)}
			</ul>
		</div>
	);
}
