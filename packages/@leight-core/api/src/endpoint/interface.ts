import {type NextApiRequest, type NextApiResponse} from "next";
import {type IQueryParams} from "../link";
import {type IContainer} from "../container";
import {type IUser} from "../user";
import {type IQuery} from "../source";

export interface INextApiRequest<
	TQuery extends IQueryParams = any,
	TRequest = undefined,
> extends Omit<NextApiRequest, "query"> {
	readonly query: TQuery;
	readonly body: TRequest;
}

export interface IEndpointParams<//
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
	TContainer extends IContainer = IContainer,
> {
	readonly req: INextApiRequest<TQueryParams, TRequest>;
	readonly res: NextApiResponse<TResponse>;
	readonly request: TRequest;
	readonly query: TQueryParams;
	readonly user: IUser;
	readonly container: TContainer;

	toBody(): Promise<Buffer>;

	end(chunk?: any): void;
}

/**
 * Generic endpoint; SDK generates as POST by default.
 */
export interface IEndpoint<// eslint-disable-next-line @typescript-eslint/no-unused-vars
	TName extends string,
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
	TContainer extends IContainer = IContainer,
> {
	/**
	 * Optional ACLs an endpoint would require on an user.
	 */
	acl?: string[];

	container(): Promise<TContainer>;

	handler(params: IEndpointParams<TRequest, TResponse, TQueryParams, TContainer>): Promise<TResponse | void>;
}

export type IEndpointCallback<// eslint-disable-next-line @typescript-eslint/no-unused-vars
	TName extends string,
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = (req: INextApiRequest<TQueryParams, TRequest>, res: NextApiResponse<TResponse>) => void;

/**
 * When fetching an individual item, done by GET.
 */
export type IGetEndpoint<//
	TName extends string,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = IEndpoint<TName, undefined, TResponse, TQueryParams>;

/**
 * When fetching a list of items (arrayed by default), done by GET.
 */
export type IListEndpoint<//
	TName extends string,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = IEndpoint<TName, undefined, TResponse, TQueryParams>;

/**
 * Mutation endpoint is a general endpoint used to do some server-side effect (some updated data or so).
 *
 * Defaults to POST.
 */
export type IMutationEndpoint<//
	TName extends string,
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = IEndpoint<TName, TRequest, TResponse, TQueryParams>;

export type IEntityEndpoint<//
	TName extends string,
	TRequest extends IQuery | undefined,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = IEndpoint<TName, TRequest, TResponse, TQueryParams>;

/**
 * Generic request/response.
 */
export type IRequestEndpoint<// eslint-disable-next-line @typescript-eslint/no-unused-vars
	TName extends string,
	TRequest,
	TResponse,
	TQueryParams extends IQueryParams = any,
> = IEndpoint<TName, TRequest, TResponse, TQueryParams>;

export class ClientError extends Error {
	readonly code: number;

	constructor(message: string, code = 400) {
		super(message);
		this.code = code;
	}
}
