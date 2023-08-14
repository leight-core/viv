import {type FC}             from "react";
import {type IUseQuery}      from "../api/IUseQuery";
import {type IErrorResponse} from "../schema/ErrorResponseSchema";

export interface IQueryResultProps<TResult> {
    result: IUseQuery.Result<TResult>;
    WithLoading: FC<object>;
    WithSuccess: FC<{
        data: TResult;
    }>;
    WithError: FC<{
        error: IErrorResponse;
    }>;
}

export const QueryResult = <TResult, >(
    {
        result,
        WithLoading,
        WithSuccess,
        WithError,
    }: IQueryResultProps<TResult>) => {
    if (result.isLoading) {
        return <WithLoading/>;
    } else if (result.isSuccess) {
        return <WithSuccess data={result.data}/>;
    } else if (result.isError) {
        return <WithError error={result.error}/>;
    }
    console.error("Unhandled React Query status!");
    return null;
};
