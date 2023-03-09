import {cuid2} from "./cuid2";

export const id = () => cuid2("id").primaryKey();
