import {
    EntityContext,
    IEntityContext,
    IProviderChildren,
    withProviderChildren
}                 from "@leight-core/viv";
import {useState} from "react";

export interface IEntityProviderProps<TEntity> {
    defaultEntity?: TEntity;
    children?: IProviderChildren<IEntityContext<any>>;
}

export const EntityProvider = <TEntity, >({defaultEntity, children}: IEntityProviderProps<TEntity>) => {
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
    >
        {withProviderChildren(children, EntityContext)}
    </EntityContext.Provider>;
};
