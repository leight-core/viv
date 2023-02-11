import {ISdk}                     from "@leight-core/api";
import {generateMutationEndpoint} from "./generateMutationEndpoint";

export const generateEndpoint = (sdk: ISdk) => generateMutationEndpoint(sdk);
