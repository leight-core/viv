import {UseQueryResult} from "@tanstack/react-query";

export interface ISourceContext<TResponse> {
	readonly name: string;

	readonly result: UseQueryResult<TResponse[], any>;

	hasData(): boolean;

	data(): TResponse[];

	reset(): void;

	map(mapper: (item: TResponse) => any): any;
}
