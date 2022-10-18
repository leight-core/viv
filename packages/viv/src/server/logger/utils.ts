import winston         from "winston";
import LokiTransport   from "winston-loki";
import TransportStream from "winston-transport";

const {transports} = winston;
const {format}     = winston;

export type ILogLevel =
    "info"
    | "error"
    | "warning"
    | "debug"
    | "silly";

interface LokiTransportOptions extends TransportStream.TransportStreamOptions {
    host: string;
    basicAuth?: string;
    headers?: object;
    interval?: number;
    json?: boolean;
    batching?: boolean;
    labels?: object;
    clearOnError?: boolean,
    replaceTimestamp?: boolean,
    gracefulShutdown?: boolean,
    timeout?: number,

    onConnectionError?(error: unknown): void
}

export const createConsole = () => new transports.Console({
    format: format.combine(
        format.colorize(),
        format.ms(),
        format.simple(),
    ),
});

export const createLoki = (options?: Partial<LokiTransportOptions>) => new LokiTransport({
    level: "debug",
    host:  (() => {
        const url = process.env.LOKI_URL;
        if (!url) {
            throw new Error(`Missing Loki env variable "LOKI_URL", for example http://127.0.0.1:3100.`);
        }
        return url;
    })(),
    ...options,
});

const createDefaultMeta = (version: string) => ({
    labels: {
        version,
    },
});

const createDefaultLogger = (service: string, version: string, level: ILogLevel, withLoki: boolean) => ({
    level,
    format:      winston.format.json(),
    defaultMeta: createDefaultMeta(version),
    transports:  [
                     createConsole(),
                     withLoki ? createLoki({
                         labels: {
                             version,
                             service,
                         },
                         level,
                     }) : null,
                 ].filter(i => i) as TransportStream[],
});

export interface IBootstrapLoggerRequest {
    loggers: string[];
    version?: string;
    level?: ILogLevel;
    withLoki?: boolean;
}

export const BootstrapLogger = (
    {
        loggers,
        version = process.env.NEXT_PUBLIC_BUILD || "edge",
        level = "info",
        withLoki = true,
    }: IBootstrapLoggerRequest) => loggers.map(name => winston.loggers.add(name, createDefaultLogger(name, version, level, withLoki)));
