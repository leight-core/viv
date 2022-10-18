import {
    IApiHandler,
    IQueryParams
}                  from "@leight/viv";
import {Histogram} from "prom-client";

const histogram = new Histogram({
    aggregator: "average",
    name:       "http_request_duration_seconds",
    help:       "Duration of HTTP requests in microseconds",
    labelNames: [
        "method",
        "route",
        "code"
    ],
    buckets:    [
        0.1,
        0.3,
        0.5,
        0.7,
        1,
        3,
        5,
        7,
        10
    ],
});

export const withMetrics = <TRequest, TResponse, TQueryParams extends IQueryParams>(handler: IApiHandler<TRequest, TResponse, TQueryParams>): IApiHandler<TRequest, TResponse, TQueryParams> => async (req, res) => {
    const timer = histogram.startTimer();
    await handler(req, res);
    timer({method: req.method, route: req.url, code: res.statusCode});
};
