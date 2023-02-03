import winston from "winston";

const {transports} = winston;
const {format} = winston;

export type ILogLevel =
	"info"
	| "error"
	| "warning"
	| "debug"
	| "silly";

export const createConsole = () => new transports.Console({
	format: format.combine(
		format.colorize(),
		format.ms(),
		format.simple(),
	),
});

const createDefaultMeta = (version: string) => ({
	labels: {
		version,
	},
});

const createDefaultLogger = (service: string, version: string, level: ILogLevel) => ({
	level,
	format: winston.format.json(),
	defaultMeta: createDefaultMeta(version),
	transports: [
		createConsole(),
	],
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
	}: IBootstrapLoggerRequest) => loggers.map(name => winston.loggers.add(name, createDefaultLogger(name, version, level)));
