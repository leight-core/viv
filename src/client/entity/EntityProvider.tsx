import {
    EntityContext,
    IEntityContext,
    IProviderChildren,
    withProviderChildren
} from "@leight-core/viv";
import {
    useMemo,
    useState
} from "react";

export interface IEntityProviderProps<TEntity> {
    defaultEntity?: TEntity;
    children?: IProviderChildren<IEntityContext<TEntity>>;
}

export const EntityProvider = <TEntity, >({defaultEntity, children}: IEntityProviderProps<TEntity>) => {
    const [entity, update] = useState<TEntity | undefined | null>(defaultEntity);
    const context          = useMemo<IEntityContext<TEntity | undefined | null>>(() => ({
        entity,
        optional: () => entity,
        required: () => {
            if (!entity) {
                throw new Error("Requested an Entity which is not set.");
            }
            return entity;
        },
        update,
    }), []);
    return <EntityContext.Provider
        value={context}
    >
        {withProviderChildren(children, EntityContext)}
    </EntityContext.Provider>;
};
