export interface IFileStoreRequest {
    /**
     * File to store (absolute path); the source file will not be touched.
     */
    readonly file?: string;
    /**
     * Virtual path of the stored file.
     */
    readonly path: string;
    /**
     * Virtual filename (with optional extension).
     */
    readonly name: string,
    /**
     * If the file exists, should be replaced? If yes, original metadata should **not** be removed (e.g. database row), just updated.
     */
    readonly replace: boolean;
}
