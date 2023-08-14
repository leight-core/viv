import {type IWithIdentity}        from "@leight/query";
import {type IStoreSchema}         from "@leight/store";
import {type ISelectionStoreProps} from "./ISelectionStoreProps";

export type ISelectionStore<TItem extends IWithIdentity> = IStoreSchema<ISelectionStoreProps<TItem>>["Store"];
