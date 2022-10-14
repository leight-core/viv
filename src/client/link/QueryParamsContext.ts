import {
    contextFactory,
    IQueryParamsContext
} from "@leight-core/viv";

export const [
                 QueryParamsContext,
                 useQueryParamsContext,
                 useOptionalQueryParamsContext,
             ] = contextFactory<IQueryParamsContext>("QueryParamsContext");
