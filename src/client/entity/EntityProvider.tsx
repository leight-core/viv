import {EntityContext} from "@leight-core/viv";
import {
    PropsWithChildren,
    useState
}                      from "react";

export type IEntityProviderProps<TEntity> = PropsWithChildren<{
    defaultEntity?: TEntity;
}>;

export const EntityProvider = <TEntity, >({defaultEntity, ...props}: IEntityProviderProps<TEntity>) => {
    const [entity, update] = useState<TEntity | undefined | null>(defaultEntity);
    return <EntityContext.Provider
        value={{
            entity,
            optional: () => entity,
            required: () => {
                if (!entity) {
                    throw new Error("Requested an Entity which is not set.");
                }
                return entity;
            },
            update,
        }}
        {...props}
    />;
};
