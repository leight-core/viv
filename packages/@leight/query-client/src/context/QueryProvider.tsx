import {CursorControl}          from "@leight/cursor-client";
import {
    type IQuerySchema,
    type IUseCursorCountQuery
}                               from "@leight/query";
import {type PropsWithChildren} from "react";

export type IQueryProviderInternalProps<TQuerySchema extends IQuerySchema> = PropsWithChildren<{
    useCountQuery: IUseCursorCountQuery<TQuerySchema>;
}>;
export type IQueryProviderProps<TQuerySchema extends IQuerySchema> = IQueryProviderInternalProps<TQuerySchema>;

export const QueryProvider = <TQuerySchema extends IQuerySchema>(
    {
        useCountQuery,
        children,
    }: IQueryProviderInternalProps<TQuerySchema>) => {
    return <CursorControl
        useCountQuery={useCountQuery}
    >
        {children}
    </CursorControl>;
};
