import React, { useReducer } from 'react';
const reducer = (state, action) => {
	switch (action.type) {
		case 'Increment':
			return { count: state.count + 1, showText: state.showText };

		case 'toggleShowText':
			return {
				count: state.count,
				showText: !state.showText,
			};
		default:
			return state;
	}
};

const UseReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	// const [count, setCount] = useState(0);
	// const [showText, setShowText] = useState(true);
	// const handleClick = () => {
	// 	setCount(count + 1);
	// 	setShowText(!showText);
	// };
	return (
		<div>
			<p>{state.count}</p>
			<button
				onClick={() => {
					dispatch({ type: 'Increment' });
					dispatch({ type: 'toggleShowText' });
				}}>
				Click Me !!{' '}
			</button>
			{state.showText && <p>This is a show text</p>}
		</div>
	);
};
export default UseReducerHook;
