import {z}                      from "zod";
import {type IImportBeginEvent} from "./IImportBeginEvent";
import {type IImportEndEvent}   from "./IImportEndEvent";

export interface IImportHandler<TItem> {
    begin?(event: IImportBeginEvent): Promise<void>;

    end?(event: IImportEndEvent): Promise<void>;

    handler(item: TItem): Promise<any>;

    validator(): z.ZodType;
}
