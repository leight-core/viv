import {type IWithIdentitySchema} from "@leight/query";
import {type ICreateSchema}       from "./CreateSchema";
import {type IPatchSchema}        from "./PatchSchema";

/**
 * Entity definition is related together with following schemas
 */
export interface IEntitySchema<
    TEntity extends IWithIdentitySchema,
    TCreate extends ICreateSchema,
    TPatch extends IPatchSchema,
> {
    /**
     * Entity as the base (low-level) Entity, usually represents database row
     */
    Entity: TEntity;
    /**
     * Create schema defines, how to create an Entity
     */
    Create: TCreate;
    /**
     * Patch schema defines, how to mutate an Entity
     */
    Patch: TPatch;
    /**
     * How to create/alter an Entity
     */
    Upsert: IEntitySchema.Upsert<TCreate, TPatch>;
}

export namespace IEntitySchema {
    export type Entity = IWithIdentitySchema;

    /**
     * Upsert schema for an Entity
     */
    export interface Upsert<
        TCreate extends ICreateSchema,
        TPatch extends IPatchSchema,
    > {
        /**
         * How to create an Entity
         */
        create: TCreate;
        /**
         * How to patch an Entity if it exists
         */
        patch: TPatch;
    }
}
