import {ISdk}                  from "@leight-core/api";
import {generateFetchEndpoint} from "@leight-core/server";

export const generateListEndpoint = (sdk: ISdk) => generateFetchEndpoint(sdk);
