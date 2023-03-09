import {varchar} from "drizzle-orm/pg-core";

export const cuid2 = (name: string) => varchar(name, {length: 24});
