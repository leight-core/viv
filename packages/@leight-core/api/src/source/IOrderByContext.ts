export interface IOrderByContext<TOrderBy = any> {
	readonly name: string;

	readonly orderBy: TOrderBy;

	setOrderBy(orderBy?: TOrderBy): void;
}
