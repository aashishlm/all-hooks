import React, { useState } from 'react';

const Button = () => {
	const [toggle, setToggle] = useState(true);
	return (
		<div>
			Button
			<button
				onClick={() => {
					setToggle(!toggle);
				}}>
				Button from child
			</button>
			{toggle && <span>Toggle</span>}
		</div>
	);
};

export default Button;
