import {
    type IQuerySchema,
    type IUseCursorCountQuery
}                          from "@leight/query";
import {z}                 from "@leight/zod";
import {PropsWithChildren} from "react";
import {
    CursorProvider,
    CursorStore
}                          from "../context";

export type ICursorControlProps<TQuerySchema extends IQuerySchema> = PropsWithChildren<{
    useCountQuery: IUseCursorCountQuery<TQuerySchema>;
    defaultCursor?: z.infer<TQuerySchema>["cursor"];
}>;

type IInternalCursor<TQuerySchema extends IQuerySchema> = ICursorControlProps<TQuerySchema>;

const InternalCursor = <TQuerySchema extends IQuerySchema>({useCountQuery, children}: IInternalCursor<TQuerySchema>) => {
    /**
     * @TODO connect to FilterProvider/FilterStore
     */
    const {setTotal, setIsLoading} = CursorStore.useState(({setTotal, setIsLoading}) => ({setTotal, setIsLoading}));
    useCountQuery({}, {
        onSuccess: data => {
            setTotal(data);
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });
    return <>{children}</>;
};

export const CursorControl = <TQuerySchema extends IQuerySchema>(
    {
        defaultCursor,
        ...props
    }: ICursorControlProps<TQuerySchema>) => {
    return <CursorProvider
        defaults={defaultCursor}
    >
        <InternalCursor
            {...props}
        />
    </CursorProvider>;
};
