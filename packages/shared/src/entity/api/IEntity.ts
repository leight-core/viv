/**
 * Basic entity to work with (used in various variants like creation, backup and whatever is needed).
 */
import {IWithIdentity} from "@leight/shared";

export type IEntity =
    Record<string, any>
    & IWithIdentity;
