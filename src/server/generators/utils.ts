import {ISdk} from "@leight-core/viv";

export interface IGeneratorCommons {
    name: string;
    api: string;
    generics: string[];
}

export const toGeneratorCommons = (sdk: ISdk): IGeneratorCommons => {
    const name = sdk.endpoint.name.replace("Endpoint", "");
    return {
        name,
        api:      sdk.endpoint.api,
        generics: sdk.endpoint.generics,
    };
};

export const cleanup = (code: string): string => {
    return code.replace(/\n\s*\n\s*\n/g, "\n\n").trim() + "\n";
};
