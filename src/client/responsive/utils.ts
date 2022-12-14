import {useIsMobile} from "@leight-core/viv";

export type IUseMobileHook = <T>(mobile: T, others?: T) => T | undefined;

export const useMobile = (): IUseMobileHook => {
    const isMobile = useIsMobile();
    return (mobile, others) => isMobile ? mobile : others;
};
