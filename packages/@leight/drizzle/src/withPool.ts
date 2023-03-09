import {
    Pool,
    type PoolConfig
} from "pg";

export const withPool = (config?: PoolConfig) => new Pool({
    connectionString: process.env.DATABASE_URL,
    ...config,
});
