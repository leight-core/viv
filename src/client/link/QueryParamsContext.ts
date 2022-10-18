import {
    contextFactory,
    IQueryParamsContext
} from "@leight/viv";

export const [
                 QueryParamsContext,
                 useQueryParamsContext,
                 useOptionalQueryParamsContext,
             ] = contextFactory<IQueryParamsContext>("QueryParamsContext");
