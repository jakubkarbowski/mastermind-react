import React, { useState } from 'react';
import './Pin.css';
import { colors as availableColors } from '../../../../models/colors';
import PinSelector from '../PinSelector/PinSelector'

export default function Pin({  active, color, id, selectPinColor }) {
	const [pinSelectorOpened, setPinSelectorOpened] = useState(false);

	const getClass = () => {
		if (color === null || color === undefined) return 'pin empty';
		return `pin ${availableColors[color]}`;
	}

	const pinClass = getClass();

	const openPinSelector = () => {
		setPinSelectorOpened(!pinSelectorOpened);
	};

	const chooseColor = (colorId) => {
		setPinSelectorOpened(false);
		selectPinColor(id, colorId);
	};

	return active ? (
		<div className='pin-container'>
			<button className='pin-button' onClick={openPinSelector}>
				<div className={pinClass} />
			</button>
			{pinSelectorOpened && (
				<PinSelector chooseColor={chooseColor}/>
			)}
		</div>
	) :  <div className={pinClass}/>;
}