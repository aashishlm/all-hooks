import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectHook = () => {
	const [data, setData] = useState('');
	const [count, setCount] = useState(0);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/comments')

			.then((res) => {
				setData(res.data[0].email);
				console.log('Api was called');
			}, []);
	});

	return (
		<div>
			{count}
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				Inc
			</button>
			{data}
		</div>
	);
};

export default UseEffectHook;
