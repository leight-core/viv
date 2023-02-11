import {IEntityContext} from "@leight-core/api";
import {createContext}  from "react";
import {useContext}     from "../context";

export const EntityContext = createContext(null as unknown as IEntityContext<any>);

export const useEntityContext = <TEntity>(): IEntityContext<TEntity> => useContext(EntityContext, "EntityContext");
