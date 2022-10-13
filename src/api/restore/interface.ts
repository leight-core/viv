export interface IRestoreSource<//
	TEntity extends Record<string, any>,
	TBackup extends Record<string, any> = TEntity,
	> {
	/**
	 * Restore the given backed-up entity; if nothing provided, nothing happens.
	 *
	 * @param backup
	 */
	restore(backup?: TBackup): Promise<TEntity | undefined>;
}
