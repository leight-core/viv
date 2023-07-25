import {type FC}    from "react";
import {DimmedText} from "./DimmedText";

export interface IVersionStampProps {
}

export const VersionStamp: FC<IVersionStampProps> = () => {
    return <DimmedText>{process.env.NEXT_PUBLIC_VERSION}</DimmedText>;
};
