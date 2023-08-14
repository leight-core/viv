import {type IWithIdentity}             from "@leight/query";
import {type IStoreSchema}              from "@leight/store";
import {type IMultiSelectionStoreProps} from "./IMultiSelectionStoreProps";

export type IMultiSelectionStore<TItem extends IWithIdentity> = IStoreSchema<IMultiSelectionStoreProps<TItem>>["Store"];
