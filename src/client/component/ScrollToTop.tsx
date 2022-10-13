import {useEffect} from "react";

export function ScrollToTop() {
	useEffect(() => {
		window.scrollTo({
			top:      0,
			left:     0,
			behavior: "auto",
		});
	});
	return null;
}
