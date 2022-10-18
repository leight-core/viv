import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    Method
} from "axios";

export const toPromise = <TRequest, TResponse>(method: Method, url: string, request?: TRequest, config?: AxiosRequestConfig<TRequest>) => new Promise<TResponse>((resolve, reject) => {
    axios.request<TResponse, AxiosResponse<TResponse>, TRequest>({
            method,
            url,
            data: request,
            ...config,
        })
        .then(result => resolve(result.data))
        .catch(reject);
});
