import {
    contextFactory,
    IEntityContext
} from "@leight-core/viv";

export const [
                 EntityContext,
                 useEntityContext,
                 useOptionalEntityContext,
             ] = contextFactory<IEntityContext<any>>("EntityContext");
