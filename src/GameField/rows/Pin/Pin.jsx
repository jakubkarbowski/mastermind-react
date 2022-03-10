import React from 'react';
import './Pin.css';
import { colors as availableColors } from '../../../models/colors';

export default function Pin({ color }) {

	const getClass = () => {
		if (color === null || color === undefined) return 'pin empty';
		return `pin ${availableColors[color]}`;
	}

	const pinClass = getClass();
	return (
		<div className={pinClass}></div>
	);
}