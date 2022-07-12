import React from 'react';
import './Row.css';
import Pin from './Pin/Pin';
import AcceptButton from './AcceptButton/AcceptButton';

export default function Row({ active, colors, acceptRow, selectPinColor }) {
	
	// TODO:
	// 1. Move inline style to css
	// 2. Implement checking correct answers
	// 3. Implement points
	// 4. Bug: Multiple PinSelectors can be opened.
	return (
		<>
			<li className='row'>
				{colors.map((color, id) => (
					<Pin
						key={id}
						id={id}
						color={color}
						active={active}
						selectPinColor={selectPinColor}
					/> 
				))}
				<div style={{height: '20px'}}>1 2 3 4</div>
				
				{active && <AcceptButton acceptRow={acceptRow}/>}
			</li>
			<hr />
		</>
	);
}
