import React, { useEffect, useLayoutEffect, useRef } from 'react';

const UseLayoutEffectHook = () => {
	const inputRef = useRef(null);
	//aru print dispaly hunu bhanda agadi nai yo call huncha
	useLayoutEffect(() => {
		console.log(inputRef.current.value);
	}, []);
	//paila aru print display garcha ani tespaxi matra yo call huncha
	useEffect(() => {
		inputRef.current.value = 'Heloo';
	}, []);
	return (
		<div>
			UseLayoutEffectHook
			<div>
				<input
					ref={inputRef}
					value='aashish '
					style={{ width: 400, height: 200 }}
				/>
			</div>
		</div>
	);
};

export default UseLayoutEffectHook;
