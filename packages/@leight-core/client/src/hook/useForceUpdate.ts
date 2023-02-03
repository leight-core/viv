import {useCallback, useState} from "react";

export const useForceUpdate = () => {
	const [, setDispatch] = useState<unknown>(Object.create(null));
	return useCallback(
		(): void => {
			setDispatch(Object.create(null));
		},
		[setDispatch],
	);
};
