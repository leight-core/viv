import {
    type IQuerySchema,
    type IUseCursorCountQuery
} from "@leight/query";
import {
    PropsWithChildren,
    useEffect
} from "react";
import {
    CursorProvider,
    useCursorState
} from "../context";

export type ICursorControlProps<TQuerySchema extends IQuerySchema> = PropsWithChildren<{
    useCountQuery: IUseCursorCountQuery<TQuerySchema>;
}>;

type IInternalCursor<TQuerySchema extends IQuerySchema> = ICursorControlProps<TQuerySchema>;

const InternalCursor = <TQuerySchema extends IQuerySchema>({useCountQuery, children}: IInternalCursor<TQuerySchema>) => {
    const {setTotal} = useCursorState(({setTotal}) => ({setTotal}));
    const result     = useCountQuery({});
    useEffect(() => {
        if (result.isSuccess) {
            setTotal(result.data);
        }
    }, [
        result.isSuccess,
        result.isLoading,
        result.isFetching
    ]);
    return <>{children}</>;
};

export const CursorControl = <TQuerySchema extends IQuerySchema>(props: ICursorControlProps<TQuerySchema>) => {
    return <CursorProvider>
        <InternalCursor
            {...props}
        />
    </CursorProvider>;
};
