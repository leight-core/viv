import {
    contextFactory,
    IEntityContext
} from "@leight/viv";

export const [
                 EntityContext,
                 useEntityContext,
                 useOptionalEntityContext,
             ] = contextFactory<IEntityContext<any>>("EntityContext");
