import {
    EntityContext,
    IEntityContext,
    IProviderChildren,
    IWithIdentity,
    withProviderChildren
}                 from "@leight/viv";
import {useState} from "react";
import {useMemo}  from "use-memo-one";

export interface IEntityProviderProps<TEntity extends IWithIdentity> {
    defaultEntity?: TEntity;
    children?: IProviderChildren<IEntityContext<TEntity>>;
}

export const EntityProvider = <TEntity extends IWithIdentity>({defaultEntity, children}: IEntityProviderProps<TEntity>) => {
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
    }), [entity?.id]);
    return <EntityContext.Provider
        value={context}
    >
        {withProviderChildren(children, EntityContext)}
    </EntityContext.Provider>;
};
