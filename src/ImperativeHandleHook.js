import React, { useRef } from 'react';
import Button from './Button';

const ImperativeHandleHook = () => {
	const buttonRef = useRef(null);
	return (
		<div>
			ImperativeHandleHook
			<button> Button from Parent</button>
			<Button />
		</div>
	);
};

export default ImperativeHandleHook;
