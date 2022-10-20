import {
    Context,
    IQueryParamsContext
} from "@leight/ui";

export const [
                 QueryParamsContext,
                 useQueryParamsContext,
                 useOptionalQueryParamsContext,
             ] = Context.factory<IQueryParamsContext<any>>("QueryParamsContext");
