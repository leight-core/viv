import {ISdk}                  from "@leight-core/api";
import {generateFetchEndpoint} from "./generateFetchEndpoint";

export const generateListEndpoint = (sdk: ISdk) => generateFetchEndpoint(sdk);
