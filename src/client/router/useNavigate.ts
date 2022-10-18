import {
    INavigate,
    IQueryParams
}                  from "@leight/viv";
import {useRouter} from "next/router";

export const useNavigate = <TQueryParams extends IQueryParams = any>(): INavigate<TQueryParams> => {
    const router = useRouter();
    return (href: string, queryParams?: TQueryParams) => {
        router
            .push({pathname: href, query: queryParams})
            .catch(e => console.error(e));
    };
};
