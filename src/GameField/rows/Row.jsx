import React from 'react';
import './Row.css';
import Pin from './Pin/Pin';

export default function Row({ active, colors }) {
	return (
		<>
			<li className='row'>
				{colors.map((color, i) => (
					<div key={i}>
						{
							active ?
								<>active</> :
								<Pin color={color} />
						}
					</div>
				))}
				<div></div>
			</li>
			<hr />
		</>
	);
}