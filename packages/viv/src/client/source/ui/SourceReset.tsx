import {useSourceContext} from "@leight/viv";
import {
    FC,
    useEffect
}                         from "react";

export interface ISourceResetProps {
}

export const SourceReset: FC<ISourceResetProps> = () => {
    const sourceContext = useSourceContext();
    useEffect(() => {
        sourceContext.reset();
    }, []);
    return null;
};
