import {z}             from "zod";
import {RequestSchema} from "../schema";

export interface IRequestType extends z.infer<typeof RequestSchema> {
}
