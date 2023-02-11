import {
	FC,
	useEffect
}                         from "react";
import {useSourceContext} from "./SourceContext";

export interface ISourceResetProps {
}

export const SourceReset: FC<ISourceResetProps> = () => {
	const sourceContext = useSourceContext();
	useEffect(() => {
		sourceContext.reset();
	}, []);
	return null;
};
