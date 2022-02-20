import React, { useRef } from 'react';

const UseRefHook = () => {
	const inputRef = useRef(null);
	const onCk = () => {
		console.log(inputRef.current.value);
		inputRef.current.focus();
		inputRef.current.value = ' ';
	};
	return (
		<div>
			UseRefHook
			<h1>Aashish</h1>
			<input type='text' palceholder='Ex . . . ' ref={inputRef} />
			<button onClick={onCk}>Change Name</button>
		</div>
	);
};

export default UseRefHook;
