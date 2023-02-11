export interface IEntityContext<TEntity> {
	readonly entity: TEntity;

	optional(): TEntity | undefined | null;

	required(): TEntity;

	update(entity?: TEntity | null): void;
}
