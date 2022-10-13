import {ISdk}                     from "@leight-core/api";
import {generateMutationEndpoint} from "@leight-core/server";

export const generateEndpoint = (sdk: ISdk) => generateMutationEndpoint(sdk);
