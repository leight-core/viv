import {
    IEntityContext,
    useContext
}                      from "@leight-core/viv";
import {createContext} from "react";

export const EntityContext = createContext(null as unknown as IEntityContext<any>);

export const useEntityContext = <TEntity>(): IEntityContext<TEntity> => useContext(EntityContext, "EntityContext");
