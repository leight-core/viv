import {type FC}             from "react";
import {type IUseQuery}      from "../api/IUseQuery";
import {type IErrorResponse} from "../schema/ErrorResponseSchema";

export interface IQueryResultProps<TResult> {
    result: IUseQuery.Result<TResult>;
    WithLoading?: FC<object>;
    WithSuccess?: FC<{
        data: TResult;
    }>;
    WithError?: FC<{
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
    if (result.isLoading && WithLoading) {
        return <WithLoading/>;
    } else if (result.isSuccess && WithSuccess) {
        return <WithSuccess data={result.data}/>;
    } else if (result.isError && WithError) {
        return <WithError error={result.error}/>;
    }
    return null;
};
