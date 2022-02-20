import React, { useState } from 'react';

const StateTutorial = () => {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState('nothing');
	return (
		<div>
			{count}
			<button onClick={() => setCount(count + 1)}>Increment </button>
			<input
				onChange={(e) => setInput(e.target.value)}
				placeholder='write something'
			/>
			{input}
		</div>
	);
};

export default StateTutorial;
