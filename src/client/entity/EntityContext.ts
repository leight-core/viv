import {
    createContext,
    IEntityContext,
    useContext,
    useOptionalContext
} from "@leight-core/viv";

export const EntityContext = createContext<IEntityContext<any>>();

export const useEntityContext         = <TEntity>() => useContext<IEntityContext<TEntity>>(EntityContext, "EntityContext");
export const useOptionalEntityContext = <TEntity>() => useOptionalContext<IEntityContext<TEntity>>(EntityContext);
