import {ISelectValue} from "@leight/shared";

export type IToOptionMapper<TItem> = (item: TItem) => ISelectValue;
