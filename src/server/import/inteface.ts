export interface IImportTabs {
    tab: string;
    services: string[];
}

export type IImportTranslations = Record<string, string>;

export interface IImportMeta {
    tabs: IImportTabs[];
    translations: IImportTranslations;
}

export interface IImportSource<//
    TCreate extends Record<string, any>,
    TEntity extends Record<string, any>,
    > {
    /**
     * Create or update item.
     *
     * It also needs resolveId method to work properly.
     *
     * Internally, it should use create() with patch() in unique handler.
     */
    import(create: TCreate): Promise<TEntity>;
}
