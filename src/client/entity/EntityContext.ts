import {IEntityContext} from "@leight-core/api";
import {useContext}     from "@leight-core/client";
import {createContext}  from "react";

export const EntityContext = createContext(null as unknown as IEntityContext<any>);

export const useEntityContext = <TEntity>(): IEntityContext<TEntity> => useContext(EntityContext, "EntityContext");
