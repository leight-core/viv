import {varchar} from "drizzle-orm/pg-core";

export const string = (name: string) => varchar(name, {length: 255});
