import {
	DependencyList,
	useEffect,
	useRef
} from "react";

export const useUpdate = (deps: DependencyList[], callback: () => void) => {
	const init = useRef(false);
	useEffect(() => {
		if (init.current) {
			callback();
		}
		init.current = true;
	}, deps);
};
