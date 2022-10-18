import {
    ISdkEndpointReflection,
    ISdkImportReflection,
    ISdkInterfaceReflection
} from "@leight/server";

export interface ISdk {
    readonly file: string;
    readonly imports: ISdkImportReflection[];
    readonly interfaces: ISdkInterfaceReflection[];
    readonly endpoint: ISdkEndpointReflection;
}
