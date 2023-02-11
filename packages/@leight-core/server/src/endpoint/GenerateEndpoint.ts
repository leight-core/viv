import {
	IEndpoint,
	IGenerators
}                       from "@leight-core/api";
import {generateSdkFor} from "../sdk";

export interface IGenerateEndpointRequest {
	path?: string;
	output?: string;
	generators?: IGenerators | undefined;
}

export const GenerateEndpoint: (request: IGenerateEndpointRequest) => IEndpoint<"Generate", void, string[]> = (
	{
		path = "src/pages/api/**/*.ts",
		output = "src/sdk",
		generators,
	}) => ({
	handler: async () => generateSdkFor(path, output, generators),
});
