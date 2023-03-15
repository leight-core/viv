import {
    IQuerySchema,
    IUseCursorCountQuery
}                          from "@leight/query";
import {PropsWithChildren} from "react";
import {CursorProvider}    from "../context";

export type ICursorControlProps<TQuerySchema extends IQuerySchema> = PropsWithChildren<{
    useCountQuery: IUseCursorCountQuery<TQuerySchema>;
}>;

export const CursorControl = <TQuerySchema extends IQuerySchema>({children}: ICursorControlProps<TQuerySchema>) => {
    return <CursorProvider>
        {children}
    </CursorProvider>;
};
