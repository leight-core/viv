export interface IBackupService {
	backup(): Promise<any>;
}

export interface IBackupSource<//
	TEntity extends Record<string, any>,
	TBackup extends Record<string, any> = TEntity,
	> {
	/**
	 * This method adds support for making a backup of an entity (thus preparing it for
	 * restore counterpart).
	 *
	 * If nothing is returned, nothing should happen.
	 *
	 * @param entity
	 */
	backup(entity: TEntity): Promise<TBackup | undefined>;
}
