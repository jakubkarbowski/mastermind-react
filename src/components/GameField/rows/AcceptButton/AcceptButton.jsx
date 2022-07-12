import React from 'react';
import './AcceptButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function AcceptButton({ acceptRow }) {
	return (
		<button className='accept' onClick={acceptRow}>
			<FontAwesomeIcon icon={faCheck} />
		</button>
	);
}
