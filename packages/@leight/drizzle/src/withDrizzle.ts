import {drizzle}    from "drizzle-orm/node-postgres";
import {PoolConfig} from "pg";
import {withPool}   from "./withPool";

export const withDrizzle = (config?: PoolConfig) => drizzle(withPool(config));
